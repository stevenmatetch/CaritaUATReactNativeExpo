export interface SurveyAnswer {
    surveyAnswersNrInternal: number;
    seqLNr: number;
    subNr: number;
    dsc: string;
    ohaTyp: string;
    prmLog: boolean;
    prmDec: number;
    prmDat: string | null;
    prmChr: string;
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