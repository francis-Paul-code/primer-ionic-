import { Component, OnInit, Input } from '@angular/core';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input() title!: string;
  @Input() date!: string;
  @Input() body!: string;
  formattedString!: string;
  constructor() {}
  ngOnInit() {
     this.formattedString = format(parseISO(this.date), 'MMM d, yyyy');
  }
}
