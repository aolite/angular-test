import { Component, OnInit } from '@angular/core';
import {DatacatalogService} from "../datacatalog.service";
import {DataCatalog} from "../../datamodel/DataCatalog";

@Component({
  selector: 'app-map-chart',
  templateUrl: './map-chart.component.html',
  styleUrls: ['./map-chart.component.css']
})
export class MapChartComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  catalogs: DataCatalog [];

  constructor(private datacatalogService: DatacatalogService) {

  }

  ngOnInit() {
    this.datacatalogService.getDatacatalogs().then(data =>{
      this.catalogs = data;
    });
  }

  clickedMarker(label: string, index: number) {
    console.log('clicked the marker:');
  }

}
