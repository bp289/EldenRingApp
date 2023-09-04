import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import Search from './src/screens/Search';
import Home from './src/screens/Home';
import BookMarks from './src/screens/Bookmarks';

const API_KEY = 'https://eldenring.fanapis.com/api/graphql';

const client = new ApolloClient({
  uri: API_KEY,
  cache: new InMemoryCache(),
});

export type TabParams = {
  Home: undefined;
  Search: undefined;
  BookMarks: undefined;
};

const Tab = createBottomTabNavigator<TabParams>();

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: 'black',
            },
            tabBarActiveTintColor: 'yellow',
            tabBarInactiveTintColor: 'green',
          }}
          initialRouteName="Home">
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Browse',
            }}
          />
          <Tab.Screen
            name="BookMarks"
            component={BookMarks}
            options={{title: 'Bookmarks'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
