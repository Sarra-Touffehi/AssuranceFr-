export enum MessageSide {
    Sender = 'SENDER',
    Receiver = 'RECEIVER'
  }
  
  export class ChatMessage {
    constructor(
      public message: string,
      public iduser: number,
      public senderName: string,
      public message_side: MessageSide ,
     // public logo:File |null,
    ) {}
  }
  