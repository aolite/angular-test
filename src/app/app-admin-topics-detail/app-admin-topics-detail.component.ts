import {Component, Input, OnInit} from '@angular/core';
import {Topic} from "../../datamodel/Topic";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AlertService} from "../alert-service.service";
import {TopicService} from "../topic.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-app-admin-topics-detail',
  templateUrl: './app-admin-topics-detail.component.html',
  styleUrls: ['./app-admin-topics-detail.component.css']
})
export class AppAdminTopicsDetailComponent implements OnInit {

  @Input() topic: Topic;
  loading = false;
  topicDetailForm: FormGroup;

  constructor(public fb: FormBuilder,
              private alertService: AlertService,
              private topicService: TopicService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) {
    this.topicDetailForm = fb.group({
      name: [''],
      description: ['']
    }, {});

  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.topicService.getTopic(params.get("id")))
      .subscribe(topic => {
        this.topic = topic[0];
        console.log('this.topic =' + this.topic.name);
      });
  }

  updateTopic(value: Topic): void {
    this.loading = true;

    value.name = !value.name ? this.topic.name : value.name;
    value.description = !value.description ? this.topic.description : value.description;

    console.log(value);

    this.topicService.updateTopic(value)
      .then(u =>{
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/home/topics']);
      })
      .catch(error =>{
        this.alertService.error(error);
        this.loading = false;
      });
  }

}
