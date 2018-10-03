import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask-the-bot',
  templateUrl: './ask-the-bot.component.html',
  styleUrls: ['./ask-the-bot.component.scss']
})
export class AskTheBotComponent implements OnInit {

  displayTitle: string = "A-bot me!";

  constructor() { }

  ngOnInit() {
  }

}
