import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import {useBookMarks} from '../contexts/Storage';

import LinearGradient from 'react-native-linear-gradient';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {capitalizeFirstLetter} from '../utils/helpers';
import {TabParams} from '../../App';

import {ListItemType} from '../types/pages';

type Props = BottomTabScreenProps<TabParams, 'BookMarks'>;

const Header = (): JSX.Element => {
  return (
    <>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/images/Bookmarks.jpeg')}>
        <LinearGradient
          colors={['transparent', '#050300']}
          style={styles.linearGradient}>
          <Text style={text.header}> Bookmarks</Text>
        </LinearGradient>
      </ImageBackground>
    </>
  );
};

export default function BookMarks({navigation}: Props): JSX.Element {
  const [bookMarks, setBookMarks] = useBookMarks();

  function handleStorage(page: ListItemType) {
    const newBookMarks = [...bookMarks].filter(
      (obj: ListItemType) => obj.id !== page.id,
    );

    setBookMarks(newBookMarks);
  }
  if (!bookMarks.length) {
    return (
      <View style={styles.backGround}>
        <Header />
        <Text style={text.noBookmarks}>*cricket noises* </Text>
        <Text style={text.altText}>(you dont have any bookmarks) </Text>
      </View>
    );
  }

  return (
    <View style={styles.backGround}>
      <FlatList
        data={bookMarks}
        ListHeaderComponent={<Header />}
        renderItem={({item}) => (
          <>
            <View style={styles.container}>
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
                <View style={styles.containerInner}>
                  <Ionicons
                    style={styles.arrow}
                    name="arrow-forward-outline"
                    size={20}
                    color="#F2D16C"
                  />
                  <Text style={text.text}>{item.name}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.trash}
                onPress={() => {
                  handleStorage(item);
                }}>
                <Text>
                  <Ionicons name="close-circle" size={30} color="#F53939" />
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      />
    </View>
  );
}

const text = StyleSheet.create({
  header: {
    fontFamily: 'Raleway',
    fontSize: 45,
    color: '#F9DF99',
    fontWeight: '500',
    marginTop: 70,
    marginBottom: 20,
  },
  text: {
    fontFamily: 'Raleway',
    fontSize: 20,
    color: '#F9DF99',
    marginTop: 20,
    marginLeft: 10,
  },
  altText: {
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontSize: 20,
    marginTop: 20,
    color: '#F9DF99',
  },
  noBookmarks: {
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontSize: 40,
    color: '#F9DF99',
  },
});

const styles = StyleSheet.create({
  imageBackground: {
    height: 200,
  },
  linearGradient: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  containerInner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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
  trash: {
    marginTop: 15,
  },
  arrow: {
    marginTop: 20,
  },
});
