import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title = 'primer';
  menustate = false;
  constructor(private menu: MenuController) { }
  toggleMenu() {
    this.menu.open('first');
  }
  deviceTheme(event: any) {}
}
