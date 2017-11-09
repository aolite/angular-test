import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../datamodel/User";
import {Router} from "@angular/router";
import {DataSource} from '@angular/cdk/collections';
import {UserService} from "../user.service";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-app-admin-users',
  templateUrl: './app-admin-users.component.html',
  styleUrls: ['./app-admin-users.component.css']
})
export class AppAdminUsersComponent implements OnInit {

  users: User[];
  displayedColumns = ['username', 'email', 'password', 'typeuser', 'action'];
  dataSource: TableDataSource | null;

  constructor(private router: Router,
              private userService: UserService) {

  }


  ngOnInit() {
    this.dataSource = new TableDataSource(this.userService);
  }

  editUser (user): void {
    console.log ('edit user' + user.username);
    this.router.navigate(['home/admin/users/detail/', user.username]);
  }

  getUsers(): void {
    this.userService.getUsers().then(data => this.users = data);
  }

  deleteUser(user): void {
    console.log ('delete user' + user.username);
    this.dataSource.deleteDataSource(user);
  }



}

export class TableDataSource extends DataSource<User> {

  constructor(private userService: UserService) {
    super();
  }

  subject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  connect(): Observable<User[]> {
    console.log('connect');
    if (!this.subject.isStopped) {
      this.userService.getUsers().then(res => {
        console.log(res);
        this.subject.next(res);
      });
    }
    return Observable.merge(this.subject);
  }

  disconnect() {
    this.subject.complete();
    this.subject.observers = [];
  }

  deleteDataSource(user: User): void {
    this.userService.delete(user.username)
      .then(() => {
        this.connect();
      });
  }
}


