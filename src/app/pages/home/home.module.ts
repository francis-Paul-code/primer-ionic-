import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { TaskComponent } from 'src/app/components/task/task.component';
import { NoteComponent } from 'src/app/components/note/note.component';
import { HomePage } from './home.page';


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, NoteComponent, TaskComponent],
})
export class HomePageModule {}
