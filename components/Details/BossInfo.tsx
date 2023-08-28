import React, {useMemo} from 'react';
import {ScrollView, Text, ImageBackground, StyleSheet} from 'react-native';
import {Spinner} from '../Spinner';
import {useQuery} from '@apollo/client';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../screens/Home';
import {GET_BOSS_DETAILS} from '../../GraphQL/Bosses';

type Props = NativeStackScreenProps<HomeStackParams, 'BossInfo'>;

export default function BossInfo({navigation, route}: Props): JSX.Element {
  const {id, name, image} = route.params;

  const {loading, error, data} = useQuery(GET_BOSS_DETAILS(id));

  const entityInfo = useMemo(() => {
    return data ? data.boss[0] : [];
  }, [data]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.thumbnail}
        source={{
          uri: image,
        }}>
        <Text style={styles.header}>{name}</Text>
      </ImageBackground>
      <Text style={styles.header}>{entityInfo.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#102C2A',
  },
  thumbnail: {
    height: 200,
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  header: {
    fontFamily: 'Raleway',
    fontSize: 20,
    color: '#F9DF99',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
