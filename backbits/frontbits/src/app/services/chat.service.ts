import * as io from "socket.io-client";
import { environment } from "../../environments/environment";

export class ChatService {

    private websocketUrl = environment.WS_CHAT_URL;
    private socket;

    /**
     * Builds an instance of the chat servie with a socket connection.
     */
    constructor() {
        this.socket = io(this.websocketUrl, {
            transports: ["websocket"],
            path: "/ws/chat",
            reconnectionAttempts: 3
        });
    }

    public sendMsg(msg: string) {
        console.log(this.websocketUrl);
        console.log(this.socket);

        // this.socket.emit("new-message", msg);
    }

}