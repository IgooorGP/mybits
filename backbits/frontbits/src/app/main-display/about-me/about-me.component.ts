import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', '../ask-the-bot/ask-the-bot.component.scss']
})
export class AboutMeComponent implements OnInit {

  displayTitle: string = "About me";

  constructor() { }

  ngOnInit() {
  }

}
