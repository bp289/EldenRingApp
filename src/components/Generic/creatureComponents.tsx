import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {ListItemType} from '../../types/pages';
import LinearGradient from 'react-native-linear-gradient';

interface ItemCardProps {
  item: ListItemType;
  onNavigation: (item: ListItemType) => void;
}

export function CreatureCard({onNavigation, item}: ItemCardProps): JSX.Element {
  return (
    <TouchableOpacity
      style={styles.thumbnailContainer}
      onPress={() => {
        onNavigation(item);
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 15,
  },
  thumbnail: {
    height: 100,
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  thumbnailContainer: {
    backgroundColor: '#050300',
    margin: 10,
    borderBottomWidth: 5,
    borderBottomColor: '#F9DF99',
    borderRadius: 9,
  },
  header: {
    fontFamily: 'Raleway',
    fontSize: 45,
    color: '#F9DF99',
    fontWeight: '500',
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  textStyle: {
    fontFamily: 'Raleway',
    fontSize: 20,
    color: '#F9DF99',
    marginTop: 20,
    marginLeft: 10,
  },
  linearGradient: {
    flex: 1,
    height: 100,
  },
  imageBackground: {
    height: 200,
  },
  backGround: {
    backgroundColor: '#050300',
    height: 800,
  },
  titleLine: {
    backgroundColor: '#F9DF99',
    height: 2,
    width: 90,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
