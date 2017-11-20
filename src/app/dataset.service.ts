import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Dataset} from "../datamodel/Dataset";
import {User} from "../datamodel/User";

@Injectable()
export class DatasetService {

  private datasetUrl = 'http://localhost:8080/dataSets';

  constructor(private http: Http) { }

  getDatasets(): Promise<Dataset[]>{
    return this.http
      .get(this.datasetUrl)
      .toPromise()
      .then((response) => {
        return response.json() as Dataset[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  //TODO: Borrar

  getSemanticUserData(): Promise<User[]> {
    return this.http
      .get('http://localhost:8080/semantic/dataSet')
      .toPromise()
      .then((response) => {
        return response.json() as User[];
      })
      .catch(this.handleError);
  }

}
