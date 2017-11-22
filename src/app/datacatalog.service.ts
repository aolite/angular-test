import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {DataCatalog} from "../datamodel/DataCatalog";

@Injectable()
export class DatacatalogService {

  private dataCatalogUrl = 'http://localhost:8080/semantic/datacatalog';

  constructor(private http: Http) { }

  getDatacatalogs(): Promise<DataCatalog[]> {
    return this.http.get(this.dataCatalogUrl)
      .toPromise()
      .then((response) => {
        return response.json() as DataCatalog[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
