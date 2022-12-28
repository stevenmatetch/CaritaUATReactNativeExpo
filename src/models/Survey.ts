
import { Patient } from "./Patient";
import { SurveyAnswer } from "./SurveyAnswer";

export interface Survey {
   // surveyNrInternal: number;
    seqLNr: number;
    patPNr: number;
    ecoPNr: number;
    teaPNr: number;
    empPNr: number;
    empPNrSign: number;
    datSign: string | null;
    dat: string | null;
    ohaSNr: number;
    patPANr: number;
    rfvSNr: number;
    seqThrL: number;
    nameNurse: string;
    nameHead: string;
    datCancel: string | null;
    empPNrCancel: number;
    typ: string;
    empPId: string;
    empPIdSign: string;
    empPIdCancel: string;
    typDsc: string;
    "OhaLA-tt": SurveyAnswer[];
    patient: Patient;
    friendlyName: string;
    info: string;
}
