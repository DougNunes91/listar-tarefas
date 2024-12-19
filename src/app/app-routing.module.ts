import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Route[] = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'add', component: TaskFormComponent },
  { path: 'list', component: TaskListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
