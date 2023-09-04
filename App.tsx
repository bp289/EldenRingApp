import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Search from './src/screens/Search';
import Home from './src/screens/Home';
import BookMarks from './src/screens/Bookmarks';
import {StyleSheet} from 'react-native';

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
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'library-outline';
              } else if (route.name === 'Search') {
                iconName = 'search';
              } else if (route.name === 'BookMarks') {
                iconName = 'add-circle-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            headerShown: false,
            tabBarStyle: {
              backgroundColor: 'black',
            },
            tabBarActiveTintColor: '#F2D16C',
            tabBarInactiveTintColor: '#59593E',
          })}
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
