import * as io from "socket.io-client";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";

@Injectable()
export class ChatService {

    private websocketUrl = environment.WS_CHAT_URL;
    private socket;

    /**
     * Builds an instance of the chat service with a socket connection.
     */
    constructor() {
        this.socket = io(this.websocketUrl, {
            transports: ["websocket"],
            path: "/ws/chat",
            reconnectionAttempts: 3
        });
    }

    public sendMsg(msg: string) {
        this.socket.emit("message", msg);
    }

}
