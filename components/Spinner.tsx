import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#655d17" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#102C2A',
  },
});
