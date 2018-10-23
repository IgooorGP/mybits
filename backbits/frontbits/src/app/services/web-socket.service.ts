import * as Rx from "rxjs";
// import { Injectable } from "@angular/core";


export class WebSocketService {

    private socket: Rx.Subject<string>;

    constructor() {

    }

    /**
     * Connects using the WebSocket protocol.
     * 
     * @param url: string - url to make a websocket connection to.
     * 
     * @returns websocket: Rx.Subject<string> an rxjs 
     */
    public connect(url: string): Rx.Subject<string> {
        // checks if we have a socket connection object
        if (!this.socket) {
            this.socket = this.create(url);
        }

        // returns the socket connection if undefined
        return this.socket;
    }

    /**
     * Creates a new websocket connection.
     * 
     * @param url: string - url to make a websocket connection to.
     */
    private create(url: string): Rx.Subject<string> {

        // creates a websocket connection
        let ws = new WebSocket(url);

        // creates a new observable object
        let observable = Rx.Observable.create(
            // executed when an observer subscribes to it
            // observable emits next, err, complete
            // observer executes a callback next, err, complete
            (observer: Rx.Observer<string>) => {

                ws.onmessage = observer.next.bind(observer);
                ws.onerror = observer.error.bind(observer);
                ws.onclose = observer.complete.bind(observer);

                // return for the observer
                return ws.close.bind(ws);
            }
        );

        let observer = {
            // callback to execute when an observable
            // emits a next value
            next: (data: Object) => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            },
        };

        // creates a subject (both an observer and observable)
        return Rx.Subject.create(observer, observable);
    }

}