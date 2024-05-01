import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatMessage, MessageSide } from 'src/app/models/chat-message';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  messageInput: string = '';
  userId!: number;
  messageList: ChatMessage[] = [];

  user!: User;
  
  
  constructor(private chatService:ChatService,
    private route :ActivatedRoute,
    private userService: UserService, private authService: AuthService
  ) {

   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['iduser'];
    });
  //  this.userId = this.route.snapshot.params["iduser"];
    this.chatService.joinRoom("ABC");
    this.lisenerMessage();


    this.getUserById();
 
  }

  sendMessage() {
    const chatMessage = {
      message: this.messageInput,
      iduser: this.userId
    }as ChatMessage
    this.chatService.sendMessage("ABC", chatMessage);
    this.messageInput = '';
  }

 /* lisenerMessage() {
    this.chatService.getMessageSubject().subscribe((messages: ChatMessage[]) => {
      this.messageList = messages.map((item: any)=> ({
        ...item,
        senderName: item.user?.nom + ' ' + item.user?.prenom, // Définir senderName en fonction des informations de l'utilisateur
        // Identifions si le message est envoyé ou reçu
        message_side: item.iduser === this.userId ? 'sender': 'receiver'
      }))
    });
  } */
  lisenerMessage() {
    this.chatService.getMessageSubject().subscribe((messages: ChatMessage[]) => {
      this.messageList = messages.map((item: ChatMessage) => ({
        ...item,
        senderName: item.senderName ? item.senderName : (this.user ? this.user.nom + ' ' + this.user.prenom : ''),
        message_side: item.iduser == this.userId ? MessageSide.Sender : MessageSide.Receiver
      }));
    });
  }
  
  
  
  
  


  getUserById(): void {
  
      this.userService.getUserById(this.userId)
        .subscribe(user => this.user = user);
    
  }

  

}
