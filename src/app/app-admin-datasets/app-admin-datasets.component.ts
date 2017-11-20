import { Component, OnInit } from '@angular/core';
import {Dataset} from "../../datamodel/Dataset";
import {Router} from "@angular/router";
import {DatasetService} from "../dataset.service";
import {RouterNamesService} from "../router-names.service";
import {User} from "../../datamodel/User";

@Component({
  selector: 'app-app-admin-datasets',
  templateUrl: './app-admin-datasets.component.html',
  styleUrls: ['./app-admin-datasets.component.css']
})
export class AppAdminDatasetsComponent implements OnInit {

  datasets: Dataset [];
  users: User[];

  constructor(private router: Router,
              private datasetsService: DatasetService,
              private routeNames: RouterNamesService) {
    this.routeNames.title.next('Datasets');
  }

  ngOnInit() {
    this.datasetsService.getDatasets().then(data => this.datasets = data);
    this.datasetsService.getSemanticUserData().then(data => {
      this.users = data['@graph'] ;
    });

  }

  viewDataset(ds: Dataset): void {
    console.log('It is the dataset' + ds.name );
  }

  addDataset(): void {
    this.router.navigate(['/home/admin/dataset/add']);
  }

}
