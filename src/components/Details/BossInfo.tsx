import React, {useMemo} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {useQuery} from '@apollo/client';
import LinearGradient from 'react-native-linear-gradient';

import {Spinner} from '../Spinner';
import LocationImage from '../Image';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../types/pages';
import {GET_BOSS_DETAILS} from '../../GraphQL/Bosses';

import {creaturesInfo} from '../../styles/creatureStyle';

import {infoText} from '../../styles/Text';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {BossDetailsQuery, BossDetailsQueryVariables} from '../../types/graphql';
import {useBookMarks} from '../../contexts/Storage';
import {isInArray} from '../../utils/sortdata';

import {ListItemType} from '../../types/pages';
import {AddBookMark} from '../Generic/ItemComponents';
type Props = NativeStackScreenProps<HomeStackParams, 'BossInfo'>;

export default function BossInfo({navigation, route}: Props): JSX.Element {
  const {id, name, image} = route.params;
  const [bookMarks, setBookMarks] = useBookMarks();

  const {loading, error, data} = useQuery<
    BossDetailsQuery,
    BossDetailsQueryVariables
  >(GET_BOSS_DETAILS, {variables: {id}});

  const drops = useMemo(() => {
    return data?.getBoss.drops || [];
  }, [data]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  function handleStorage(page: ListItemType) {
    const prev = bookMarks;
    if (!prev) {
      const pageArr = [page];
      setBookMarks(pageArr);
      Alert.alert('Succesfully set bookmarks');
    } else {
      const prevArr = [...prev];

      if (isInArray(prevArr, page)) {
        Alert.alert('Already Exists In bookmarks');
      } else {
        prevArr.push(page);
        setBookMarks(prevArr);
        Alert.alert('Succesfully added bookmark!');
      }
    }
  }

  return (
    <>
      <AddBookMark
        onSetStorage={handleStorage}
        page={{id, name, image, __typename: 'Boss'}}
      />
      <TouchableOpacity
        style={styles.bookmark}
        onPress={() => {
          handleStorage({id, name, image, __typename: 'Boss'});
        }}>
        <Text>
          <Ionicons name="add-circle-outline" size={35} color="#F2D16C" />
        </Text>
      </TouchableOpacity>
      <ScrollView style={styles.container}>
        <ImageBackground
          style={styles.thumbnail}
          source={{
            uri: image,
          }}>
          <LinearGradient
            colors={['transparent', '#050300']}
            style={styles.linearGradient}
          />
        </ImageBackground>

        <Text style={text.header}>{name}</Text>
        <View style={styles.divider} />

        <Text style={text.main}>{data?.getBoss.description}</Text>
        <View style={styles.titleContainer}>
          <View style={styles.titleLine} />
          <Text style={text.subHeading}>Location</Text>
          <View style={styles.titleLine} />
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log('navigating');
          }}>
          <LocationImage locationName={data?.getBoss.location || ''} />
        </TouchableOpacity>
        <Text style={text.main}>Region - {data?.getBoss.region}</Text>

        <View style={styles.titleContainer}>
          <View style={styles.titleLine} />
          <Text style={text.subHeading}>Stats & Details </Text>
          <View style={styles.titleLine} />
        </View>
        <View style={styles.stats}>
          <View>
            <Text style={text.subHeading2}> Drops </Text>
            {drops.map((drop, index) => {
              const number = index + 1;
              return (
                <Text key={`${drop}-${index}`} style={text.list}>
                  {number}. {drop}
                </Text>
              );
            })}
          </View>
          <View>
            <Text style={text.subHeading2}>Health Points</Text>
            <Text style={text.list}>{data?.getBoss.healthPoints}</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
  // }
}

const styles = StyleSheet.create(creaturesInfo);
const text = StyleSheet.create(infoText);
