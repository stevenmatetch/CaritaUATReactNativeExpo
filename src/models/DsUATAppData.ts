declare module namespace {

    export interface OhaLATt {
        SeqLNr: number;
        SubNr: number;
        Dsc: string;
        OhaTyp: string;
        PrmLog: boolean;
        PrmDec: number;
        PrmDat?: any;
        PrmChr: string;
        Txt: string;
        KeyWrd: string;
        SelList: string;
        Multi: number;
        Man: boolean;
        SysVar: boolean;
        Sort: string;
    }

    export interface OhaLTt {
        SeqLNr: number;
        PatPNr: number;
        EcoPNr: number;
        TeaPNr: number;
        EmpPNr: number;
        EmpPNrSign: number;
        DatSign: string;
        Dat: string;
        OhaSNr: number;
        PatPANr: number;
        RfvSNr: number;
        SeqThrL: number;
        NameNurse: string;
        NameHead: string;
        DatCancel?: any;
        EmpPNrCancel: number;
        Typ: string;
        EmpPId: string;
        EmpPIdSign: string;
        EmpPIdCancel: string;
        TypDsc: string;
        "OhaLA-tt": OhaLATt[];
    }

    export interface PatientTt {
        PatPNr: number;
        PNR: string;
        Dsc: string;
        FirstName: string;
        AcmPNr: number;
        "OhaL-tt": OhaLTt[];
    }

    export interface AcmPTt {
        AcmPNr: number;
        AcmPId: string;
        Dsc: string;
        Adr1: string;
        Adr2: string;
        Zip: string;
        City: string;
        CountryCode: string;
        Tel1: string;
        Tel2: string;
        Email: string;
        Txt: string;
        BrwHidden: boolean;
        "Patient-tt": PatientTt[];
    }

    export interface DsUATAppData {
        "AcmP-tt": AcmPTt[];
    }

    export interface RootObject {
        dsUATAppData: DsUATAppData;
    }

}

