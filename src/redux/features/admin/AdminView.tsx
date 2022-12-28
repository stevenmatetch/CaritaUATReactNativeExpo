import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInput from '../../../customInput/CustomInput'
import CustomButton from '../../../customButton/CustomButton'

const AdminView = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.font}>Använd knapparna nedan för att synkronisera bedömningar med Carita.</Text>
      <CustomButton   text="Skicka"  onPress></CustomButton>
      <CustomButton   text="Hämta"  onPress></CustomButton>
      <CustomButton   text="Inställningar"  onPress></CustomButton>
      <Text>  Skicka bedömningar till Carita</Text>
      <Text>  Hämta bedömningar från Carita</Text>
    </View>
  )
}

export default AdminView

const styles = StyleSheet.create({  view: {
    flex: 1,
    backgroundColor: "aliceblue",
    alignItems: "center",
    justifyContent: "center"
  },
   font: {
    fontWeight: "bold",
    fontSize: 15
  }})