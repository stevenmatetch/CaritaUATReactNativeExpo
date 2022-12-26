import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeView() {
  return (
    <View style={styles.view}> 
      <Text style={styles.font}>Uppsökande Tandvård</Text>
      <Text>Använd menyn för att navigera mellan funktioner.</Text>
    </View>
  )
}

const styles = StyleSheet.create({  view: {
    flex: 1,
    backgroundColor: "aliceblue",
    alignItems: "center",
    justifyContent: "center"
  },
  font: {
    fontWeight: "bold",
    fontSize: 15
  }
})