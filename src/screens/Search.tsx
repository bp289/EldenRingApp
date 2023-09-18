import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import {useQuery} from '@apollo/client';
import {Spinner} from '../components/Spinner';
import {SEARCH_DATA} from '../GraphQL/Search';
import {SearchType} from '../types/pages';
const categories = ['Locations', 'Bosses', 'Weapons', 'Creatures'];

import {SearchDataQuery, SearchDataQueryVariables} from '../types/graphql';
import {allText} from '../styles/Text';

import {TabParams} from '../../App';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {DropDown} from '../components/Generic/Items';

type Props = BottomTabScreenProps<TabParams, 'Search'>;

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

export default function Search({navigation}: Props): JSX.Element {
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
              <View style={styles.headerMargin} />
              <DropDown
                title="Search"
                defaultText="Bosses"
                setCat={setSearchCategory}
                categories={categories}
              />
              <View style={styles.searchInputs}>
                <TextInput style={styles.input} onChangeText={setSearch} />
                <TouchableOpacity onPress={() => handleSearch()}>
                  <View style={styles.searchButtonOuter}>
                    <Text style={styles.searchButton}>Search</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          }
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
      )}
    </View>
  );
}
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

const text = StyleSheet.create(allText as any);
