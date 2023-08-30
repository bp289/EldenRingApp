import React, {useMemo} from 'react';
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Button,
  View,
  ImageBackground,
  Touchable,
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
        <>
          <Text style={styles.rest}>
            <Image
              style={styles.icons}
              source={require('../../../assets/images/icons/Location.png')}
            />
            {name}
          </Text>
          <Text style={styles.rest}>
            Unfortunately there is no further data available for this location.
            You can refer here for further information:
          </Text>
        </>
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
          colors={['transparent', '#0E3F39']}
          style={styles.linearGradient}
        />
      </ImageBackground>

      <Text style={styles.header}>{name}</Text>
      <View style={styles.divider} />
      <Text style={styles.rest}>{data?.getBoss.description}</Text>
      <Text style={styles.subheading}>Location </Text>

      <TouchableOpacity
        onPress={() => {
          console.log('navigating');
        }}>
        <LocationImage locationName={data?.getBoss.location || ''} />
      </TouchableOpacity>
      <Text style={styles.subheading}>Drops</Text>
      <View>
        {drops.map(drop => {
          const number = drops.indexOf(drop) + 1;
          return (
            <Text style={styles.list}>
              {number}. {drop}
            </Text>
          );
        })}
      </View>
      <Text>Region:</Text>
      <Text>{data?.getBoss.region}</Text>
      <Text>Health Points</Text>
      <Text>{data?.getBoss.healthPoints}</Text>
    </ScrollView>
  );
  // }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0E3F39',
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
  subheading: {
    fontFamily: 'Raleway',
    fontSize: 35,
    color: '#F9DF99',
    fontWeight: '500',
    marginRight: 'auto',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  rest: {
    fontFamily: 'Raleway',
    fontSize: 20,
    color: '#F9DF99',
    fontWeight: '300',
    marginRight: 30,
    marginLeft: 20,
    marginTop: 20,
  },
  location: {
    height: 200,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    resizeMode: 'cover',
  },
  locationFallback: {
    height: 300,
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
  },
  linearGradient: {
    flex: 1,
    borderRadius: 5,
  },
  divider: {
    backgroundColor: '#59593E',
    height: 3,
    width: 'auto',
  },
  icons: {
    height: 30,
    width: 30,
  },
});
