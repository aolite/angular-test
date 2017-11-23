import {Tags} from './Tags';
import {Place} from './Place';

export interface DataCatalog {
  id: number;
  name: string;
  author: string;
  description: string;
  dataPublished: string;
  image: string;
  url: string;
  license: string;
  query: string;
  topic: string;
  tags: Tags [];
  place: Place;
}


