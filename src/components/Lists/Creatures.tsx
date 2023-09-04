import React, {useMemo} from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  SectionList,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {useQuery} from '@apollo/client';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../types/Pages';

import {creatures} from '../../styles/creatureStyle';
import {Spinner} from '../Spinner';
import {CreaturesQuery, CreaturesQueryVariables} from '../../types/graphql';
import {GET_CREATURES} from '../../GraphQL/Creatures';
import {sortData, Section, SectionItem} from '../../utils/sortdata';

type Props = NativeStackScreenProps<HomeStackParams, 'Creatures'>;

export default function Creatures({navigation}: Props): JSX.Element {
  const {loading, error, data} = useQuery<
    CreaturesQuery,
    CreaturesQueryVariables
  >(GET_CREATURES);

  const creatureData = useMemo(() => {
    return data ? data?.creature : [];
  }, [data]);

  const sections = useMemo(() => {
    return creatureData
      ? sortData(creatureData as SectionItem[])
      : ([] as Array<Section>);
  }, [creatureData]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  return (
    <View style={styles.backGround}>
      <SectionList
        sections={sections}
        ListHeaderComponent={
          <ImageBackground
            style={styles.imageBackground}
            source={require('../../../assets/images/Creatures.jpeg')}>
            <LinearGradient
              colors={['transparent', '#050300']}
              style={styles.linearGradient}>
              <View style={styles.titleContainer}>
                <View style={styles.titleLine} />
                <Text style={styles.header}>Creatures </Text>
                <View style={styles.titleLine} />
              </View>
            </LinearGradient>
          </ImageBackground>
        }
        renderItem={({item}) => (
          <>
            {item?.image && (
              <TouchableOpacity
                style={styles.thumbnailContainer}
                onPress={() => {
                  navigation.navigate('CreaturesInfo', {
                    name: item?.name || '',
                    id: item?.id || '',
                    image: item?.image || '',
                  });
                }}>
                <ImageBackground
                  blurRadius={2}
                  borderRadius={6}
                  style={styles.thumbnail}
                  source={{
                    uri: item.image,
                  }}>
                  <LinearGradient
                    end={{x: 0.0, y: 1.0}}
                    start={{x: 0.5, y: 2.0}}
                    colors={['transparent', '#050300']}
                    style={styles.linearGradient}>
                    <Text style={styles.textStyle}>{item.name}</Text>
                  </LinearGradient>
                </ImageBackground>
              </TouchableOpacity>
            )}
          </>
        )}
        renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create(creatures);
