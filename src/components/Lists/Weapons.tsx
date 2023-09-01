import React, {useMemo, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';

import {allText} from '../../styles/Text';
import {dropDown} from '../../styles/dropDown';
import LinearGradient from 'react-native-linear-gradient';

import {useQuery} from '@apollo/client';
import {GET_WEAPONS} from '../../GraphQL/Weapons';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../types/Pages';
import {Spinner} from '../Spinner';
import {WeaponsQuery, WeaponsQueryVariables} from '../../types/graphql';
import SelectDropdown from 'react-native-select-dropdown';

type Props = NativeStackScreenProps<HomeStackParams, 'Weapons'>;

interface axe {
  __typename: string;
  category: string;
  id: string;
  image: string;
  name: string;
}

interface categories {
  [category: string]: axe[];
}

function groupCategories(data: Array<axe>): categories {
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
  const [weaponCategory, setWeaponCategory] = useState('Axe');
  const {loading, error, data} = useQuery<WeaponsQuery, WeaponsQueryVariables>(
    GET_WEAPONS,
  );
  const groupedWeapons = useMemo(() => {
    if (data) {
      return groupCategories(data?.weapon as Array<axe>);
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

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  return (
    <>
      <View style={styles.backGround}></View>

      <FlatList
        style={styles.container}
        data={currentGroup}
        ListHeaderComponent={
          <ImageBackground
            style={text.titleImageBackground}
            source={require('../../../assets/images/WeaponAlt.webp')}>
            <LinearGradient
              colors={['transparent', '#050300']}
              style={text.linearGradient}>
              <View style={text.titleContainer}>
                <View style={text.titleLine} />
                <Text style={text.header}>Weapons </Text>
                <View style={text.titleLine} />
              </View>

              <SelectDropdown
                data={categories}
                onSelect={selectedItem => {
                  setWeaponCategory(selectedItem);
                }}
                buttonStyle={weaponMenu.main}
                buttonTextStyle={text.dropDown}
                defaultButtonText={'Axe'}
                buttonTextAfterSelection={selectedItem => {
                  return selectedItem;
                }}
                renderDropdownIcon={isOpened => {
                  return (
                    <>
                      <Image
                        style={
                          isOpened
                            ? weaponMenu.chevronOpen
                            : weaponMenu.chevronClosed
                        }
                        source={require('../../../assets/images/icons/chevron.png')}
                      />
                      <Text style={text.dropDown}>Weapon Type :</Text>
                    </>
                  );
                }}
                dropdownIconPosition={'left'}
                rowStyle={weaponMenu.rowStyle}
                rowTextStyle={text.dropDownRow}
              />
            </LinearGradient>
          </ImageBackground>
        }
        renderItem={({item}) => (
          <>
            {item.image && (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('WeaponInfo', {
                    name: item!.name,
                    id: item!.id,
                    image: item!.image,
                  });
                }}>
                <View style={styles.thumbnail}>
                  <Text style={text.text}>{item.name}</Text>
                  <Image
                    style={styles.image}
                    source={{
                      uri: item.image,
                    }}
                  />
                </View>
              </TouchableOpacity>
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
  thumbnail: {
    width: 'auto',
    borderRadius: 5,
    height: 130,
    margin: 10,
    borderBottomColor: '#0E3F39',
    borderBottomWidth: 7,
    backgroundColor: '#59593E',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  backGround: {
    backgroundColor: 'transparent',
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 50,
    borderWidth: 4,
    backgroundColor: 'black',
    borderColor: '#182120',
    marginTop: 13,
    marginRight: 10,
  },
});

const text = StyleSheet.create(allText as any);

const weaponMenu = StyleSheet.create(dropDown as any);
