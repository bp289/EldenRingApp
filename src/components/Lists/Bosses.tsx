import React, {useMemo} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {useQuery} from '@apollo/client';
import {GET_BOSS} from '../../GraphQL/Bosses';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../types/Pages';

import {Spinner} from '../Spinner';
import {BossQuery, BossQueryVariables} from '../../types/graphql';

type Props = NativeStackScreenProps<HomeStackParams, 'Bosses'>;

export default function Bosses({navigation}: Props): JSX.Element {
  const {loading, error, data} = useQuery<BossQuery, BossQueryVariables>(
    GET_BOSS,
  );
  const boss = useMemo(() => {
    return data ? data?.boss : [];
  }, [data]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }
  return (
    <ScrollView style={styles.backGround}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/images/Background.png')}>
        <LinearGradient
          colors={['transparent', '#000']}
          style={styles.linearGradient}
        />
      </ImageBackground>
      <FlatList
        style={styles.container}
        data={boss}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BossInfo', {
                name: item?.name || '',
                id: item?.id || '',
                image: item?.image || '',
              });
            }}>
            {item?.image && (
              <ImageBackground
                borderRadius={10}
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 15,
  },
  thumbnail: {
    height: 100,
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  textStyle: {
    fontFamily: 'Raleway',
    fontSize: 20,
    color: '#F9DF99',
    marginTop: 40,
    marginLeft: 10,
  },
  linearGradient: {
    flex: 1,
    height: 100,
  },
  imageBackground: {
    height: 300,
  },
  backGround: {
    backgroundColor: '#000',
    height: 800,
  },
});
