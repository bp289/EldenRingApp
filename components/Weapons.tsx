import React, {useMemo} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_WEAPONS} from '../GraphQL/Weapons';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../screens/Home';
import {Spinner} from './Spinner';

type Props = NativeStackScreenProps<HomeStackParams, 'Weapons'>;

export default function Weapons({navigation}: Props): JSX.Element {
  const {loading, error, data} = useQuery(GET_WEAPONS);
  const {weapon} = useMemo(() => {
    return data ? data : [];
  }, [data]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }
  return (
    <FlatList
      style={styles.container}
      data={weapon}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('WeaponInfo', {
              name: item.name,
              id: item.id,
              image: item.image,
            });
          }}>
          <ImageBackground
            style={styles.thumbnail}
            source={{
              uri: item.image,
            }}>
            <Text style={styles.textStyle}>{item.name}</Text>
          </ImageBackground>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbnail: {
    height: 200,
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: 'Cormorant Garamond',
    fontSize: 20,
    color: '#CCBD79',
    marginTop: 40,
    marginLeft: 10,
  },
});
