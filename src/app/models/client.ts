import { Credit } from "./credit";

export class Client {
    constructor(
        public idClient: number,
        public numCompte: number,
        public cin: string,
        public nom: string,
        public prenom: string,
        public email: string,
        public dateNaissance: Date,
        public tel: string,
        public revenu: number,
        public adresse :string,
        public credits: Credit[] = [] 
    ) {}
}
