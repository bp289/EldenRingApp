import React, {useMemo} from 'react';
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {Spinner} from '../Spinner';
import {useQuery} from '@apollo/client';
import LinearGradient from 'react-native-linear-gradient';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../types/pages';
import {GET_BOSS_DETAILS} from '../../GraphQL/Bosses';
import {GET_LOCATION_IMAGE_BY_NAME} from '../../GraphQL/Locations';

import {
  LocationImageByNameQuery,
  LocationImageByNameQueryVariables,
} from '../../types/graphql';
import {BossDetailsQuery, BossDetailsQueryVariables} from '../../types/graphql';

const WIKI_URL = (location: string): string =>
  `https://eldenring.wiki.fextralife.com/Elden+Ring+Wiki#gsc.tab=0&gsc.q=${location}&gsc.sort=`;
interface LocationImageProps {
  locationName: string;
}
type Props = NativeStackScreenProps<HomeStackParams, 'BossInfo'>;

function removeComma(name: string): string {
  return name.includes(',') ? name.split(',')[0] : name;
}

function LocationImage({locationName}: LocationImageProps): JSX.Element {
  const name = removeComma(locationName);
  const {loading, error, data} = useQuery<
    LocationImageByNameQuery,
    LocationImageByNameQueryVariables
  >(GET_LOCATION_IMAGE_BY_NAME, {
    variables: {
      name,
    },
  });

  const image = useMemo(() => {
    return data?.location![0]?.image || '';
  }, [data]);

  if (loading) {
    return <ActivityIndicator size="large" color="#655d17" />;
  }
  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  return (
    <>
      {image ? (
        <ImageBackground
          style={styles.location}
          source={{
            uri: image,
          }}>
          <Text style={styles.locationText}>
            {name}{' '}
            <Image
              style={styles.icons}
              source={require('../../../assets/images/icons/Location.png')}
            />
          </Text>
        </ImageBackground>
      ) : (
        <View style={styles.locationFallback}>
          <Text style={styles.rest}>
            {name}
            <Image
              style={styles.icons}
              source={require('../../../assets/images/icons/Location.png')}
            />
          </Text>
          <Text style={styles.rest}>
            Unfortunately there is no further data available for this location.
            You can refer here for further information: (will link to webview)
          </Text>
        </View>
      )}
    </>
  );
}

export default function BossInfo({navigation, route}: Props): JSX.Element {
  const {id, name, image} = route.params;

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

  return (
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

      <Text style={styles.header}>{name}</Text>
      <View style={styles.divider} />

      <Text style={styles.rest}>{data?.getBoss.description}</Text>
      <View style={styles.titleContainer}>
        <View style={styles.titleLine} />
        <Text style={styles.subHeading}>Location</Text>
        <View style={styles.titleLine} />
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log('navigating');
        }}>
        <LocationImage locationName={data?.getBoss.location || ''} />
      </TouchableOpacity>
      <Text style={styles.rest}>Region - {data?.getBoss.region}</Text>

      <View style={styles.titleContainer}>
        <View style={styles.titleLine} />
        <Text style={styles.subHeading}>Stats & Details </Text>
        <View style={styles.titleLine} />
      </View>
      <View style={styles.stats}>
        <View>
          <Text style={styles.subHeading2}> Drops</Text>
          {drops.map(drop => {
            const number = drops.indexOf(drop) + 1;
            return (
              <Text style={styles.list}>
                {number}. {drop}
              </Text>
            );
          })}
        </View>
        <View>
          <Text style={styles.subHeading2}>Health Points</Text>
          <Text style={styles.list}>{data?.getBoss.healthPoints}</Text>
        </View>
      </View>
    </ScrollView>
  );
  // }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#050300',
  },
  thumbnail: {
    height: 400,
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  header: {
    fontFamily: 'Raleway',
    fontSize: 45,
    color: '#F9DF99',
    fontWeight: '500',
    marginRight: 'auto',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  subHeading: {
    fontFamily: 'Raleway',
    fontSize: 25,
    color: '#F9DF99',
    fontWeight: '500',
  },
  subHeading2: {
    fontFamily: 'Raleway',
    fontSize: 20,
    marginLeft: 15,
    color: '#F9DF99',
    fontWeight: '500',
  },
  rest: {
    fontFamily: 'Raleway',
    fontSize: 20,
    color: '#F9DF99',
    fontWeight: '300',
    marginRight: 30,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  location: {
    height: 200,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    resizeMode: 'cover',
  },
  locationFallback: {
    width: 350,
    borderWidth: 1,
    borderColor: '#59593E',
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  locationText: {
    fontFamily: 'Raleway',
    fontSize: 20,
    color: '#F9DF99',
    fontWeight: '300',
    marginRight: 5,
    marginBottom: 5,
    marginTop: 20,
  },
  list: {
    fontFamily: 'Raleway',
    fontSize: 20,
    color: '#F9DF99',
    fontWeight: '300',
    marginRight: 30,
    marginLeft: 20,
    marginTop: 5,
  },
  linearGradient: {
    flex: 1,
  },
  divider: {
    backgroundColor: '#59593E',
    height: 3,
    width: 'auto',
  },
  stats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 200,
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 65,
    marginRight: 'auto',
  },
  titleLine: {
    backgroundColor: '#59593E',
    height: 2,
    alighSelf: 'stretch',
    width: 90,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icons: {
    height: 23,
    width: 23,
  },
});
