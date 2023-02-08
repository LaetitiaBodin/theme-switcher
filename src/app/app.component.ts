import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  theme: string = "light";
  pos: string = "";

  goLight() {
    const meta = document.querySelector('meta[name=theme-color]');
    meta?.setAttribute('content', '#0b090a');
    this.theme = "light";
    return (this.pos = "switcher--light");
  }

  goDark() {
    const meta = document.querySelector('meta[name=theme-color]');
    meta?.setAttribute('content', '#e0afa0');
    this.theme = "dark";
    return (this.pos = "switcher--dark");
  }
  
}