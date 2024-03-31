import { Client } from "./client";
export class Credit {
    constructor(
        public numCredit: number,
        public typeCredit: string,
        public dateAccord: Date,
        public dateEcheance: Date,
        public duree: string,
        public montant: number,
        public client: Client 
    ) {}
}
