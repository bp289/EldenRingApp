import React from 'react';
import {StyleSheet, Text, FlatList, ImageBackground} from 'react-native';
import {useQuery} from '@apollo/client';
import {BackDrop, ItemCard} from '../Generic/ItemComponents';
import {GET_SORCERIES} from '../../GraphQL/Sorcery';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../types/Pages';
import {ListItemType} from '../../types/Pages';

import {TopTitle} from '../Generic/List';

import {SorceriesQuery, SorceriesQueryVariables} from '../../types/graphql';
import {Spinner} from '../Spinner';

type Props = NativeStackScreenProps<HomeStackParams, 'Sorcery'>;

export default function Sorcery({navigation}: Props): JSX.Element {
  const {loading, error, data} = useQuery<
    SorceriesQuery,
    SorceriesQueryVariables
  >(GET_SORCERIES);

  const handleNavigation = (item: ListItemType): void => {
    navigation.navigate('SorceryInfo', {
      name: item!.name,
      id: item!.id,
      image: item!.image,
    });
  };
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }
  return (
    <>
      <BackDrop />
      <FlatList
        style={styles.container}
        data={data?.sorcery}
        ListHeaderComponent={
          <ImageBackground
            style={styles.titleImageBackground}
            source={require('../../../assets/images/WeaponAlt.webp')}>
            <TopTitle title="Items" />
          </ImageBackground>
        }
        renderItem={({item}) => (
          <>
            {item!.image && (
              <ItemCard
                onNavigation={handleNavigation}
                item={item as ListItemType}
              />
            )}
          </>
        )}
        keyExtractor={item => item?.id || ''}
      />
    </>
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
  titleImageBackground: {
    height: 200,
  },
});
