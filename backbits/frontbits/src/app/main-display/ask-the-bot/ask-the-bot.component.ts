import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { WebSocketService } from '../../services/web-socket.service';
import { environment } from '../../../environments/environment';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-ask-the-bot',
  templateUrl: './ask-the-bot.component.html',
  styleUrls: ['./ask-the-bot.component.scss']
})
export class AskTheBotComponent implements OnInit {

  initialMsg: string = "Hey there! I'm Igor's bot! You can ask me some questions to know a bit more about me!";

  chatUrl: string = environment.WS_CHAT_URL;
  displayTitle: string = "A-bot me!";
  chatMsg: string = "";
  botMsg: string = this.initialMsg; // default initial value
  webSocket: Rx.Subject<string>;

  /**
   * Builds an ask the bot component with a chat service.
   * 
   * @param ChatService - The chat service injected by Anguklar's DI system
  */
  constructor(private webSocketService: WebSocketService) { }

  ngOnInit() {
    this.webSocket = this.webSocketService.connect(this.chatUrl);
    // must subscribe
    this.webSocket.subscribe({
      next: msg => {
        let msgData = msg["data"];

        if (msgData === "<start/>") {
          this.botMsg = "";
        } else {
          this.botMsg += msg["data"];
        }

      },
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
  }

  sendMsg() {
    // sends new msg event to the socket
    this.webSocket.next(this.chatMsg);

    // clears chatMsg
    this.chatMsg = "";
  }

}
