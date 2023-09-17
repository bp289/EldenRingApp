import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  Image,
  Button,
  FlatList,
} from 'react-native';
import {useQuery} from '@apollo/client';
import SelectDropdown from 'react-native-select-dropdown';
import {Spinner} from '../components/Spinner';
import {SEARCH_DATA} from '../GraphQL/Search';
import {SearchType} from '../types/pages';
const categories = ['Locations', 'Bosses', 'Weapons', 'Creatures'];

import {SearchDataQuery, SearchDataQueryVariables} from '../types/graphql';
import {dropDown} from '../styles/dropDown';
import {allText} from '../styles/Text';

const removeSAndLowerCase = (input: string): string => {
  if (input.endsWith('es')) {
    return input.slice(0, -2).toLowerCase();
  } else if (input.endsWith('s')) {
    return input.slice(0, -1).toLowerCase();
  } else {
    return input.toLowerCase();
  }
};

const capitalizeFirstLetter = (inputString: string): string => {
  return inputString.length
    ? inputString.charAt(0).toUpperCase() + inputString.slice(1)
    : inputString;
};

export default function Search({navigation}): JSX.Element {
  const [search, setSearch] = useState('');
  const [searchCategory, setSearchCategory] = useState('Bosses');
  const [results, setResults] = useState([
    {name: '', id: '', image: '', __typename: ''},
  ]);

  const {loading, error, data} = useQuery<
    SearchDataQuery,
    SearchDataQueryVariables
  >(SEARCH_DATA);

  function handleSearch(): void {
    const category = removeSAndLowerCase(searchCategory);

    const dataToSearch: SearchType[] = data![
      category as keyof SearchDataQuery
    ] as SearchType[];

    console.log(dataToSearch);
    setResults(
      dataToSearch?.filter(item => {
        if (item.name.toLowerCase().includes(search.toLowerCase())) {
          return data;
        }
      }),
    );
  }
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  return (
    <View style={styles.backGround}>
      {results && (
        <FlatList
          data={results}
          ListHeaderComponent={
            <>
              <SelectDropdown
                buttonStyle={searchMenu.main}
                buttonTextStyle={text.dropDown}
                defaultButtonText={'Bosses'}
                data={categories}
                onSelect={selectedItem => {
                  setSearchCategory(selectedItem);
                }}
                renderDropdownIcon={isOpened => {
                  return (
                    <View>
                      <Image
                        style={
                          isOpened
                            ? searchMenu.chevronOpen
                            : searchMenu.chevronClosed
                        }
                        source={require('../../assets/images/icons/chevron.png')}
                      />
                      <Text style={text.dropDown}>Category</Text>
                    </View>
                  );
                }}
                dropdownIconPosition={'left'}
              />
              <TextInput style={styles.input} onChangeText={setSearch} />
              <TouchableOpacity onPress={() => handleSearch()}>
                <Text style={{color: 'white'}}>Search</Text>
              </TouchableOpacity>
            </>
          }
          renderItem={({item}) => (
            <>
              <TouchableOpacity
                onPress={() => {
                  console.log(`${capitalizeFirstLetter(item.__typename)}Info`);
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
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#F9DF99',
    borderColor: '#59593E',
  },
  backGround: {backgroundColor: 'black', height: '100%'},
});

const text = StyleSheet.create(allText as any);

const searchMenu = StyleSheet.create(dropDown as any);
