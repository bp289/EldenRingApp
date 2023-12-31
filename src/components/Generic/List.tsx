import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  title: string;
}
export function TopTitle({title}: Props): JSX.Element {
  return (
    <LinearGradient
      colors={['transparent', '#050300']}
      style={text.linearGradient}>
      <View style={text.titleContainer}>
        <View style={text.titleLine} />
        <Text style={text.header}>{title} </Text>
        <View style={text.titleLine} />
      </View>
    </LinearGradient>
  );
}

const text = StyleSheet.create({
  header: {
    fontFamily: 'Raleway',
    fontSize: 45,
    color: '#F9DF99',
    fontWeight: '500',
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontFamily: 'Raleway',
    fontSize: 20,
    color: '#F9DF99',
    marginTop: 20,
    marginLeft: 10,
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
  linearGradient: {
    flex: 1,
    height: 100,
  },
});
