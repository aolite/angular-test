import { Injectable } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {Headers} from '@angular/http';


import 'rxjs/add/operator/map'
import {User} from "../datamodel/User";

@Injectable()
export class UserService {

  private userUrl = 'http://localhost:8080/users';

  constructor(private http:Http) { }


  getUserById(_id: string) {
    console.log('user get:'+ this.userUrl+_id)
    return this.http.get(this.userUrl+"/"+_id).map((response) => response.json());
  }

  getUsers(): Promise<User[]> {
    return this.http
      .get(this.userUrl)
      .toPromise()
      .then((response) => {
        return response.json() as User[];
      })
      .catch(this.handleError);
  }

  getUser(id: string): Promise<User> {
    return this.http
      .get(this.userUrl+"/"+id)
      .toPromise()
      .then((response) => {
        return response.json() as User;
      })
      .catch(this.handleError);
  }

  save(user:User): Promise<User>{
    return this.create (user);
  }

  upate (user:User): Promise<User>{
    return this.update(user);
  }

  private create(user: User) {

    let heads = new Headers({ 'Content-Type': 'application/json' });

    let options = new RequestOptions({ headers: heads });

    return this.http
      .post(this.userUrl, JSON.stringify(user),options)
      .toPromise()
      .then(res => res.json().data as User)
      .catch(this.handleError);
  }

  private update(user: User): Promise<User> {
    const url = `${this.userUrl}/${user.username}`;

    let heads = new Headers({ 'Content-Type': 'application/json' });

    let options = new RequestOptions({ headers: heads });

    return this.http
      .put(url, JSON.stringify(user), options)
      .toPromise()
      .then(res => res.json().data as User)
      .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    const url = `${this.userUrl}/${id}`;
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }



}
