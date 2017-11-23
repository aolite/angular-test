import { Component, OnInit } from '@angular/core';
import {Dataset} from "../../datamodel/Dataset";
import {Router} from "@angular/router";
import {DatasetService} from "../dataset.service";
import {RouterNamesService} from "../router-names.service";
import {User} from "../../datamodel/User";
import {DataCatalog} from "../../datamodel/DataCatalog";
import {isUndefined} from "util";
import {DatacatalogService} from "../datacatalog.service";

@Component({
  selector: 'app-app-admin-datasets',
  templateUrl: './app-admin-datasets.component.html',
  styleUrls: ['./app-admin-datasets.component.css']
})
export class AppAdminDatasetsComponent implements OnInit {

  catalogs: DataCatalog[];

  constructor(private router: Router,
              private datacatalogService: DatacatalogService,
              private routeNames: RouterNamesService) {
    this.routeNames.title.next('Data Catalogs Collection');
  }

  ngOnInit() {
   /* this.datasetsService.getSemanticUserData().then(data => {
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
    */
    this.datacatalogService.getDatacatalogs().then(data => {
      this.catalogs = data;
    });
  }

  viewDataset(ds: Dataset): void {
    console.log('It is the dataset' + ds.name );
  }

  addDataset(): void {
    this.router.navigate(['/home/admin/dataset/add']);
  }

  datacatalogDetail (id: number) {
    console.log('Go to Catalog Detail' + id);
    this.router.navigate(['/home/admin/dataset/detail/', id ]);
  }

  deleteDataCatalog(dataCatalog: DataCatalog): void {
    console.log ('Remove Data Catalog');
    this.datacatalogService.deleteDataCatalog(dataCatalog.id).then(() => {
      this.catalogs = this.catalogs.filter(catalog => catalog.id !== dataCatalog.id);
    });
    /*this.datasetsService.deleteDataCatalog(dataCatalog['@id']).then(() => {
      this.catalogs = this.catalogs.filter(cat => cat['@id'] !== dataCatalog['@id']);
    });
    */
  }

}
