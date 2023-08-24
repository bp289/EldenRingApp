import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Bosses from '../components/Bosses';
import Weapons from '../components/Weapons';
import Info from '../components/Info';

export type HomeStackParams = {
  MainPage: undefined;
  Bosses: undefined;
  Weapons: undefined;
  InfoPage: {
    name: string;
    id: string;
    type: string;
  };
};

type Props = NativeStackScreenProps<HomeStackParams, 'MainPage'>;

const HomeStack = createNativeStackNavigator<HomeStackParams>();
const MainPage = ({navigation}: Props): JSX.Element => {
  return (
    <ImageBackground
      style={styles.background}
      resizeMode="cover"
      source={require('../assets/images/Background.png')}>
      <ScrollView>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Bosses')}>
          <ImageBackground
            blurRadius={2}
            imageStyle={{borderRadius: 6}}
            style={styles.card}
            source={require('../assets/images/bosses.webp')}>
            <Text style={styles.inside}>Bosses</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Weapons')}>
          <View style={styles.inside}>
            <Text>Weapons</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default function Home(): JSX.Element {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="MainPage" component={MainPage} />
      <HomeStack.Screen name="Bosses" component={Bosses} />
      <HomeStack.Screen name="Weapons" component={Weapons} />
      <HomeStack.Screen name="InfoPage" component={Info} />
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
    fontFamily: 'Mantinia Regular',
    fontSize: 22,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
});
