import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import * as React from "react";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import AdminView from "../redux/features/admin/AdminView";
import HomeView from "../redux/features/home/HomeView";
import LoggaInView from "../redux/features/loggaIn/LoggaInView";
import { selectIsLoggedIn } from "../redux/features/loggaIn/UserAuthSlice";
import HealthCardPatientView from "../redux/features/healthCardPatient/HealthCardPatientView";
import SurveyEditView from "../redux/surveyEdit/SurveyEditView";
import patientView from "../redux/features/patient/PatientView"
import Icon from "react-native-vector-icons/Feather";
import Icon1 from "react-native-vector-icons/AntDesign";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const IsLoggedInStack = createNativeStackNavigator();

const IsLoggedInStackScreen = () => (
  <IsLoggedInStack.Navigator>
    <IsLoggedInStack.Screen name="Patienter" component={patientView} />
    <IsLoggedInStack.Screen
      name="Bedömningar"
      component={HealthCardPatientView}
    />
    <IsLoggedInStack.Screen
      name="Editera bedömning"
      component={SurveyEditView}
    ></IsLoggedInStack.Screen>
  </IsLoggedInStack.Navigator>
);

const AppRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Tab.Navigator>
      {isLoggedIn !== true ? (
        <Tab.Screen
          name="LoggaIn"
          component={LoggaInView}
          options={{ headerShown: false, tabBarStyle: { display: "none" } }}
        />
      ) : null}
      <Tab.Screen
        name="Patienter"
        component={IsLoggedInStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Adminstration"
        component={AdminView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon1 name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoute;

const styles = StyleSheet.create({
  iconBtn: {
    height: 40,
    width: 40,
  },

  container: {
    height: 70,
    width: 70,
  },

  view: {
    backgroundColor: "aliceblue",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  Img: {
    height: 30,
    width: 30,
  },

  gridView: {
    margin: 20,
    marginTop: 10,
    flexDirection: "row",
  },

  itemContainer: {
    justifyContent: "center",
    borderRadius: 5,
    padding: 40,
    height: 150,
    width: 158,
    margin: 5,
    backgroundColor: "#3498db",
  },
});
