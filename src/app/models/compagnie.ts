export class Compagnie {
  
  public logoUrl!: string | null;
    constructor(
      public idcomp:number,
       public logo:File |null,
        public nom:string,
        public siege:string,
        public tel:string
        ){
            
          }
    
        
        
}
