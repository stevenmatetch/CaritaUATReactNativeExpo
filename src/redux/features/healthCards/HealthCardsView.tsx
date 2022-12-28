import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CustomInput from "../../../customInput/CustomInput";
import React, { useState, useEffect } from "react";
import dsUATQuestionsJson from "./../../../json/dsUATQuestions.json";
import { DsUATUsers } from "../../../models/DsUATUsers";
import DsUATAppData from "../../../json/dsUATAppData.json";
import { Patient } from "../../../models/Patient";
import { Enumerable } from "sharp-collections";
import { Survey } from "../../../models/Survey";
import { useNavigation } from "@react-navigation/native";

let loadedPatient: Patient[] = [];
const HealthCardsView = () => {
  const [boende, setBoende] = useState("");
  const [pnr, SetPnr] = useState("");
  const [dsc, SetDsc] = useState("");
  const [data, SetData] = useState<Patient[]>([]);
  const LoadedData = [];
  const patients: Patient[] = [];
  /*async function GetdsUATQuestions() {
    
    const data = dsUATQuestionsJson;
    data.dsUATQuestions["OhaP-tt"];
    console.log(data.dsUATQuestions);
  }
  */

  function HandleNavigation(values: string) {
    console.log(values)
    console.log(1);
    const { navigate } = useNavigation<Nav>();
    type Nav = {
      navigate: (value: string) => void;
    };
    console.log(2);
    console.log(values);
    return (
    navigate(values)
    )
  }

  async function GetDsUATAppData() {
    const data = DsUATAppData;
    data.dsUATAppData;
    const patList = data.dsUATAppData["AcmP-tt"][0]["Patient-tt"];
    setBoende(data.dsUATAppData["AcmP-tt"][0].Dsc);
    //  console.log(patList);

    for (let i = 0; i < patList.length; i++) {
      const enumerable = Enumerable.from(patList[i]["OhaL-tt"]);
      const surveys = enumerable.where((s) => s.PatPNr == patList[i].PatPNr);
      const thisPatientSurveys: Survey[] = [];

      for (const survey of surveys) {
        thisPatientSurveys.push(survey as any);
      }
      
      const patient = new Patient(
        patList[i].Dsc,
        patList[i].PNR,
        thisPatientSurveys
      );

      patients.push(patient);
    }
    console.log(patients);

    SetData(patients);
  }

  useEffect(() => {
    GetDsUATAppData();
    //GetdsUATQuestions();
  }, []);

  const RenderItem = ({ item }: { item: Patient }) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.item}
          onPress={() => HandleNavigation("Adminstration")}
        >
          <Text>{item.pNR}</Text>
          <Text>{item.dsc}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.view}>
        <CustomInput
          placeholder="Sök.."
          value={""}
          setValue={""}
          secureTextEntry={false}
        />
        <Text style={styles.font}>{boende}</Text>
        <FlatList
          data={data}
          renderItem={RenderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default HealthCardsView;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "aliceblue",
    alignItems: "center",
    justifyContent: "center",
  },
  flex1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: 500,
  },
  font: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
