import { StyleSheet, Text, View } from 'react-native'

import CustomInput from '../../../customInput/CustomInput'
import React, { useState, useEffect } from "react";
import dsUATQuestionsJson from "../../../xml/dsUATQuestions.json"

const HealthCardsView = () => {


 const LoadedData = []  
  async function GetdsUATQuestions() 
  {
    //const deviceName = Device.deviceName;
   const data = dsUATQuestionsJson;
   data.dsUATQuestions['OhaP-tt'] 
   console.log(data.dsUATQuestions)
  }
  

  useEffect(() => {
    GetdsUATQuestions();
  }, []);

  return (
  <View>
    <View style={styles.view}>
       <CustomInput
              placeholder="Sök.."
              value={""}
              setValue={""}
              secureTextEntry={false}
            />
    </View>
  </View>
 
  )
}

export default HealthCardsView

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "aliceblue",
    alignItems: "center",
    justifyContent: "center"
  },
})