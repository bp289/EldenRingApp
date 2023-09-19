import React, {useMemo} from 'react';
import {ScrollView, Text, Image, StyleSheet, View} from 'react-native';
import {Spinner} from '../Spinner';
import {useQuery} from '@apollo/client';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../types/pages';
import {GET_ITEM_DETAILS} from '../../GraphQL/Items';
import {ItemDetailsQuery, ItemDetailsQueryVariables} from '../../types/graphql';

type Props = NativeStackScreenProps<HomeStackParams, 'ItemInfo'>;

export default function ItemInfo({navigation, route}: Props): JSX.Element {
  const {id, name, image} = route.params;

  const {loading, error, data} = useQuery<
    ItemDetailsQuery,
    ItemDetailsQueryVariables
  >(GET_ITEM_DETAILS(id));

  const entityInfo = useMemo(() => {
    return data
      ? data.getItem
      : {
          _typeName: ' ',
          description: '',
          dmgNegation: [],
          resistance: [],
          weight: [],
        };
  }, [data]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.header}>{name}</Text>
        <Image
          style={styles.thumbnail}
          source={{
            uri: image,
          }}></Image>
      </View>
      <Text style={styles.header}>{entityInfo.description}</Text>
      <Text style={styles.header}>Damage</Text>
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
