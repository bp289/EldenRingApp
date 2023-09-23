import React, {useMemo} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_LOCATIONS} from '../../GraphQL/Locations';
import {allText} from '../../styles/Text';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../types/Pages';

import {LocationsQuery, LocationsQueryVariables} from '../../types/graphql';
import {Spinner} from '../Spinner';
import {TopTitle} from '../Generic/List';

type Props = NativeStackScreenProps<HomeStackParams, 'Locations'>;

export default function Locations({navigation}: Props): JSX.Element {
  const {loading, error, data} = useQuery<
    LocationsQuery,
    LocationsQueryVariables
  >(GET_LOCATIONS);
  const {location} = useMemo(() => {
    return data ? data : {location: undefined};
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
      data={location}
      ListHeaderComponent={
        <ImageBackground
          style={text.titleImageBackground}
          source={require('../../../assets/images/Locations.png')}>
          <TopTitle title="Locations" />
        </ImageBackground>
      }
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LocationInfo', {
              name: item!.name!,
              id: item!.id,
              image: item!.image!,
            });
          }}>
          {item?.image && (
            <ImageBackground
              style={styles.thumbnail}
              source={{
                uri: item.image,
              }}>
              <Text style={styles.textStyle}>{item.name}</Text>
            </ImageBackground>
          )}
        </TouchableOpacity>
      )}
      keyExtractor={item => item!.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050300',
  },
  thumbnail: {
    height: 150,
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    marginTop: 20,
  },
  textStyle: {
    fontFamily: 'Raleway',
    fontSize: 20,
    color: '#F9DF99',
    marginTop: 40,
    marginLeft: 10,
  },
});

const text = StyleSheet.create(allText as any);
