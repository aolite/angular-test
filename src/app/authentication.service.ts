import {EventEmitter, Injectable, Output} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import 'rxjs/add/operator/map'
import {UserService} from "./user.service";
import {User} from "../datamodel/User";

@Injectable()
export class AuthenticationService {
  private userUrl = 'http://localhost:8080/users/';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private http:Http,
              private userService: UserService) { }

  login(uname:string, pass:string){
    console.log("login into the platform using the url: "+this.userUrl+'authenticate');

    return  this.http.post(this.userUrl+'authenticate',{
      email: null,
      username:uname,
      password:pass,
      typeuser: null
    })
      .map((response) => {
        // login successful if there's a jwt token in the response
        if (!response['_body']) {
          throw new Error ("Incorrect Username or Password");
        }
        let user = response.json() as User;
        if (user) {
          console.log("user distinto null"+ user.username);
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          //this.userService.getUserById(user.username).map(u => u);
          this.userService.getUser(user.username).then(u=>u).catch(this.handleError);
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.getLoggedInName.emit(true);
        }

        return user;
      });
  }

  logout(){
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.getLoggedInName.emit(false);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
