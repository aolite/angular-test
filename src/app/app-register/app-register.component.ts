import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AlertService} from "../alert-service.service";
import {UserService} from "../user.service";
import {emailValidator, matchingPasswords} from "../../validators/validators";
import {User} from "../../datamodel/User";

@Component({
  selector: 'app-app-register',
  templateUrl: './app-register.component.html',
  styleUrls: ['./app-register.component.css']
})
export class AppRegisterComponent implements OnInit {

  loading = false;
  registrationForm: FormGroup;
  user_role: any[] = [
    'dataOwner',
    'dataProvider'
  ];

  constructor(private router: Router,
              private userService: UserService,
              private alertService: AlertService,
              public fb: FormBuilder) {
    this.registrationForm = fb.group({
      username: ['', Validators.required],
      email: ['', Validators.compose([Validators.required,  Validators.email])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      typeuser: ['', Validators.required]
    }, {validator: matchingPasswords('password', 'confirmPassword')});

  }

  ngOnInit() {
  }

  register(user: User): void {
    console.log(user);

    this.loading = true;

    this.userService.save(user)
      .then(u => {
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/']);
      })
      .catch(error => {
        this.alertService.error(error);
        this.loading = false;
      });

  }

  getEmailError() {
    return this.registrationForm.controls.email.hasError('email') ? 'Not a valid email' :
        '';
  }
}
