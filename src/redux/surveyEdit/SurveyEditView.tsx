import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { Enumerable } from "sharp-collections";
import { Survey } from "../../models/Survey";
import React, { useState, useEffect } from "react";
import { LayoutProvider, Stack, Spacer } from "native-layout-stack";
import { SurveyAnswer } from "../../models/SurveyAnswer";
import CustomInput from "../../customInput/CustomInput";
import CustomButton from "../../customButton/CustomButton";
import { useNavigation } from "@react-navigation/native";

//import DefaultImage from '../../assets/t1.png';

//const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;
//console.log(DEFAULT_IMAGE)

//C:\Users\Stemat\Desktop\CaritaUATReactNativeExpo\caritaUATReactNativeExpo\src\assets\t1.png
const SurveyEditView = (navigaton: any) => {
  let returnValues: string[] = [];
  const toothUp: string[] = [];
  const toothDown: string[] = [];
  const [checked, setChecked] = React.useState(false);
  let title = "";

  const { navigate } = useNavigation<Nav>();
  type Nav = {
    navigate: (value: string) => void;
  };

  const enumerable = Enumerable.from(
    navigaton.route.params.thisPatientSurveys as Survey[]
  );

  for (let i = 0; i < 16; i++) {
    toothUp.push(
      "http://10.168.53.113:19001/assets/src/assets/t" +
        i.toString() +
        ".png?platform=android&hash=fcaea3a144032082ce073cdc0b026564?platform=android&dev=true&hot=false&strict=false&minify=false"
    );
  }

  for (let i = 16; i < 32; i++) {
    toothDown.push(
      "http://10.168.53.113:19001/assets/src/assets/t" +
        i.toString() +
        ".png?platform=android&hash=fcaea3a144032082ce073cdc0b026564?platform=android&dev=true&hot=false&strict=false&minify=false"
    );
  }

  const thisPatientSurvey = enumerable
    .where((s: any) => s.SeqLNr == navigaton.route.params.itemId)
    .toArray();

  const SurveyDsc: string[] = [];

  function Spara() {

  }

  function Avbryta() {
    navigate("Patienter");
  }

  const RenderItem = ({ item }: { item: SurveyAnswer }) => {
    if (item.OhaTyp.toLowerCase() == "sel") 
    {
      returnValues = [];
      let myArray = item.PrmChr.split("¤");
      title = myArray[0];

      for (let i = 1; i < myArray.length; i++) {
        const value = myArray[i].split("|");
        returnValues.push(value[0]);
      }
    }

    return (
      <View style={styles.view}>
          {item.OhaTyp.toLowerCase() == "top" && (
            <Text style={styles.font}>{item.Dsc}</Text>
          )}
          {item.OhaTyp.toLowerCase() == "sel" && (
            <View>
              <Text style={styles.title}>{title}</Text>
              {returnValues.map((text,i) => (
                <View style={styles.checkboxContainer}>
                  <Checkbox key={i}
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked(!checked);
                    }}
                  />
                  <Text>{text}</Text>
                </View>
              ))}
            </View>
          )}
          {item.OhaTyp.toLowerCase() == "int" && (
            <View>
              <Text>{item.Dsc}</Text>
              <View style={styles.flex1}>
                <TouchableOpacity style={styles.button}>
                  <Text>-</Text>
                </TouchableOpacity>
                <TextInput style={styles.button} value={"0"}></TextInput>
                <TouchableOpacity style={styles.button}>
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          {item.OhaTyp.toLowerCase() == "chr" && (
            <View>
              <Text>{item.Dsc}</Text>
              <CustomInput
                placeholder=""
                value={""}
                setValue={""}
                secureTextEntry={false}
              />
            </View>
          )}
          {item.OhaTyp.toLowerCase() == "tooth" && (
            <View>
              <Text>ÖK</Text>
              <View style={styles.flex1}>
                {toothUp.map((path, i ) => (
                  <Image key={i}
                    source={{ uri: path }}
                    style={{ height: 120, width: 40 }}
                  />
                ))}
              </View>
              <Text>UK</Text>
              <View style={styles.flex1}>
                {toothDown.map((path, i) => (
                  <Image key={i}
                    source={{ uri: path }}
                    style={{ height: 120, width: 40 }}
                  />
                ))}

                <Text>HÖ</Text>
              </View>
              <Text>VÄ</Text>

              <View style={styles.flex}>
                <View style={styles.flexCircleAndText}>
                  <View style={styles.red}></View>
                  <Text>Avtagbart</Text>
                </View>
                <View style={styles.flexCircleAndText}>
                  <View style={styles.blue}></View>
                  <Text>Fastsittande tänder</Text>
                </View>
                <View style={styles.flexCircleAndText}>
                  <View style={styles.black}></View>
                  <Text>Saknad tand</Text>
                </View>
              </View>
            </View>
          )}
        </View>
    );
  };

  return (
    <View style={styles.view}>
      <FlatList
        data={thisPatientSurvey[0]["OhaLA-tt"]}
        renderItem={RenderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.flex}>
        <CustomButton text="Spara" onPress={() => Spara()} />
        <CustomButton text="Avbryta" onPress={() => Avbryta()} />
      </View>
    </View>
  );
};

export default SurveyEditView;

const styles = StyleSheet.create({
  blue: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "blue",
  },
  red: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "red",
  },
  black: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "black",
  },
  font: {
    fontWeight: "bold",
    fontSize: 15,
  },
  title: {
    fontSize: 16,
  },
  sel: {
    backgroundColor: "aliceblue",
  },
  view: {
    flex: 1,
    backgroundColor: "white",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  button: {
    width: 150,
    borderColor: "lightgray",
    borderWidth: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },

  flex1: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 300,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 500,
  },
  flexCircleAndText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
