import { Compagnie } from "./compagnie";

export class Offre {
    constructor(
        public idOffre:number,
          public nom:string,
          public conditions:string,
          public couverture:string,
          public frais:number,
          public taux_risque:number,
          public compagnie: Compagnie

          ){
              
            }
}
