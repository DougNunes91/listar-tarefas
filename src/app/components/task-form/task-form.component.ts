import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styles: [],
})
export class TaskFormComponent implements OnInit {
  task = '';

  constructor(public taskService: TaskService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.taskService.addTask(this.task);
    this.task = '';
  }
}
