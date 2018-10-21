import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.scss']
})
export class MainDisplayComponent implements OnInit {

  displayTitle: string = "About me";
  currentDisplay: string = "askTheBot";

  constructor() { }

  ngOnInit() {
  }

  getCurrentDisplay(): string {
    return this.currentDisplay;
  }

}
