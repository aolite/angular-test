import { Component, OnInit } from '@angular/core';
import {DatacatalogService} from '../datacatalog.service';
import {DataCatalog} from '../../datamodel/DataCatalog';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {RouterNamesService} from '../router-names.service';

@Component({
  selector: 'app-admin-datacatalog-detail',
  templateUrl: './admin-datacatalog-detail.component.html',
  styleUrls: ['./admin-datacatalog-detail.component.css']
})
export class AdminDatacatalogDetailComponent implements OnInit {

  catalog: DataCatalog;

  constructor(private datacatalogService: DatacatalogService,
              private route: ActivatedRoute,
              private routeNames: RouterNamesService) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.datacatalogService.getDataCatalogById(+params.get('id')))
      .subscribe(dc => {
        this.catalog = dc;
        this.routeNames.title.next(this.catalog.name + ' Data Catalog Detail');
      });
  }

}
