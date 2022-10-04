import {Priority} from "./Priority";
import {Category} from "./Category";

export class Task {
  _id: number;
  _title: string;
  _completed: boolean;
  _priority?: Priority;
  _category?: Category;
  _date?: Date;

  constructor(id: number, title: string, completed: boolean, priority?: Priority, catecory?: Category, date?: Date) {
    this._id = id;
    this._title = title;
    this._completed = completed;
    this._priority = priority;
    this._category = catecory;
    this._date = date
  }
}
