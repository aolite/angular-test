import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataSource} from '@angular/cdk/collections';
import {AlertService} from "../alert-service.service";
import {UserService} from "../user.service";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {Topic} from "../../datamodel/Topic";
import {TopicService} from "../topic.service";

@Component({
  selector: 'app-app-admin-topics',
  templateUrl: './app-admin-topics.component.html',
  styleUrls: ['./app-admin-topics.component.css']
})
export class AppAdminTopicsComponent implements OnInit {

  topics: Topic[];
  displayedColumns = ['name', 'description', 'action'];
  dataSource: TableDataSource | null;

  constructor(private router: Router,
              private topicService: TopicService) { }

  ngOnInit() {
    this.dataSource = new TableDataSource(this.topicService);
  }

  addTopic (): void {
    this.router.navigate(['home/topics/add']);
  }

  editTopic (topic: Topic): void {
    console.log ('edit topic' + topic.name);
    this.router.navigate(['home/topics/detail/', topic.name]);
  }

  deleteTopic(topic: Topic): void {
    console.log ('delete topic' + topic.name);
    this.dataSource.deleteDataSource(topic);
  }

}

export class TableDataSource extends DataSource<Topic> {

  constructor(private topicService: TopicService) {
    super();
  }

  subject: BehaviorSubject<Topic[]> = new BehaviorSubject<Topic[]>([]);

  connect(): Observable<Topic[]> {
    console.log('connect');
    if (!this.subject.isStopped) {
      this.topicService.getTopics().then(res => {
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

  deleteDataSource(topic: Topic): void {
    this.topicService.deleteTopic(topic.name)
      .then(() => {
        this.connect();
      });
  }
}
