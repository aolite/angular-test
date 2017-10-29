import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../datamodel/User";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlertService} from "../alert-service.service";
import {UserService} from "../user.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {matchingPasswords} from "../../validators/validators";
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-app-admin-user-detail',
  templateUrl: './app-admin-user-detail.component.html',
  styleUrls: ['./app-admin-user-detail.component.css']
})
export class AppAdminUserDetailComponent implements OnInit {

  @Input() user: User;
  loading = false;
  userDetailForm: FormGroup;
  user_role: any[] = [
    'dataOwner',
    'dataProvider'
  ];

  constructor(public fb: FormBuilder,
              private alertService: AlertService,
              private userService: UserService,
              private route: ActivatedRoute,
              private location: Location) {
    this.userDetailForm = fb.group({
      username: [''],
      email: ['', Validators.compose([Validators.email])],
      password: [''],
      confirmPassword: [''],
      typeuser: ['']
    }, {validator: matchingPasswords('password', 'confirmPassword')});

  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.userService.getUser(params.get("id")))
      .subscribe(user => {
        this.user = user[0];
        console.log('this.user =' + this.user.username);
      });
  }

  goBack(): void {
    this.location.back();
  }

  getEmailError() {
    return this.userDetailForm.controls.email.hasError('email') ? 'Not a valid email' :
      '';
  }

  updateUser(value: User): void {
    this.loading = true;

    value.username = !value.username? this.user.username : value.username;
    value.email = !value.email? this.user.email : value.email;
    value.password = !value.password? this.user.password : value.password;
    value.is_admin = this.user.is_admin;

    console.log(value)

    this.userService.upate(value)
      .then(u =>{
        this.alertService.success('Registration successful', true);
        this.goBack();
      })
      .catch(error =>{
        this.alertService.error(error);
        this.loading = false;
      });
  }

}
