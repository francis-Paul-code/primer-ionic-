import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  task = true;
  notes = false;
  constructor() {}
  segmentChange(event: any) {
    if (event.detail.value === 'tasks') {
      this.task = true;
      this.notes = false;
    }
    if (event.detail.value === 'notes') {
      this.task = false;
      this.notes = true;
    }
  }
  ngOnInit() {}
}
