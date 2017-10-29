import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Dataset} from "../datamodel/Dataset";

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

}
