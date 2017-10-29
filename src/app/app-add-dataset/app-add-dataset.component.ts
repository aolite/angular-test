import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DatasetService} from "../dataset.service";
import {AlertService} from "../alert-service.service";

@Component({
  selector: 'app-app-add-dataset',
  templateUrl: './app-add-dataset.component.html',
  styleUrls: ['./app-add-dataset.component.css']
})
export class AppAddDatasetComponent implements OnInit {

  loading = false;
  addDatasetForm: FormGroup;
  constructor(private router: Router,
              private datasetService: DatasetService,
              private alertService: AlertService,
              public fb: FormBuilder) {
    this.addDatasetForm = fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    }, {});
  }

  ngOnInit() {
  }

}
