import React, {useMemo} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_CLASSES} from '../../GraphQL/Classes';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../types/Pages';

import {Spinner} from '../Spinner';
import {ClassesQuery, ClassesQueryVariables} from '../../types/graphql';

type Props = NativeStackScreenProps<HomeStackParams, 'Classes'>;

export default function Classes({navigation}: Props): JSX.Element {
  const {loading, error, data} = useQuery<ClassesQuery, ClassesQueryVariables>(
    GET_CLASSES,
  );

  const {classData} = useMemo(() => {
    return data ? {classData: data.class} : {classData: undefined};
  }, [data]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  return (
    <FlatList
      style={styles.container}
      data={classData}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ClassInfo', {
              name: item?.name || '',
              id: item?.id || '',
              image: item?.id || '',
            });
          }}>
          {item?.image && (
            <ImageBackground
              blurRadius={2}
              style={styles.thumbnail}
              source={{
                uri: item.image,
              }}>
              <Text style={styles.textStyle}>{item.name}</Text>
            </ImageBackground>
          )}
        </TouchableOpacity>
      )}
      keyExtractor={item => item?.id || ''}
    />
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
