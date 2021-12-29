/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/pages/tasks/Task';
import { TaskService } from '../../services/task.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private alert: AlertController,
    private router: Router
  ) {}
  ngOnInit() {}
  save() {
    const task = {
      title: (<HTMLInputElement>document.getElementById('titleInput')).value,
      date: (<HTMLInputElement>document.getElementById('dateInput')).value,
      priority: (<HTMLInputElement>document.getElementById('priority')).value,
      body: (<HTMLInputElement>document.getElementById('bodyInput')).value,
    };
    if (task.title === '' || task.body === '' || task.date === undefined) {
      return this.errorAlert();
    } else {
      this.taskService.addTask(task).subscribe();
      this.successAlert();
    }
  }
  async successAlert() {
    const alert = await this.alert.create({
      header: 'Task Added',
      buttons: [
        {
          text: 'Okay',
          role: 'Cancel',
          cssClass: 'primary',
          handler: () => { this.router.navigate(['/tasks']);}
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
  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
