import React, {useMemo} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  View,
  SectionList,
} from 'react-native';
import {useQuery} from '@apollo/client';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../types/Pages';

import {Spinner} from '../Spinner';
import {CreaturesQuery, CreaturesQueryVariables} from '../../types/graphql';
import {GET_CREATURES} from '../../GraphQL/Creatures';
import {sortData, section, entityInfo} from '../../utils/sortdata';

type Props = NativeStackScreenProps<HomeStackParams, 'Creatures'>;

export default function Creatures({navigation}: Props): JSX.Element {
  const {loading, error, data} = useQuery<
    CreaturesQuery,
    CreaturesQueryVariables
  >(GET_CREATURES);

  const {creature} = useMemo(() => {
    return data ? data : {creature: undefined};
  }, [data]);

  const sections = useMemo(() => {
    return creature
      ? sortData(creature as Array<entityInfo>)
      : ([] as Array<section>);
  }, [creature]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  console.log(data);

  return (
    <SectionList
      sections={sections}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CreatureInfo', {
              name: item!.name,
              id: item!.id,
              image: item!.id,
            });
          }}>
          {item!.image && (
            <ImageBackground
              blurRadius={2}
              style={styles.thumbnail}
              source={{
                uri: item.image,
              }}>
              <Text style={styles.textStyle}>{item.name}</Text>
            </ImageBackground>
          )}
        </TouchableOpacity>
      )}
      renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
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
    fontFamily: 'Cormorant Garamond',
    fontSize: 20,
    color: '#F9DF99',
    marginTop: 40,
    marginLeft: 10,
  },
});
