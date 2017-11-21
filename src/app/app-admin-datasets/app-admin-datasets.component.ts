import { Component, OnInit } from '@angular/core';
import {Dataset} from "../../datamodel/Dataset";
import {Router} from "@angular/router";
import {DatasetService} from "../dataset.service";
import {RouterNamesService} from "../router-names.service";
import {User} from "../../datamodel/User";
import {DataCatalog} from "../../datamodel/DataCatalog";
import {isUndefined} from "util";

@Component({
  selector: 'app-app-admin-datasets',
  templateUrl: './app-admin-datasets.component.html',
  styleUrls: ['./app-admin-datasets.component.css']
})
export class AppAdminDatasetsComponent implements OnInit {

  datasets: Dataset [];
  catalogs: DataCatalog[];

  constructor(private router: Router,
              private datasetsService: DatasetService,
              private routeNames: RouterNamesService) {
    this.routeNames.title.next('Datasets');
  }

  ngOnInit() {
    //this.datasetsService.getDatasets().then(data => this.datasets = data);
    this.datasetsService.getSemanticUserData().then(data => {
      this.catalogs = data['@graph'];
      console.log(this.catalogs)
      if (this.catalogs === undefined) {
        console.log(data['@id'])
        if (data['@id'] !== undefined) {
          var data_instance = new DataCatalog ();
          data_instance['@id'] = data['@id'];
          data_instance['@context'] = data['@context'];
          data_instance['@type'] = data['@type'];
          data_instance.author = data['author'];
          data_instance.name = data['name'];
          data_instance.description = data['description'];
          data_instance.datePublished = data['datePublished'];
          data_instance.image =  data['image'];
          data_instance.url = data['url'];

          this.catalogs = [];
          this.catalogs.push(data_instance);

        }

      }
    });

  }

  viewDataset(ds: Dataset): void {
    console.log('It is the dataset' + ds.name );
  }

  addDataset(): void {
    this.router.navigate(['/home/admin/dataset/add']);
  }

  deleteDataCatalog(dataCatalog: DataCatalog): void {
    this.datasetsService.deleteDataCatalog(dataCatalog['@id']).then(() => {
      this.catalogs= this.catalogs.filter(cat => cat['@id'] !== dataCatalog['@id']);
    });
  }

}
