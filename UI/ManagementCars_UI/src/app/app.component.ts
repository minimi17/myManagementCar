import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ManagementCars_UI';

  sound:boolean = false;
  audio = new Audio();
  playSound(){
    this.audio.src = '../assets/song.mp3';
    this.audio.load();
    this.audio.play();
    this.audio.loop=true;
    this.sound=true
  }

  stopSound()
  {
    this.audio.pause();
    this.sound= false;
  }



}
