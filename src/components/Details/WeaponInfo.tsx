import React, {useMemo} from 'react';
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
import {weapons} from '../../styles/weaponStyle';

import {infoText} from '../../styles/Text';
import LinearGradient from 'react-native-linear-gradient';
type Props = NativeStackScreenProps<HomeStackParams, 'WeaponInfo'>;

export default function BossInfo({navigation, route}: Props): JSX.Element {
  const {id, name, image} = route.params;

  const {loading, error, data} = useQuery<
    WeaponDetailsQuery,
    WeaponDetailsQueryVariables
  >(GET_WEAPON_DETAILS(id));

  const entityInfo = useMemo(() => {
    if (data) {
      return data.getWeapon;
    }
  }, [data]);

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
          <Text style={text.subHeading}>({entityInfo?.category})</Text>
        </View>
      </LinearGradient>
      <Image
        style={styles.thumbnail}
        source={{
          uri: image,
        }}
      />
      <View style={styles.divider}></View>
      <Text style={text.main}>{entityInfo?.description}</Text>
      <View style={styles.titleContainer}>
        <View style={styles.titleLine} />
        <Text style={text.subHeading}>Stats</Text>
        <View style={styles.titleLine} />
      </View>

      <View style={styles.stats}>
        <View style={styles.statsInner}>
          <View style={styles.left}>
            <Text style={text.subHeading2}>Attack</Text>
            {entityInfo!.attack!.map(attribute => {
              return (
                <Text style={text.list}>
                  {attribute!.name}: {attribute!.amount}
                </Text>
              );
            })}
          </View>
          <View>
            <Text style={text.subHeading2}>Defence</Text>
            {entityInfo!.defence!.map(attribute => {
              return (
                <Text style={text.list}>
                  {attribute!.name}: {attribute!.amount}
                </Text>
              );
            })}
          </View>
        </View>
        <View style={styles.statsInner}>
          <View style={styles.left}>
            <Text style={text.subHeading2}>Scaling </Text>
            {entityInfo!.scalesWith!.map(attribute => {
              return (
                <Text style={text.list}>
                  {attribute!.name}: {attribute!.scaling}
                </Text>
              );
            })}
          </View>
          <View>
            <Text style={text.subHeading2}>Category</Text>
            <Text style={text.list}>{entityInfo?.category}</Text>
          </View>
        </View>
      </View>

      <View style={styles.divider}></View>

      <View style={styles.stats}>
        <View style={styles.statsInner}>
          <Text style={text.subHeading2}>Requirements: </Text>
          {entityInfo!.requiredAttributes!.map(attribute => {
            return (
              <Text style={text.list}>
                {attribute!.name}: {attribute!.amount}
              </Text>
            );
          })}
        </View>
        <View style={styles.statsInner}>
          <Text style={text.subHeading2}>Weight: </Text>
          <Text style={text.list}> {entityInfo?.weight}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create(weapons);

const text = StyleSheet.create(infoText);
