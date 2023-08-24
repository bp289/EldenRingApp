import React, {useMemo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_BOSS} from '../GraphQL/queries';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../screens/Home';

type Props = NativeStackScreenProps<HomeStackParams, 'Bosses'>;

export default function Bosses({navigation}: Props): JSX.Element {
  const {loading, error, data} = useQuery(GET_BOSS);
  const {boss} = useMemo(() => {
    return data ? data : [];
  }, [data]);

  if (loading) {
    return <Text>'Loading...'</Text>;
  }
  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }
  return (
    <FlatList
      style={styles.container}
      data={boss}
      renderItem={({item}) => (
        <TouchableOpacity>
          {item.image ? (
            <ImageBackground
              blurRadius={2}
              style={styles.thumbnail}
              source={{
                uri: item.image,
              }}>
              <Text style={styles.textStyle}>{item.name}</Text>
            </ImageBackground>
          ) : (
            <ImageBackground
              blurRadius={8}
              style={styles.thumbnail}
              source={{
                uri: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/er_abductor_virgin.png',
              }}>
              <Text style={styles.textStyle}>{item.name}</Text>
            </ImageBackground>
          )}
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
    height: 100,
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  textStyle: {
    fontFamily: 'Mantinia Regular',
    fontSize: 20,
    color: '#F9DF99',
    marginTop: 40,
    marginLeft: 10,
  },
});