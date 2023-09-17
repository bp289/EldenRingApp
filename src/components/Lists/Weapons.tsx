import React, {useMemo, useState} from 'react';
import {StyleSheet, Text, View, FlatList, ImageBackground} from 'react-native';

import {useQuery} from '@apollo/client';
import {GET_WEAPONS} from '../../GraphQL/Weapons';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams, ListItemType} from '../../types/Pages';
import {Spinner} from '../Spinner';
import {WeaponsQuery, WeaponsQueryVariables} from '../../types/graphql';

import {DropDown, ItemCard} from '../Generic/Items';

type Props = NativeStackScreenProps<HomeStackParams, 'Weapons'>;

interface WeaponItem {
  __typename: string;
  category: string;
  id: string;
  image: string;
  name: string;
}

interface categories {
  [category: string]: WeaponItem[];
}

function groupCategories(data: Array<WeaponItem>): categories {
  const categories: categories = {};
  data.forEach(entry => {
    const currentCategory = entry.category;
    if (!categories[currentCategory]) {
      categories[currentCategory] = [];
    }
    categories[currentCategory].push(entry);
  });

  return categories;
}
export default function Weapons({navigation}: Props): JSX.Element {
  const [weaponCategory, setWeaponCategory] = useState<string>('Axe');
  const {loading, error, data} = useQuery<WeaponsQuery, WeaponsQueryVariables>(
    GET_WEAPONS,
  );
  const groupedWeapons = useMemo(() => {
    if (data) {
      return groupCategories(data?.weapon as Array<WeaponItem>);
    } else {
      return {} as categories;
    }
  }, [data]);
  const categories = useMemo(() => {
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
      <View style={styles.backGround} />

      <FlatList
        style={styles.container}
        data={currentGroup}
        ListHeaderComponent={
          <ImageBackground
            style={styles.titleImageBackground}
            source={require('../../../assets/images/WeaponAlt.webp')}>
            <DropDown
              title="Weapons"
              categories={categories}
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
  backGround: {
    backgroundColor: 'transparent',
  },
  titleImageBackground: {
    height: 200,
  },
});
