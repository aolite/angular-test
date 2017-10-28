import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../alert-service.service";
import {AuthenticationService} from "../authentication.service";
import {User} from "../../datamodel/User";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  loading = false;
  currentUser: User;
  returnUrl: string;
  loginForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private alertService: AlertService,
              public fb: FormBuilder,
              public dialogRef: MatDialogRef<AppLoginComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    },{});

  }

  ngOnInit() {
    if (this.currentUser){
      this.router.navigate(['/home']);
    }
    // reset login status
    //this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  login(user: User):void{

    this.authenticationService.login(user.username, user.password)
      .subscribe(
        data => {
          this.closeDialog();
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  closeDialog(): void{
    this.dialogRef.close();
  }

}
