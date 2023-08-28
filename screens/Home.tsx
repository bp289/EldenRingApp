import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Bosses from '../components/Bosses';
import Weapons from '../components/Weapons';
import BossInfo from '../components/Details/BossInfo';
import WeaponInfo from '../components/Details/WeaponInfo';
import Armors from '../components/Armors';
import Items from '../components/Items';
import Sorcery from '../components/Sorcery';
import Locations from '../components/Locations';
import AshesOfWar from '../components/AshesOfWar';
interface InfoPage {
  name: string;
  id: string;
  image: string;
}

export type HomeStackParams = {
  MainPage: undefined;
  List: undefined;
  Armors: undefined;
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

const categories = [
  'Bosses',
  'Weapons',
  'Armors',
  'Items',
  'Creatures',
  'Sorcery',
  'Locations',
  'Ashes Of War',
];
type Props = NativeStackScreenProps<HomeStackParams, 'MainPage'>;

const HomeStack = createNativeStackNavigator<HomeStackParams>();
const MainPage = ({navigation}: Props): JSX.Element => {
  return (
    <FlatList
      data={categories}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate(item)}>
          <View style={styles.card}>
            <Image
              style={styles.thumbnail}
              source={require('../assets/images/bosses.webp')}
            />

            <Text style={styles.text}>{item}</Text>
          </View>
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
      <HomeStack.Screen name="Sorcery" component={Sorcery} />
      <HomeStack.Screen name="Locations" component={Locations} />
      <HomeStack.Screen name="AshesOfWar" component={AshesOfWar} />
      <HomeStack.Screen name="Weapons" component={Weapons} />
      <HomeStack.Screen name="Armors" component={Armors} />
      <HomeStack.Screen name="Items" component={Items} />
      <HomeStack.Screen name="BossInfo" component={BossInfo} />
      <HomeStack.Screen name="WeaponInfo" component={WeaponInfo} />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 'auto',
    height: 130,
    borderBottomWidth: 10,
    borderColor: '#102C2A',
    borderRadius: 4,
    elevation: 4,
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 8,
    backgroundColor: '#0E3F39',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  text: {
    marginRight: 10,
    marginTop: 9,
    color: '#F9DF99',
    fontFamily: 'Raleway',
    fontSize: 25,
    fontWeight: '500',
  },
  subtext: {
    color: '#E4C75E',
  },
  background: {
    backgroundColor: '#59593E',
  },
  thumbnail: {
    borderColor: '#59593E',
    borderWidth: 3,
    width: 100,
    height: 100,
    margin: 10,
  },
});
