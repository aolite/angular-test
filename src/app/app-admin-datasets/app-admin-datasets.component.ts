import { Component, OnInit } from '@angular/core';
import {Dataset} from "../../datamodel/Dataset";
import {Router} from "@angular/router";
import {DatasetService} from "../dataset.service";

@Component({
  selector: 'app-app-admin-datasets',
  templateUrl: './app-admin-datasets.component.html',
  styleUrls: ['./app-admin-datasets.component.css']
})
export class AppAdminDatasetsComponent implements OnInit {

  datasets: Dataset [];

  constructor(private router: Router,
              private datasetsService: DatasetService) { }

  ngOnInit() {
    this.datasetsService.getDatasets().then(data => this.datasets = data);
  }

  viewDataset(ds: Dataset): void {
    console.log('It is the dataset' + ds.name );
  }

  addDataset(): void {
    this.router.navigate(['/dataset/add']);
  }

}
