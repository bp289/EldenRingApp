import * as React from 'react';
import {Text, View} from 'react-native';

// type Props = NativeStackScreenProps<StackParams, 'Search'>;

export default function Search(): JSX.Element {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Search Screen</Text>
    </View>
  );
}
