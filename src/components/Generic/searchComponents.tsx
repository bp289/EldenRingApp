import React from 'react';

import {StyleSheet, Text, Image} from 'react-native';

import SelectDropdown from 'react-native-select-dropdown';
import {TopTitle} from './List';

interface DropDownProps {
  categories: string[];
  setCat: React.Dispatch<React.SetStateAction<string>>;
  defaultText: string;
}

export function DropDown({
  categories,
  setCat,
  defaultText,
}: DropDownProps): JSX.Element {
  return (
    <>
      <TopTitle title="Search" />
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
              <Text style={text.dropDown}>Search Category :</Text>
            </>
          );
        }}
        dropdownIconPosition={'left'}
        rowStyle={style.rowStyle}
        rowTextStyle={text.dropDownRow}
      />
    </>
  );
}

const text = StyleSheet.create({
  text: {
    fontFamily: 'Raleway',
    fontSize: 20,
    color: '#F9DF99',
    marginTop: 20,
    marginLeft: 10,
  },
  linearGradient: {
    flex: 1,
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
    marginLeft: 10,
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
