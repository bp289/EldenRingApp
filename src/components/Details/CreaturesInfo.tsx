import React, {useMemo} from 'react';
import {
  ScrollView,
  Text,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {Spinner} from '../Spinner';
import {useQuery} from '@apollo/client';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import type {HomeStackParams} from '../../types/pages';
import {GET_CREATURE_DETAILS} from '../../GraphQL/Creatures';
import {
  CreatureDetailsQueryVariables,
  CreatureDetailsQuery,
} from '../../types/graphql';

import LocationImage from '../Image';
import {creatures} from '../../styles/creatureStyle';
import {infoText} from '../../styles/Text';
type Props = NativeStackScreenProps<HomeStackParams, 'CreaturesInfo'>;

export default function CreatureInfo({navigation, route}: Props): JSX.Element {
  const {id, name, image} = route.params;

  const {loading, error, data} = useQuery<
    CreatureDetailsQuery,
    CreatureDetailsQueryVariables
  >(GET_CREATURE_DETAILS(id));

  const drops = useMemo(() => {
    return data?.getCreature.drops || [];
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
        <LinearGradient
          colors={['transparent', '#050300']}
          style={styles.linearGradient}
        />
      </ImageBackground>

      <Text style={text.header}>{name}</Text>
      <View style={styles.divider} />

      <Text style={text.main}>{data?.getCreature.description}</Text>
      <View style={styles.titleContainer}>
        <View style={styles.titleLine} />
        <Text style={text.subHeading}>Location</Text>
        <View style={styles.titleLine} />
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log('navigating');
        }}>
        <LocationImage locationName={data?.getCreature.location || ''} />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <View style={styles.titleLine} />
        <Text style={text.subHeading}>Drops </Text>
        <View style={styles.titleLine} />
      </View>
      <View style={styles.stats}>
        {drops.map((drop, index) => {
          const number = index + 1;
          return (
            <Text key={`${drop}-${index}`} style={text.list}>
              {number}. {drop}
            </Text>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create(creatures);

const text = StyleSheet.create(infoText);
