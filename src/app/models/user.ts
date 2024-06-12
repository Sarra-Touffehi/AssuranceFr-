import { Agence } from "./agence";

export enum Role {
    AGENT = 'AGENT',
    ADMIN = 'ADMIN',
    ADMIN_GLOBAL = 'ADMIN_GLOBAL'
  }
  
  export class User {
    constructor(
      public iduser: number,
      public nom: string,
      public prenom: string,
      public email: string,
      public password: string,
      public role: Role,
      public active : boolean,
      public agence :Agence
    ) {}
  }
  