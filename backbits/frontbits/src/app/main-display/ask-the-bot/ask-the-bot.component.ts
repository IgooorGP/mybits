import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-ask-the-bot',
  templateUrl: './ask-the-bot.component.html',
  styleUrls: ['./ask-the-bot.component.scss']
})
export class AskTheBotComponent implements OnInit {

  displayTitle: string = "A-bot me!";
  chatMsg: string = "";

  /**
   * Builds an ask the bot component with a chat service.
   * 
   * @param ChatService - The chat service injected by Anguklar's DI system
   */
  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  sendMsg() {
    this.chatService.sendMsg("Hello world");
    this.chatMsg = "";
  }

}
