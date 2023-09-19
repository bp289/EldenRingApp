import React, {useMemo, useState} from 'react';
import {StyleSheet, Text, FlatList, ImageBackground} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_ARMORS} from '../../GraphQL/Armors';
import {BackDrop, DropDown, ItemCard} from '../Generic/ItemComponents';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../types/Pages';

import {Spinner} from '../Spinner';
import {ArmorsQuery, ArmorsQueryVariables} from '../../types/graphql';
import {ListItemType, categories} from '../../types/pages';

import groupCategories from '../../utils/groupCategories';
type Props = NativeStackScreenProps<HomeStackParams, 'Armors'>;

export default function Armors({navigation}: Props): JSX.Element {
  const [armorCategory, setArmorCategory] = useState<string>('Gauntlets');
  const {loading, error, data} = useQuery<ArmorsQuery, ArmorsQueryVariables>(
    GET_ARMORS,
  );

  const groupedArmors = useMemo(() => {
    if (data) {
      return groupCategories(data?.armor as Array<ListItemType>);
    } else {
      return {} as categories;
    }
  }, [data]);

  const allCategories = useMemo(() => {
    return Object.keys(groupedArmors);
  }, [groupedArmors]);

  const currentGroup = useMemo(() => {
    return groupedArmors[armorCategory];
  }, [groupedArmors, armorCategory]);

  const handleNavigation = (item: ListItemType): void => {
    navigation.navigate('ArmorInfo', {
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
              setCat={setArmorCategory}
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
