import React, {useMemo} from 'react';

import {useQuery} from '@apollo/client';
import {GET_LOCATION_IMAGE_BY_NAME} from '../GraphQL/Locations';
import {creatures} from '../styles/creatureStyle';
import {
  LocationImageByNameQuery,
  LocationImageByNameQueryVariables,
} from '../types/graphql';

import {
  Text,
  Image,
  StyleSheet,
  View,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

import {infoText} from '../styles/Text';

interface LocationImageProps {
  locationName: string;
}

const WIKI_URL = (location: string): string =>
  `https://eldenring.wiki.fextralife.com/Elden+Ring+Wiki#gsc.tab=0&gsc.q=${location}&gsc.sort=`;

function removeComma(name: string): string {
  return name.includes(',') ? name.split(',')[0] : name;
}

export default function LocationImage({
  locationName,
}: LocationImageProps): JSX.Element {
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
          <Text style={text.locationText}>
            {name}{' '}
            <Image
              style={styles.icons}
              source={require('../../assets/images/icons/Location.png')}
            />
          </Text>
        </ImageBackground>
      ) : (
        <View style={styles.locationFallback}>
          <Text style={text.main}>
            {name}
            <Image
              style={styles.icons}
              source={require('../../assets/images/icons/Location.png')}
            />
          </Text>
          <Text style={text.main}>
            Unfortunately there is no further data available for this location.
            You can refer here for further information: (will link to webview)
          </Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create(creatures);

const text = StyleSheet.create(infoText);
