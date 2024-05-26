
  
  export class ChatMessage {
    public imageUrl!: string | null;
    constructor(
      public message: string,
      public iduser: number,
      public senderName: string,
      public message_side: MessageSide ,
      public image:File |null,
    ) {}
   
  }
  export enum MessageSide {
    Sender = 'SENDER',
    Receiver = 'RECEIVER'
  }