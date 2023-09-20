import React from 'react';
import {StyleSheet, Text, FlatList, ImageBackground} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_ASHES_OF_WAR} from '../../GraphQL/AshesOfWar';
import {BackDrop, ItemCard} from '../Generic/ItemComponents';
import {TopTitle} from '../Generic/List';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../types/Pages';

import {Spinner} from '../Spinner';
import {AshesOfWarQuery, AshesOfWarQueryVariables} from '../../types/graphql';

import {ListItemType} from '../../types/pages';

type Props = NativeStackScreenProps<HomeStackParams, 'AshesOfWar'>;

export default function AshesOfWar({navigation}: Props): JSX.Element {
  const {loading, error, data} = useQuery<
    AshesOfWarQuery,
    AshesOfWarQueryVariables
  >(GET_ASHES_OF_WAR);

  const handleNavigation = (item: ListItemType): void => {
    navigation.navigate('AshOfWarInfo', {
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
        data={data?.ashOfWar!}
        ListHeaderComponent={
          <ImageBackground
            style={styles.titleImageBackground}
            source={require('../../../assets/images/WeaponAlt.webp')}>
            <TopTitle title="AshesOfWar" />
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
    paddingBottom: 15,
    backgroundColor: '#050300',
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
