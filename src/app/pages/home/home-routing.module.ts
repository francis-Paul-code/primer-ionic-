import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'tasks',
        loadChildren: () =>
          import('../tasks/tasks.module').then((m) => m.TasksPageModule),
      },
      {
        path: 'notes',
        loadChildren: () =>
          import('../notes/notes.module').then((m) => m.NotesPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
