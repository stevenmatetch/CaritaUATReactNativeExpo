import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeView from './src/redux/features/home/HomeView';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminView from './src/redux/features/admin/AdminView';
import { NavigationContainer } from '@react-navigation/native';

import HealthCardPatientView from './src/redux/features/healthCardPatient/HealthCardPatientView';
import SurveyEditView from './src/redux/surveyEdit/SurveyEditView';
import LoggaInView from './src/redux/features/loggaIn/LoggaInView';
import React from 'react';
import { selectIsLoggedIn } from './src/redux/features/loggaIn/UserAuthSlice';
import AppRoute from "./src/navigation/navigator";
import { Provider } from "react-redux";
import { store } from "./src/redux/Store";


export default function App() {
  return (
    <NavigationContainer >
    <Provider store={store}>
      <AppRoute />
      </Provider>
    </NavigationContainer>
  );
}




   /*<View style={styles.container}>
      <Text>Open up App.tsx to start working onxczxcx your app!</Text>
      <StatusBar style="auto" />
    </View>*/




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



