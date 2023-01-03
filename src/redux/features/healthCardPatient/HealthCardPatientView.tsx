import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Patient } from '../../../models/Patient'
import { Survey } from '../../../models/Survey';
import { useNavigation } from '@react-navigation/native';

const HealthCardPatientView = (navigaton:any) => {
    const [data, SetData] = useState<Survey[]>([]);
    const thisPatientSurveys: Survey[] = [];

    const { navigate } = useNavigation<Nav>();
    type Nav = {
      navigate: (value: string, other:any) => void;
    };
  
    function HandleNavigation(val: string,itemId:number, thisPatientSurveys:Survey[]) {       
      return (
      navigate(val,{itemId,thisPatientSurveys}))
    }
  
    for (const survey of navigaton.route.params.Surveys) 
    {
      thisPatientSurveys.push(survey as any);
    }
   
   //TypDsc
   const RenderItem = ({ item }: { item: any }) => {
    return (
        <View style={styles.item}>
        <TouchableOpacity
        style={styles.item}
        onPress={() => HandleNavigation("Editera bedömning", item.SeqLNr, thisPatientSurveys)}
      >
    
          <Text>{item.TypDsc}</Text>
          <Text>{item.Dat}</Text>        
          <Text>{item.EmpPId}</Text>   
      </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.view}>
      <Text>{navigaton.route.params.dsc}</Text>

      <FlatList
          data={thisPatientSurveys}
          renderItem={RenderItem}
          keyExtractor={(item, index) => index.toString()}
        />
    </View>
  )
}

export default HealthCardPatientView

const styles = StyleSheet.create({  view: {
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
  },})