import { Offre } from "./offre";

export class Compagnie {
  
  public logoUrl!: string | null;
  public offres: Offre[];
    constructor(
      public idcomp:number,
       public logo:File |null,
        public nom:string,
        public siege:string,
        public tel:string
        ){
          this.offres = [];
          }
    
        
        
}
