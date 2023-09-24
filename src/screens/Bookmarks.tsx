import React, {useContext, useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';

import MMKVContext, {useBookMarks} from '../contexts/Storage';
import {TopTitle} from '../components/Generic/List';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {allText} from '../styles/Text';

import {capitalizeFirstLetter} from '../utils/helpers';
import {TabParams} from '../../App';
type Props = BottomTabScreenProps<TabParams, 'BookMarks'>;

export default function BookMarks({navigation}: Props): JSX.Element {
  const [bookMarks, updateStorage] = useBookMarks();

  return (
    <View style={styles.backGround}>
      <FlatList
        data={bookMarks}
        ListHeaderComponent={<TopTitle title="Bookmarks" />}
        renderItem={({item}) => (
          <>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home', {
                  screen: `${capitalizeFirstLetter(item.__typename)}Info`,
                  params: {
                    id: item.id,
                    name: item.name,
                    image: item.image,
                  },
                });
              }}>
              <View>
                <Text style={text.text}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
}

const text = StyleSheet.create(allText as any);

const styles = StyleSheet.create({
  input: {
    width: '60%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#F9DF99',
    borderColor: '#59593E',
  },
  backGround: {backgroundColor: 'black', height: '100%'},
  searchButton: {
    color: '#F9DF99',
    fontFamily: 'Raleway',
  },
  searchButtonOuter: {
    width: 100,
    borderRadius: 5,
    height: 30,
    margin: 10,
    backgroundColor: '#59593E',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInputs: {
    flex: 1,
    flexDirection: 'row',
  },
  headerMargin: {
    marginTop: 20,
    height: 50,
  },
});
