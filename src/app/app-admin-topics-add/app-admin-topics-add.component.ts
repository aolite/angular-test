import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {TopicService} from "../topic.service";
import {AlertService} from "../alert-service.service";
import {Topic} from "../../datamodel/Topic";

@Component({
  selector: 'app-app-admin-topics-add',
  templateUrl: './app-admin-topics-add.component.html',
  styleUrls: ['./app-admin-topics-add.component.css']
})
export class AppAdminTopicsAddComponent implements OnInit {

  loading = false;
  addTopicForm: FormGroup;

  constructor(private router: Router,
              private topicService: TopicService,
              private alertService: AlertService,
              public fb: FormBuilder) {
    this.addTopicForm = fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    }, {});

  }

  ngOnInit() {
  }

  registerTopic(topic: Topic){
    this.loading = true;

    this.topicService.createTopic(topic)
      .then(() =>{
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/home/admin/topics']);
      })
      .catch(error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }

}
