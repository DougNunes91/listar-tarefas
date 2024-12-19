import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styles: [],
})
export class TaskComponent implements OnInit {
  @Input() taskInput: Task;
  completed: boolean = false;
  todo: Task;

  constructor(public taskService: TaskService) {}

  ngOnInit(): void {}

  onCheckboxChange(event: any): void {
    this.completed = !this.completed;
    console.log('Task status changed:', this.completed);
  }

  onCliCk(e) {
    console.log('Clicked');
    console.log(e);
  }

  toggleClass() {
    if (this.completed) {
      return {
        'list-group-item-success': this.completed,
        'border-primary': this.completed,
      };
    }
  }

  deleteTask(item) {
    this.todo = item;
    this.taskService.deleteTask(item);
  }
}