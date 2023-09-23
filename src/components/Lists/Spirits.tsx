import React from 'react';
import {StyleSheet, Text, FlatList, ImageBackground} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_SPIRITS} from '../../GraphQL/Spirits';
import {BackDrop, ItemCard} from '../Generic/ItemComponents';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../types/Pages';
import {ListItemType} from '../../types/Pages';
import {TopTitle} from '../Generic/List';

import {SpiritsQuery, SpiritsQueryVariables} from '../../types/graphql';
import {Spinner} from '../Spinner';

type Props = NativeStackScreenProps<HomeStackParams, 'Spirits'>;

export default function Spirits({navigation}: Props): JSX.Element {
  const {loading, error, data} = useQuery<SpiritsQuery, SpiritsQueryVariables>(
    GET_SPIRITS,
  );

  const handleNavigation = (item: ListItemType): void => {
    navigation.navigate('SpiritsInfo', {
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
        data={data?.spirit}
        ListHeaderComponent={
          <ImageBackground
            style={styles.titleImageBackground}
            source={require('../../../assets/images/WeaponAlt.webp')}>
            <TopTitle title="Spirits" />
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
