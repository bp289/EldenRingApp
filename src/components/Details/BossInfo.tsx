import React, {useMemo} from 'react';
import {ScrollView, Text, Image, StyleSheet, Button, View} from 'react-native';
import {Spinner} from '../Spinner';
import {useQuery} from '@apollo/client';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../types/pages';
import {GET_BOSS_DETAILS} from '../../GraphQL/Bosses';

import {BossDetailsQuery, BossDetailsQueryVariables} from '../../types/graphql';

type Props = NativeStackScreenProps<HomeStackParams, 'BossInfo'>;

interface BossData {
  description: string;
  drops: string[];
  region: string;
  location: string;
  healthPoints: string;
}

export default function BossInfo({navigation, route}: Props): JSX.Element {
  const {id, name, image} = route.params;

  const {loading, error, data} = useQuery<
    BossDetailsQuery,
    BossDetailsQueryVariables
  >(GET_BOSS_DETAILS(id));

  const parsedData = useMemo(() => {
    if (data && data.boss) {
      const boss = data.boss[0];
      return boss as BossData;
    }
    return null;
  }, [data]);

  const {
    description = '',
    drops = [],
    location = '',
    region = '',
    healthPoints = 0,
  } = parsedData || {};

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.thumbnail}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.header}>{name}</Text>
      <View style={styles.hairline} />
      <Text style={styles.rest}>{description}</Text>
      <Text>Drops</Text>
      <Text style={styles.rest}>
        {drops.map((drop: string) => {
          const number = drops.indexOf(drop) + 1;
          return (
            <Text>
              {number}. {drop}
            </Text>
          );
        })}
      </Text>
      <Text>Location:</Text>
      <Button title="Location">{location}</Button>
      <Text>Region:</Text>
      <Text>{region}</Text>
      <Text>Health Points</Text>
      <Text>{healthPoints}</Text>
    </ScrollView>
  );
  // }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0E3F39',
  },
  thumbnail: {
    height: 300,
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  header: {
    fontFamily: 'Raleway',
    fontSize: 45,
    color: '#F9DF99',
    fontWeight: 'semibold',
    marginRight: 'auto',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  rest: {
    fontFamily: 'Raleway',
    fontSize: 20,
    color: '#F9DF99',
    fontWeight: 'light',
    marginRight: 30,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  hairline: {
    backgroundColor: '#59593E',
    height: 3,
    width: 'auto',
  },
});
