import React, {useMemo, useState} from 'react';
import {StyleSheet, Text, FlatList, ImageBackground} from 'react-native';

import {useQuery} from '@apollo/client';
import {GET_WEAPONS} from '../../GraphQL/Weapons';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {
  HomeStackParams,
  ListItemType,
  categories,
} from '../../types/Pages';
import {Spinner} from '../Spinner';
import {WeaponsQuery, WeaponsQueryVariables} from '../../types/graphql';
import {BackDrop, DropDown, ItemCard} from '../Generic/ItemComponents';
import groupCategories from '../../utils/groupCategories';

type Props = NativeStackScreenProps<HomeStackParams, 'Weapons'>;

export default function Weapons({navigation}: Props): JSX.Element {
  const [weaponCategory, setWeaponCategory] = useState<string>('Axe');
  const {loading, error, data} = useQuery<WeaponsQuery, WeaponsQueryVariables>(
    GET_WEAPONS,
  );
  const groupedWeapons = useMemo(() => {
    if (data) {
      return groupCategories(data?.weapon as Array<ListItemType>);
    } else {
      return {} as categories;
    }
  }, [data]);
  const allCategories = useMemo(() => {
    return Object.keys(groupedWeapons);
  }, [groupedWeapons]);

  const currentGroup = useMemo(() => {
    return groupedWeapons[weaponCategory];
  }, [groupedWeapons, weaponCategory]);

  const handleNavigation = (item: ListItemType): void => {
    navigation.navigate('WeaponInfo', {
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
              defaultText="Axe"
              title="Weapons"
              categories={allCategories}
              setCat={setWeaponCategory}
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
  linearGradient: {
    flex: 1,
    height: 100,
  },
  titleImageBackground: {
    height: 300,
  },
});
