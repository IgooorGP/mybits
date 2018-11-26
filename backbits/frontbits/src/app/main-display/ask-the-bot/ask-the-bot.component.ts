import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { WebSocketService } from '../../services/web-socket.service';
import { environment } from '../../../environments/environment';
import * as Rx from 'rxjs';
import { timer } from 'rxjs';


@Component({
  selector: 'app-ask-the-bot',
  templateUrl: './ask-the-bot.component.html',
  styleUrls: ['./ask-the-bot.component.scss']
})
export class AskTheBotComponent implements OnInit {

  // config variables for animation in ms
  blinkAnimationTime: number = 800;
  talkAnimationTime: number = 100;

  // img URLs for animation purposes
  botImgStillUrl = "/static/backbits/bot_still.png";
  botImgBlinkingUrl = "/static/backbits/bot_blinking.png";
  botImgTalkinglUrl = "/static/backbits/bot_talking.png";

  initialMsg: string = "Hey there! I'm Igor's bot! You can ask me some questions to know a bit more about me!";
  chatUrl: string = environment.WS_CHAT_URL;
  displayTitle: string = "A-bot me!";
  chatMsg: string = "";
  botMsg: string = this.initialMsg; // default initial value
  botImg: string = this.botImgStillUrl; // default img value
  botImgAnimation: any = timer(0, this.blinkAnimationTime);  // animation timers
  botTalkingAnimation: any = timer(0, this.talkAnimationTime); // animation timers
  isBotTalking: boolean = false;
  webSocket: Rx.Subject<string>;

  /**
   * Builds an ask the bot component with a chat service.
   * 
   * @param ChatService - The chat service injected by Anguklar's DI system
  */
  constructor(private webSocketService: WebSocketService) { }

  /**
   * Initialization code for Angular's component and subscription
   * to the animation and web socket chat services.
   */
  ngOnInit() {
    this.webSocket = this.webSocketService.connect(this.chatUrl);
    // must subscribe
    this.webSocket.subscribe({
      next: msg => {
        this.handleChatBotSocketMsg(msg["data"]);
      },
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });

    // bot animation subscription
    this.botImgAnimation.subscribe(tick => {

      // does nothing if the bot is talking
      if (!this.isBotTalking) {
        this.swapBotImage(this.botImgStillUrl, this.botImgBlinkingUrl);
      }

    });

    // bot animation subscription
    this.botTalkingAnimation.subscribe(tick => {

      // only if the bot is talking
      if (this.isBotTalking) {
        this.swapBotImage(this.botImgStillUrl, this.botImgTalkinglUrl);
      }

    });

  }

  /**
   * Sends new user question messages to the chat bot backend.
   */
  sendMsg() {
    // sends new msg event to the socket
    this.webSocket.next(this.chatMsg);

    // clears chatMsg
    this.chatMsg = "";
  }

  /**
   * Swaps the bot's image in order to animate it.
   * 
   * @param imageUrl1 - URL of the static image of the bot;
   * @param imageUrl2 - URL of another static image of the bot to swap.
   */
  swapBotImage(imageUrl1: string, imageUrl2: string) {
    if (this.botImg == imageUrl1) {
      this.botImg = imageUrl2;
    } else {
      this.botImg = imageUrl1;
    }
  }

  /**
   * Changes bot animation state and the chat state as new messages arrive
   * from the socket connection.
   * 
   * @param msgData - bot string message received from the socket connection.
   */
  handleChatBotSocketMsg(msgData: string) {
    if (msgData === "<start/>") {
      // msg has just arrived
      this.isBotTalking = true;
      this.botMsg = "";

    } else if (msgData === "<end/>") {
      // msg is over
      this.isBotTalking = false;
      this.botImg = this.botImgStillUrl;

    }
    else {
      // msg is still coming, append new letters
      this.botMsg += msgData;
    }
  }
}
