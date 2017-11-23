import { Component, OnInit } from '@angular/core';
import {DataCatalog} from "../../datamodel/DataCatalog";
import {DatacatalogService} from "../datacatalog.service";

@Component({
  selector: 'app-map-chart-datasources',
  templateUrl: './map-chart-datasources.component.html',
  styleUrls: ['./map-chart-datasources.component.css']
})
export class MapChartDatasourcesComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  catalogs: DataCatalog [];

  constructor(private datacatalogService: DatacatalogService) {

  }

  ngOnInit() {
    this.datacatalogService.getDatacatalogs().then(data => {
      this.catalogs = data;
    });
  }
}
