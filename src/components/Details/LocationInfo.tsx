import React from 'react';
import {
  ScrollView,
  Text,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import {Spinner} from '../Spinner';
import {useQuery} from '@apollo/client';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../types/pages';
import {GET_LOCATION_DETAILS} from '../../GraphQL/Locations';
import {
  LocationDetailsQueryVariables,
  LocationDetailsQuery,
} from '../../types/graphql';

import {infoText} from '../../styles/Text';
import {creaturesInfo} from '../../styles/creatureStyle';
import LinearGradient from 'react-native-linear-gradient';
type Props = NativeStackScreenProps<HomeStackParams, 'LocationInfo'>;

export default function LocationInfo({route}: Props): JSX.Element {
  const {id, name, image} = route.params;

  const {loading, error, data} = useQuery<
    LocationDetailsQuery,
    LocationDetailsQueryVariables
  >(GET_LOCATION_DETAILS, {
    variables: {
      id,
    },
  });

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

      <Text style={text.main}>{data?.getLocation.description}</Text>
      <View style={styles.titleContainer}>
        <View style={styles.titleLine} />
        <Text style={text.subHeading}>Location</Text>
        <View style={styles.titleLine} />
      </View>
      <Text style={text.main}>Region - {data?.getLocation.region}</Text>
    </ScrollView>
  );
}

const text = StyleSheet.create(infoText);
const styles = StyleSheet.create(creaturesInfo);
