import { Injectable } from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/TestData";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCategory(): Category[]{
    return TestData.categories;
  }
}
