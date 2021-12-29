/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable max-len */
import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../pages/tasks/Task';
import { TaskService } from 'src/app/services/task.service';
import { IonDatetime } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() body: string = '';
  @Input() priority: string = '';

  editStatus = false;
  editing = false;
  color!: string;
  formattedString!: string;
  constructor(
    private taskService: TaskService,
    private alert: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.badgeColor();
    this.formattedString = format(
      parseISO(this.date),
      'MMM d, yyyy'
    );
  }

  badgeColor() {
    if (this.priority === 'none') {
      this.color = '#6C757D';
    }
    if (this.priority === 'urgent') {
      this.color = '#DD4145';
    }
    if (this.priority === 'high') {
      this.color = '#563D7C';
    }
    if (this.priority === 'medium') {
      this.color = '#027AFB';
    }
    if (this.priority === 'low') {
      this.color = '#51A846';
    }
  }
  toggleCard() {
    this.editStatus = !this.editStatus;
  }
  edit() {
    this.editing = !this.editing;
  }
  updateData() {
    const id = this.id;
    const task: Task = {
      id: this.id,
      title: (<HTMLInputElement>document.getElementById('titleInput')).value,
      date: (<HTMLInputElement>document.getElementById('dateInput')).value,
      body: (<HTMLInputElement>document.getElementById('bodyInput')).value,
      priority: (<HTMLInputElement>document.getElementById('priority')).value,
    };

    this.taskService.updateTask(task, id).subscribe();
    this.editStatus = !this.editStatus;
    this.editing = !this.editing;
    this.reloadCurrentRoute();
  }

  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Are You Sure',
      message: 'You are about to Delete this Task',
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
            const id = this.id;
            this.taskService.deleteTask(id).subscribe();
             this.reloadCurrentRoute();
          },
        },
      ],
    });
    await alert.present();
  }
  delete() {
    this.presentAlert();
  }
  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
