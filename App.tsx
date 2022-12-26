import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeView from './src/redux/features/home/HomeView';
import AboutView from './src/redux/features/about/AboutView';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminView from './src/redux/features/admin/AdminView';
import { NavigationContainer } from '@react-navigation/native';
import HealthCardsView from './src/redux/features/healthCards/HealthCardsView';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="Hem" component={HomeView} />
    <Tab.Screen name="Bedömningar" component={HealthCardsView} />
    <Tab.Screen name="Adminstration" component={AdminView} />
    <Tab.Screen name="Om" component={AboutView} />
  </Tab.Navigator>
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
