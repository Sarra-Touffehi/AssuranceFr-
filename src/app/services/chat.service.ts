import { Injectable } from '@angular/core';
import { Stomp, CompatClient, StompSubscription } from '@stomp/stompjs';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import * as SockJS from 'sockjs-client';

import { ChatMessage, MessageSide } from '../models/chat-message';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  userId!: number;
  private stompClient : any
  private messageSubject: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<ChatMessage[]>([]);
  private readonly STORAGE_KEY = 'chatMessages';

  constructor() {
    this.initConnectionSocket();
    this.loadMessagesFromLocalStorage();
  }

initConnectionSocket(){
  const url ='//localhost:9630/chat-socket';
  const socket = new SockJS(url);
  this.stompClient = Stomp.over(socket)
}

joinRoom(roomId: string) {
  this.stompClient.connect({}, ()=>{
    this.stompClient.subscribe(`/topic/${roomId}`, (messages: any) => {
      const messageContent = JSON.parse(messages.body);
    //  const currentMessage = this.messageSubject.getValue();

     console.log(messageContent);
    //  currentMessage.push(messageContent);

    //  this.messageSubject.next(currentMessage);
    this.addMessage(messageContent);
    });
    
  })
}
private addMessage(message: ChatMessage) {
  const currentMessages = this.messageSubject.getValue();
  // Déterminer le côté du message en fonction de l'utilisateur connecté
  const message_side = message.iduser === this.userId ? MessageSide.Sender : MessageSide.Receiver;
  const updatedMessage = { ...message, message_side };
  const updatedMessages = [...currentMessages, updatedMessage];
  this.messageSubject.next(updatedMessages);
  this.saveMessagesToLocalStorage(updatedMessages);
}



private saveMessagesToLocalStorage(messages: ChatMessage[]) {
  localStorage.setItem(this.STORAGE_KEY, JSON.stringify(messages));
}



private loadMessagesFromLocalStorage() {
  const storedMessages = localStorage.getItem(this.STORAGE_KEY);
  if (storedMessages) {
    const messages: ChatMessage[] = JSON.parse(storedMessages);
     this.messageSubject.next(messages);
  }
}


/*sendMessage(roomId: string, chatMessage: ChatMessage) {
  this.stompClient.send(`/app/chat/${roomId}`, {}, JSON.stringify(chatMessage))
} */
sendMessage(roomId: string, chatMessage: ChatMessage) {
 // chatMessage.iduser = userId;
  this.stompClient.send(`/app/chat/${roomId}`, {}, JSON.stringify(chatMessage));
}

getMessages() {
  this.stompClient.send(`/app/messages`, {}, '');
}
getAll(): Observable<ChatMessage[]> {
  return this.stompClient.get(`/app/messages`, {}, '');
}

/*getPreviousMessages(): Observable<any> {
  return new Observable(observer => {
    this.stompService.publish('/app/getPreviousMessages',); 
    this.stompService.subscribe('/topic/previousMessages').subscribe(messages => {
      observer.next(messages);
    });
  });
} */

getMessageSubject(): Observable<ChatMessage[]> {
  return this.messageSubject.asObservable();
}



}
