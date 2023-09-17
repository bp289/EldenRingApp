import React from 'react';
import {ScrollView, Text, Image, StyleSheet, View} from 'react-native';
import {Spinner} from '../Spinner';
import {useQuery} from '@apollo/client';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../types/pages';
import {GET_WEAPON_DETAILS} from '../../GraphQL/Weapons';
import {
  WeaponDetailsQueryVariables,
  WeaponDetailsQuery,
} from '../../types/graphql';

import LinearGradient from 'react-native-linear-gradient';

import {
  Description,
  SubHeading,
  AttributeStat,
  ScalingStat,
  StatRow,
  Stats,
  Divider,
  RowItem,
  FillRowAttributeStat,
  RowItemFill,
} from '../Generic/Info';
type Props = NativeStackScreenProps<HomeStackParams, 'WeaponInfo'>;

export default function BossInfo({route}: Props): JSX.Element {
  const {id, name, image} = route.params;

  const {loading, error, data} = useQuery<
    WeaponDetailsQuery,
    WeaponDetailsQueryVariables
  >(GET_WEAPON_DETAILS(id));

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={['black', '#182120']} style={styles.card}>
        <Text style={text.header}>{name}</Text>
        <View style={styles.category}>
          <Text style={text.subHeading}>({data?.getWeapon?.category})</Text>
        </View>
      </LinearGradient>
      <Image
        style={styles.thumbnail}
        source={{
          uri: image,
        }}
      />
      <Divider />
      <Description textData={data?.getWeapon?.description!} />
      <SubHeading textData="Stats" />

      <Stats>
        <StatRow>
          <AttributeStat title="Attack" statData={data?.getWeapon!.attack!} />
          <AttributeStat title="Defense" statData={data?.getWeapon!.defence!} />
        </StatRow>
        <StatRow>
          <ScalingStat
            title="Scaling"
            statData={data?.getWeapon!.scalesWith!}
          />
          <RowItem title="Category" description={data?.getWeapon!.category!} />
        </StatRow>
      </Stats>

      <Divider />

      <Stats>
        <FillRowAttributeStat
          title="Requirements"
          statData={data?.getWeapon!.requiredAttributes!}
        />
        <RowItemFill title="Weight" description={data?.getWeapon!.weight!} />
      </Stats>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#182120',
  },
  category: {
    alignItems: 'flex-end',
    marginRight: 30,
  },
  card: {
    width: 'auto',
  },
  thumbnail: {
    height: 250,
    width: 250,
    borderRadius: 50,
    marginLeft: 50,
  },
});

const text = StyleSheet.create({
  header: {
    fontFamily: 'Raleway',
    fontSize: 45,
    color: '#F9DF99',
    fontWeight: '500',
    marginRight: 'auto',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  subHeading: {
    fontFamily: 'Raleway',
    fontSize: 25,
    color: '#F9DF99',
    fontWeight: '500',
  },
});
