import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AboutView = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.font}>Carita Uppsökande Tandvård</Text>
    </View>
  )
}

export default AboutView

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