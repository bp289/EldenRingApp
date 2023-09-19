import React from 'react';

import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import {ListItemType} from '../../types/pages';
import LinearGradient from 'react-native-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown';

interface DropDownProps {
  title: string;
  categories: string[];
  setCat: React.Dispatch<React.SetStateAction<string>>;
  defaultText: string;
}

interface ItemCardProps {
  item: ListItemType;
  onNavigation: (item: ListItemType) => void;
}

export function DropDown({
  title,
  categories,
  setCat,
  defaultText,
}: DropDownProps): JSX.Element {
  return (
    <LinearGradient
      colors={['transparent', '#050300']}
      style={text.linearGradient}>
      <View style={text.titleContainer}>
        <View style={text.titleLine} />
        <Text style={text.header}>{title} </Text>
        <View style={text.titleLine} />
      </View>

      <SelectDropdown
        data={categories}
        onSelect={selectedItem => {
          setCat(selectedItem);
        }}
        buttonStyle={style.main}
        buttonTextStyle={text.dropDown}
        defaultButtonText={defaultText}
        buttonTextAfterSelection={selectedItem => {
          return selectedItem;
        }}
        renderDropdownIcon={isOpened => {
          return (
            <>
              <Image
                style={isOpened ? style.chevronOpen : style.chevronClosed}
                source={require('../../../assets/images/icons/chevron.png')}
              />
              <Text style={text.dropDown}>Weapon Type :</Text>
            </>
          );
        }}
        dropdownIconPosition={'left'}
        rowStyle={style.rowStyle}
        rowTextStyle={text.dropDownRow}
      />
    </LinearGradient>
  );
}

export function ItemCard({onNavigation, item}: ItemCardProps): JSX.Element {
  return (
    <TouchableOpacity
      onPress={() => {
        onNavigation(item);
      }}>
      <View style={style.thumbnail}>
        <Text style={text.text}>{item.name}</Text>
        <Image
          style={style.image}
          source={{
            uri: item.image,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

export function BackDrop(): JSX.Element {
  return <View style={style.backGround} />;
}

const text = StyleSheet.create({
  header: {
    fontFamily: 'Raleway',
    fontSize: 45,
    color: '#F9DF99',
    fontWeight: '500',
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontFamily: 'Raleway',
    fontSize: 20,
    color: '#F9DF99',
    marginTop: 20,
    marginLeft: 10,
  },
  titleLine: {
    backgroundColor: '#F9DF99',
    height: 2,
    width: 90,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
    height: 100,
  },
  dropDown: {
    fontFamily: 'Raleway',
    fontSize: 20,
    marginLeft: 10,
    color: '#F9DF99',
    textAlign: 'right',
  },
  dropDownRow: {
    fontFamily: 'Raleway',
    fontSize: 20,
    marginLeft: 10,
    color: '#F9DF99',
    textAlign: 'center',
  },
});

const style = StyleSheet.create({
  backGround: {
    backgroundColor: 'transparent',
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
  main: {
    width: '95%',
    backgroundColor: '#182120',
    margin: 10,
    borderBottomWidth: 5,
    borderBottomColor: '#59593E',
    borderRadius: 9,
  },
  chevronClosed: {
    marginLeft: 10,
    height: 23,
    width: 23,
  },
  chevronOpen: {
    marginLeft: 10,
    height: 23,
    width: 23,
    transform: [{rotate: '90deg'}],
  },
  rowStyle: {backgroundColor: '#182120', borderBottomColor: '#59593E'},
});
