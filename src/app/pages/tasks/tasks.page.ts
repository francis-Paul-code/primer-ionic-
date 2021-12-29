import { Component, OnInit } from '@angular/core';
import { Task } from './Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }
  ngOnInit() {
    this.getTasks();
  }
  getTasks() {
    this.taskService.getTask().subscribe((item) => {
      this.tasks = item.tasks;
    });
  }

}
