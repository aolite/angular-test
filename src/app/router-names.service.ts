import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class RouterNamesService {

  public title = new Subject();

}
