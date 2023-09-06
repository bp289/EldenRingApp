import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ImageSourcePropType} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Info

import BossInfo from '../components/Details/BossInfo';
import WeaponInfo from '../components/Details/WeaponInfo';
import CreaturesInfo from '../components/Details/CreaturesInfo';
import LocationInfo from '../components/Details/LocationInfo';

//Pages
import Weapons from '../components/Lists/Weapons';
import Bosses from '../components/Lists/Bosses';
import Armors from '../components/Lists/Items';
import Creatures from '../components/Lists/Creatures';
import Items from '../components/Lists/Items';
import Sorcery from '../components/Lists/Sorcery';
import Locations from '../components/Lists/Locations';
import AshesOfWar from '../components/Lists/AshesOfWar';

import type {HomeStackParams} from '../types/pages';

type image = {
  [key: string]: ImageSourcePropType;
};

const images: image = {
  Bosses: require('../../assets/images/Bosses.png'),
  Weapons: require('../../assets/images/Weapons.png'),
  Locations: require('../../assets/images/Locations.png'),
  Creatures: require('../../assets/images/Creatures.jpeg'),
};
const categories = [
  'Bosses',
  'Weapons',
  // 'Armors',
  // 'Items',
  'Creatures',
  // 'Sorcery',
  'Locations',
  // 'Ashes Of War',
] as const;

type Props = NativeStackScreenProps<HomeStackParams, 'MainPage'>;

const HomeStack = createNativeStackNavigator<HomeStackParams>();
const MainPage = ({navigation}: Props): JSX.Element => {
  return (
    <View style={styles.background}>
      <FlatList
        ListHeaderComponent={
          <ImageBackground
            style={styles.imageBackground}
            source={require('../../assets/images/Background.png')}>
            <LinearGradient
              colors={['transparent', '#050300']}
              style={styles.linearGradient}>
              <Text style={styles.title}>Elden Ring Wiki</Text>
            </LinearGradient>
          </ImageBackground>
        }
        ListFooterComponentStyle={null}
        data={categories}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.thumbnailContainer}
            onPress={() => navigation.navigate(item)}>
            <View>
              <Text style={styles.text}>{item}</Text>
            </View>
            <View>
              <Image style={styles.thumbnail} source={images[item]} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const headerStyle = {
  backgroundColor: '#050300',
};
const headerTintColor = '#F2D16C';
const headerTitleStyle = {
  fontFamily: 'Raleway',
  fontSize: 21,
};

export default function Home(): JSX.Element {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="MainPage"
        component={MainPage}
        options={{
          title: 'Browse',
          headerStyle,
          headerTintColor,
          headerTitleStyle,
        }}
      />
      <HomeStack.Screen
        name="Bosses"
        component={Bosses}
        options={{
          headerStyle,
          headerTintColor,
          headerTitleStyle,
        }}
      />
      <HomeStack.Screen
        name="Sorcery"
        component={Sorcery}
        options={{
          headerStyle,
          headerTintColor,
          headerTitleStyle,
        }}
      />
      <HomeStack.Screen
        name="Locations"
        component={Locations}
        options={{
          headerStyle,
          headerTintColor,
          headerTitleStyle,
        }}
      />
      <HomeStack.Screen
        name="AshesOfWar"
        component={AshesOfWar}
        options={{
          headerStyle,
          headerTintColor,
          headerTitleStyle,
        }}
      />
      <HomeStack.Screen
        name="Weapons"
        component={Weapons}
        options={{
          headerStyle,
          headerTintColor,
          headerTitleStyle,
        }}
      />
      <HomeStack.Screen
        name="Creatures"
        component={Creatures}
        options={{
          headerStyle,
          headerTintColor,
          headerTitleStyle,
        }}
      />
      <HomeStack.Screen
        name="LocationInfo"
        component={LocationInfo}
        options={{
          headerStyle,
          headerTintColor,
          headerTitleStyle,
        }}
      />
      <HomeStack.Screen
        name="BossInfo"
        component={BossInfo}
        options={{
          headerStyle,
          headerTintColor,
          headerTitleStyle,
        }}
      />
      <HomeStack.Screen
        name="WeaponInfo"
        component={WeaponInfo}
        options={{
          headerStyle,
          headerTintColor,
          headerTitleStyle,
        }}
      />
      <HomeStack.Screen
        name="CreaturesInfo"
        component={CreaturesInfo}
        options={{
          headerStyle,
          headerTintColor,
          headerTitleStyle,
        }}
      />
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
    marginLeft: 10,
    marginTop: 9,
    color: '#F9DF99',
    fontFamily: 'Raleway',
    fontSize: 25,
    fontWeight: '500',
  },
  subtext: {
    color: '#E4C75E',
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#F9DF99',
    fontFamily: 'Cormorant Garamond',
    fontSize: 55,
    fontWeight: 'bold',
    marginTop: 70,
  },
  linearGradient: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  background: {
    backgroundColor: '#050300',
  },
  imageBackground: {
    height: 200,
  },
  thumbnail: {
    height: 80,
    width: 80,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#59593E',
    marginTop: 10,
    marginRight: 10,
  },
  thumbnailContainer: {
    height: 105,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#182120',
    margin: 10,
    borderBottomWidth: 5,
    borderBottomColor: '#59593E',
    borderRadius: 9,
  },
});
