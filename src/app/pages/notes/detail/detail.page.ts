/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Note } from '../Note';
import { notes } from '../notes';
import { NotesService } from '../../../services/notes.service';
import {
  ActivatedRoute,
  Router,
  RouterEvent,
  RouterLink,
} from '@angular/router';
import { IonDatetime } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  note: Note = {
    id: '',
    date: '',
    body: '',
    title: '',
  };
  formattedString!: string;
  status = false;
  constructor(
    private noteService: NotesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alert: AlertController
  ) {}
  //
  ngOnInit() {
    this.getNote();

  }
  getNote() {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      if (!params.has('id')) {
        return;
      }
      const id = params.get('id');
      this.noteService.getSingle(id).subscribe((note) => {
        this.note = note.note;
        this.formattedString = format(parseISO(note.note.date), 'MMM d, yyyy');
      });

      return;
    });
  }
  toggleStatus() {
    this.status = !this.status;
    this.getNote();
  }

  //Delete Note
  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Are You Sure',
      message: 'You are about to Delete this Note',
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel',
          cssClass: 'primary',
        },
        {
          text: 'Delete',
          cssClass: 'danger',
          handler: () => {
            this.exec();
          },
        },
      ],
    });
    await alert.present();
  }
  exec() {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      const id = params.get('id');
      this.noteService.deletenote(id).subscribe();
      this.router.navigate(['/notes']);
    });
  }
  delete() {
    this.presentAlert();
  }

  //Updating Note
  update() {
    this.status = !this.status;

    try {
      this.activatedRoute.paramMap.subscribe((params: any) => {
        if (!params.has('id')) {
          return;
        }
        const id = params.get('id');
        const note: Note = {
          id,
          body: (<HTMLInputElement>document.getElementById('bodyInput')).value,
          title: (<HTMLInputElement>document.getElementById('titleInput'))
            .value,
          date: (<HTMLInputElement>document.getElementById('dateInput')).value,
        };
        this.noteService.updateNote(id, note).subscribe();
      });
    } finally {
      this.router.navigate(['/notes']);
      this.getNote();
    }
  }
}
