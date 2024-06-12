import { Compagnie } from "./compagnie";

export class Offre {
    constructor(
        public idOffre:number,
          public nom:string,
          public conditions:string,
          public couverture:string,
          public frais_mrh:number,
          public taxe:number,
          public prime_commerciale:number,
          public compagnie: Compagnie

          ){
              
            }
}
