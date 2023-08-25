import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Bosses from '../components/Bosses';
import Weapons from '../components/Weapons';
import BossInfo from '../components/Details/BossInfo';
import WeaponInfo from '../components/Details/WeaponInfo';
interface InfoPage {
  name: string;
  id: string;
  image: string;
}

export type HomeStackParams = {
  MainPage: undefined;
  Bosses: undefined;
  Weapons: undefined;
  AshesOfWar: undefined;
  Classes: undefined;
  Creatures: undefined;
  Incantations: undefined;
  Items: undefined;
  NPCs: undefined;
  Locations: undefined;
  Shields: undefined;
  Sorcery: undefined;
  BossInfo: InfoPage;
  WeaponInfo: InfoPage;
};

const categories = ['Bosses', 'Weapons'];
type Props = NativeStackScreenProps<HomeStackParams, 'MainPage'>;

const HomeStack = createNativeStackNavigator<HomeStackParams>();
const MainPage = ({navigation}: Props): JSX.Element => {
  return (
    <FlatList
      data={categories}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate(item)}>
          <ImageBackground
            blurRadius={2}
            style={styles.card}
            source={require('../assets/images/bosses.webp')}>
            <Text style={styles.inside}>{item}</Text>
          </ImageBackground>
        </TouchableOpacity>
      )}
    />
  );
};

export default function Home(): JSX.Element {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="MainPage" component={MainPage} />
      <HomeStack.Screen name="Bosses" component={Bosses} />
      <HomeStack.Screen name="Weapons" component={Weapons} />
      <HomeStack.Screen name="BossInfo" component={BossInfo} />
      <HomeStack.Screen name="WeaponInfo" component={WeaponInfo} />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 'auto',
    elevation: 3,
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  inside: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'green',
    color: '#CCBD79',
    fontFamily: 'Cormorant Garamond',
    fontSize: 22,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
});
