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
  imageFile!:File;
  imageURL:any;
   imagePath:any;
  message!:String;
  messageInput: string = '';
  userId!: number;
  messageList: ChatMessage[] = [];

  user!: User;
  currentUser: User | null = null;
  
  constructor(private chatService:ChatService,
    private route :ActivatedRoute,
    private userService: UserService, private authService: AuthService
  ) {

   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['iduser'];
    });
// Récupérer le current user
this.currentUser = this.authService.getCurrentUser();
    
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

/**------ 
  lisenerMessage() {
    this.chatService.getMessageSubject().subscribe((messages: ChatMessage[]) => {
     this.messageList = messages.map((item: ChatMessage) => ({
        ...item,
        // Déterminez le côté du message en fonction de l'utilisateur actuel
        message_side: item.iduser === this.userId ? MessageSide.Sender : MessageSide.Receiver

      }));
console.log(this.messageList);
    });
  }*/
  lisenerMessage() {
    this.chatService.getMessageSubject().subscribe((messages: ChatMessage[]) => {
        this.messageList = messages.map((item: ChatMessage) =>( {
          ...item,
            // Logique pour déterminer le côté du message
           // const messageSide = item.iduser === this.userId ? MessageSide.Sender : MessageSide.Receiver;
           message_side: item.iduser === this.currentUser?.iduser ? MessageSide.Sender : MessageSide.Receiver
          }));
          //  console.log("Message side: ", messageSide); // Vérifier le côté du message
            
        
        
        console.log(this.messageList); // Vérifiez la liste des messages avec le côté correctement défini
    });
}


  /*
  lisenerMessage() {
    this.chatService.getMessageSubject().subscribe((messages: ChatMessage[]) => {
     this.messageList = messages.map((item: ChatMessage) => ({
        ...item,
        // Déterminez le côté du message en fonction de l'utilisateur actuel
        //message_side: item.iduser === this.userId ? MessageSide.Sender : MessageSide.Receiver
        message_side: item.iduser === this.userId ? 'SENDER' : 'RECEIVER'

        /*senderName: item.senderName ? item.senderName : (this.user ? this.user.nom + ' ' + this.user.prenom : ''),
        message_side: item.iduser == this.userId ? MessageSide.Sender : MessageSide.Receiver*/
     /* }));
      //this.messageList = messages;

    });
  }*/
  
  
  


  getUserById(): void {
  
      this.userService.getUserById(this.userId)
        .subscribe(user => this.user = user);
    
  }

  onFileChange(event:any){
 if (event.target.files.length > 0) {
    this.imageFile = event.target.files[0];
    var mimeType = this.imageFile.type;
    if (mimeType.match(/image\/*/)==null) {
      this.message = "only images are supported.";
      return;
    }
  
  }
  var reader = new FileReader();
      this.imagePath = this.imageFile;
      reader.readAsDataURL(this.imageFile);
      reader.onload = (_event) => {
        this.imageURL = reader.result; 
}
  }
  
}
