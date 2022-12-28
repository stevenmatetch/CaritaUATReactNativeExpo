import { SurveyFormQuestion } from "./SurveyFormQuestion";

export interface SurveyForm {
    ohaPNrInternal: number;
    ohaPNr: number;
    ohaPId: string;
    dsc: string;
    txt: string;
    typ: string;
    "OhaR-tt": SurveyFormQuestion[];
}