export interface SurveyAnswer {
    surveyAnswersNrInternal: number;
    seqLNr: number;
    subNr: number;
    Dsc: string;
    OhaTyp: string;
    prmLog: boolean;
    prmDec: number;
    prmDat: string | null;
    PrmChr: string;
    txt: string;
    keyWrd: string;
    selList: string;
    multi: number;
    man: boolean;
    sysVar: boolean;
    sort: string;
    xName: string;
    headlineVisible: boolean;
    textBoxVisible: boolean;
    textBoxText: string;
    numericVisible: boolean;
    numericValue: number;
    selVisible: boolean;
   // _editor: Editor;
   // _numeric: RadNumericInput;
  //  _checks: RadCheckBox[];
  //  _images: Image[];
}