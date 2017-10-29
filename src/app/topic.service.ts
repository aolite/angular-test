import { Injectable } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {Headers} from '@angular/http';
import {Topic} from "../datamodel/Topic";

@Injectable()
export class TopicService {

  private topicUrl = 'http://localhost:8080/topics';

  constructor(private http: Http) { }

  createTopic(topic: Topic): Promise<Topic>{
    let heads = new Headers({ 'Content-Type': 'application/json' });

    let options = new RequestOptions({ headers: heads });

    return this.http
      .post(this.topicUrl, JSON.stringify(topic), options)
      .toPromise()
      .then(res => res.json().data as Topic)
      .catch(this.handleError);
  }

  getTopics(): Promise<Topic[]>{
    return this.http
      .get(this.topicUrl)
      .toPromise()
      .then((response) => {
        return response.json() as Topic[];
      })
      .catch(this.handleError);
  }

  getTopic (id: string): Promise<Topic>{
    return this.http
      .get(this.topicUrl + '/' + id)
      .toPromise()
      .then((response) => {
        return response.json() as Topic;
      })
      .catch(this.handleError);
  }

  updateTopic (topic: Topic): Promise<Topic>{
    const url = `${this.topicUrl}/${topic.name}`;

    let heads = new Headers({ 'Content-Type': 'application/json' });

    let options = new RequestOptions({ headers: heads });

    return this.http
      .put(url, JSON.stringify(topic), options)
      .toPromise()
      .then(res => res.json().data as Topic)
      .catch(this.handleError);
  }

  deleteTopic(id: string): Promise<void> {
    const url = `${this.topicUrl}/${id}`;
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
