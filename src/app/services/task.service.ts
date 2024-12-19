import { Injectable } from '@angular/core';
import { Task } from '../models/Task';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  fav = [];
  taskList: Task[] = [
    {
      id: 1,
      title: 'Task One',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Task Two',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Task Three',
      isCompleted: false,
    },
  ];

  constructor(private deletePopup: ToastrService) {}

  deleteTask(item) {
    let index = this.taskList.indexOf(item);
    this.taskList.splice(index, 1);
  }

  addTask(title) {
    let id = this.taskList.length + 2;

    const item: Task = {
      id: id,
      isCompleted: false,
      title,
    };
    this.taskList.unshift(item);
  }
}
