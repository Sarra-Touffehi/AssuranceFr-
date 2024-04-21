import { Client } from "./client";
import { Offre } from "./offre";

export class Souscription {
    constructor(
        public idSousc : number ,
        public dateSouscription: Date,
        public statut: string,
        //public client?: Client,
        //public offre?: Offre,
        public idClient : number,
        public idOffre : number,

          ){
              
            }
}
