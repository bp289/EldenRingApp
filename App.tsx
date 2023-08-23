import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Search from './screens/Search';
import Home from './screens/Home';
import BookMarks from './screens/Bookmarks';

export type StackParams = {
  Home: undefined;
  Search: undefined;
  BookMarks: undefined;
};

const Tab = createBottomTabNavigator<StackParams>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Tab.Screen
          name="BookMarks"
          component={BookMarks}
          options={{title: 'Bookmarks'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
