import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPageRoutingModule } from './add-routing.module';
import { AddTaskComponent } from '../../components/add-task/add-task.component';
import { AddNoteComponent } from '../../components/add-note/add-note.component';

import { AddPage } from './add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPageRoutingModule
  ],
  declarations: [AddPage, AddTaskComponent, AddNoteComponent]
})
export class AddPageModule {}
