import { Component, OnInit } from '@angular/core';
import {Task} from "../../model/Task"
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.tasks = this.data.getTask();
  }

}
