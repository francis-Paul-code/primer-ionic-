import { Component, OnInit } from '@angular/core';
import { notes } from './notes';
import { Note } from './Note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  note: Note[] = [];
  constructor(private notesService: NotesService) { }
  ngOnInit() {
    this.getAll();
  }
 getAll() {
    this.notesService.getNote().subscribe((item) => {
      this.note = item.notes;
    });
 }
}
