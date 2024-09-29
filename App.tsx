import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Schedule from "./src/screens/Schedule"
import Log from "./src/screens/Log"
import EditSchedule from "./src/screens/EditSchedule"
import {$naps, setNaps, addNap, removeNap } from './src/store'
import AsyncStorage from '@react-native-async-storage/async-storage';



AsyncStorage.getItem('naps').then( (data) => {data && setNaps(JSON.parse(data))});

const renderScene = SceneMap({
  schedule: Schedule,
  log: Log,
});

function Tabs() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'schedule', title: 'Schedule' },
    { key: 'log', title: 'Log' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

const Stack = createNativeStackNavigator();

function App () {
    return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{headerShown: false}} component={Tabs} />
          <Stack.Screen name="Edit schedule" component={EditSchedule} />
        </Stack.Navigator>
    </NavigationContainer>
      );
}

export default App;