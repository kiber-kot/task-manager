import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../service/data.service";
import {Category} from "../../../model/Category";
import {Task} from "../../../model/Task";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(private data: DataService) {
  }

  ngOnInit(): void {
    this.categories = this.data.getCategory();
  }

}
