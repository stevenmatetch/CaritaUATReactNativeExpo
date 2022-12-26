
    export interface OhaRTt {
        OhaRNr: number;
        OhaRId: string;
        Dsc: string;
        Txt: string;
        OhaTyp: string;
        SelList: string;
        Multi: number;
        Man: boolean;
        SysVar: boolean;
        KeyWrd: string;
        OhaPNr: number;
        Sort: string;
    }

    export interface OhaPTt {
        OhaPNr: number;
        OhaPId: string;
        Dsc: string;
        Txt: string;
        Typ: string;
        OhaR_tt: OhaRTt[];
    }

    export interface DsUATQuestions {
        OhaP_tt: OhaPTt[];
    }

    export interface RootObject {
        dsUATQuestions: DsUATQuestions;
    }


