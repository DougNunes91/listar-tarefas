import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styles: [],
})
export class TaskListComponent implements OnInit {
  constructor(public taskService: TaskService) {}

  ngOnInit(): void {}
}
