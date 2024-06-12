export class Propriete {
    constructor(
        public idPropriete:number,
          public systemeSecurite:string,
          public historiqueIncendie:string,
          public meteo:string,
          public minTemp:number,
          public maxTemp:number,
          public anneeAchat: number,
          public surface:number,

          ){
              
            }
}
