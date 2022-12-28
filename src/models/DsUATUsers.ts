
    export interface UATUserTt {
        OprPNr: number;
        OprPId: string;
        Dsc: string;
        LevelMod: string;
        PwdChk: string;
    }

    export interface DsUATUsers {
        "UATUser-tt": UATUserTt[];
    }

    export interface RootObject {
        dsUATUsers: DsUATUsers;
    }


