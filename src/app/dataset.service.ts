import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Dataset} from '../datamodel/Dataset';
import {DataCatalog} from '../datamodel/DataCatalog';

@Injectable()
export class DatasetService {

  private datasetUrl = 'http://localhost:8080/dataSets';

  private dataCatalog = 'http://localhost:8080/semantic/datacatalog';

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

  getSemanticUserData(): Promise<DataCatalog[]> {

    return this.http
      .get('http://localhost:8080/semantic/datacatalog')
      .toPromise()
      .then((response) => {
        return response.json() as DataCatalog[];
      })
      .catch(this.handleError);
  }

  deleteDataCatalog(id: string): Promise<void> {
    const url = `${this.dataCatalog}/${id}`;
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

}
