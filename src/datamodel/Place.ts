import {GeoCoordinates} from "./GeoCoordinates";

export interface Place {
  id: number;
  name: string;
  geo: GeoCoordinates;
}
