import React, {useMemo, useState} from 'react';
import {StyleSheet, Text, FlatList, ImageBackground} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_SHIELDS} from '../../GraphQL/Shields';
import {BackDrop, DropDown, ItemCard} from '../Generic/ItemComponents';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../types/Pages';

import {ShieldsQuery, ShieldsQueryVariables} from '../../types/graphql';
import {Spinner} from '../Spinner';
import {ListItemType, categories} from '../../types/pages';

import groupCategories from '../../utils/groupCategories';

type Props = NativeStackScreenProps<HomeStackParams, 'Shields'>;

export default function Shields({navigation}: Props): JSX.Element {
  const [shieldCategory, setShieldCategory] = useState<string>('Gauntlets');

  const {loading, error, data} = useQuery<ShieldsQuery, ShieldsQueryVariables>(
    GET_SHIELDS,
  );

  const groupedShields = useMemo(() => {
    if (data) {
      return groupCategories(data?.shield as Array<ListItemType>);
    } else {
      return {} as categories;
    }
  }, [data]);

  const allCategories = useMemo(() => {
    return Object.keys(groupedShields);
  }, [groupedShields]);

  const currentGroup = useMemo(() => {
    return groupedShields[shieldCategory];
  }, [groupedShields, shieldCategory]);

  const handleNavigation = (item: ListItemType): void => {
    navigation.navigate('ShieldInfo', {
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
        data={currentGroup}
        ListHeaderComponent={
          <ImageBackground
            style={styles.titleImageBackground}
            source={require('../../../assets/images/WeaponAlt.webp')}>
            <DropDown
              defaultText="Gauntlets"
              title="Weapons"
              categories={allCategories}
              setCat={setShieldCategory}
            />
          </ImageBackground>
        }
        renderItem={({item}) => (
          <>
            {item.image && (
              <ItemCard onNavigation={handleNavigation} item={item} />
            )}
          </>
        )}
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
  linearGradient: {
    flex: 1,
    height: 100,
  },
  titleImageBackground: {
    height: 200,
  },
});
