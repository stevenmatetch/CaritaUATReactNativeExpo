import { Patient } from "./Patient";

export interface Accomodation {
    acmPNrInternal: number;
    acmPNr: number;
    acmPId: string;
    dsc: string;
    adr1: string;
    adr2: string;
    city: string;
    countryCode: string;
    tel1: string;
    tel2: string;
    email: string;
    txt: string;
    brwHidden: boolean;
    "Patient-tt": Patient[];
}
