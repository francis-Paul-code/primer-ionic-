/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  constructor(private alert: AlertController, private router: Router, private noteService: NotesService) {}

  ngOnInit() {}
  save() {
    const note = {
      title: (<HTMLInputElement>document.getElementById('titleInput')).value,
      date: (<HTMLInputElement>document.getElementById('dateInput')).value,
      body: (<HTMLInputElement>document.getElementById('bodyInput')).value,
    };
    if (note.title === '' || note.body === '' || note.date === undefined) {
      return this.errorAlert();
    } else {
      this.noteService.addNote(note).subscribe();
      this.successAlert();
    }
  }
  async successAlert() {
    const alert = await this.alert.create({
      header: 'Note Added',
      buttons: [
        {
          text: 'Okay',
          role: 'Cancel',
          cssClass: 'primary',
          handler: () => {
            this.router.navigate(['/notes']);
          },
        },
      ],
    });
    await alert.present();
  }

  async errorAlert() {
    const alert = await this.alert.create({
      header: 'Please Enter Valid Inputs',
      message: 'Inputs Empty, Please eneter valid inputs',
      buttons: [
        {
          text: 'Okay',
          role: 'Cancel',
          cssClass: 'primary',
        },
      ],
    });
    await alert.present();
  }
}
