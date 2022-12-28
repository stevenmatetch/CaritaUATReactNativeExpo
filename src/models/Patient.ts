import { Accomodation } from "./Accomodation";
import { Survey } from "./Survey";


/*export interface Patient {
    patPNrInternal: number;
    patPNr: number;
    acmPNr: number;
    dsc: string;
    pNR: string;
    firstName: string;
    accomodation: Accomodation;
    "OhaL-tt": Survey[];
    Surveys:Survey[];
    //imagePath: ImageSource;
    getAccomodationName: string;
    getSearchStr: string;
    lastName: string;
}
*/

export class Patient {
   // patPNrInternal: number;

    
    dsc: string;
    pNR: string;
    //firstName: string;
 
    "OhaL-tt": Survey[];
    Surveys:Survey[] = [];
    //imagePath: ImageSource;
   //getAccomodationName: string;
   // getSearchStr: string;
   // lastName: string;


    constructor(dsc: string, pNR: string,Surveys:Survey[] ) 
    {
   
      
    
      this.dsc= dsc;
      this.pNR= pNR;  
     
      this.Surveys= Surveys;  
  }
  
}