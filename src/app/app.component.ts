import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('yellowBox') yellowBox!: ElementRef;
  
  constructor() { }

  playSound() {
    console.log("play")
    this.yellowBox.nativeElement.components.sound.playSound();
  }

  stopSound() {
    console.log("stop")
    this.yellowBox.nativeElement.components.sound.stopSound();
  }
}
