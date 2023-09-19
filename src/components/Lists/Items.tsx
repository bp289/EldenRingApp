import React, {useMemo, useState} from 'react';
import {StyleSheet, Text, FlatList} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_ITEMS} from '../../GraphQL/Items';
import {BackDrop, DropDown, ItemCard} from '../Generic/ItemComponents';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../types/Pages';

import {Spinner} from '../Spinner';
import {ItemsQuery, ItemsQueryVariables} from '../../types/graphql';
import {ListItemType, categories} from '../../types/pages';

import groupCategories from '../../utils/groupCategories';

type Props = NativeStackScreenProps<HomeStackParams, 'Items'>;

export default function Items({navigation}: Props): JSX.Element {
  const [itemCategory, setItemCategory] = useState<string>('Gauntlets');
  const {loading, error, data} = useQuery<ItemsQuery, ItemsQueryVariables>(
    GET_ITEMS,
  );

  const groupedItems = useMemo(() => {
    if (data) {
      return groupCategories(data?.item as Array<ListItemType>);
    } else {
      return {} as categories;
    }
  }, [data]);

  const allCategories = useMemo(() => {
    return Object.keys(groupedItems);
  }, [groupedItems]);

  const currentGroup = useMemo(() => {
    return groupedItems[itemCategory];
  }, [groupedItems, itemCategory]);

  const handleNavigation = (item: ListItemType): void => {
    navigation.navigate('ItemInfo', {
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
          <DropDown
            defaultText="Gauntlets"
            title="Weapons"
            categories={allCategories}
            setCat={setItemCategory}
          />
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
