import * as React from 'react';
import {Button} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Bosses from '../components/Bosses';

export type HomeStackParams = {
  MainPage: undefined;
  Bosses: undefined;
};

type Props = NativeStackScreenProps<HomeStackParams, 'MainPage'>;

const HomeStack = createNativeStackNavigator<HomeStackParams>();
const MainPage = ({navigation}: Props): JSX.Element => {
  return (
    <Button title="Bosses" onPress={() => navigation.navigate('Bosses')} />
  );
};

export default function Home(): JSX.Element {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="MainPage" component={MainPage} />
      <HomeStack.Screen name="Bosses" component={Bosses} />
    </HomeStack.Navigator>
  );
}
