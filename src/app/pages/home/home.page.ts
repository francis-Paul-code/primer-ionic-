
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../tasks/Task';
import { Note } from '../notes/Note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  tasks: Task[] = [];
  note: Note[] = [];
  constructor(
    private taskService: TaskService,
    private notesService: NotesService
  ) {}
  ngOnInit() {
    this.getTasks();
    this.geNotes();
  }
  getTasks() {
    this.taskService.getTask().subscribe((item) => {
      this.tasks = item.tasks.slice(Math.max(item.tasks.length - 3, 0));
      console.log(this.tasks);
    });
  }
  geNotes() {
    this.notesService.getNote().subscribe((item) => {
      this.note = item.notes.slice(Math.max(item.notes.length - 3, 0));
      console.log(this.note);
    });
  }
}
