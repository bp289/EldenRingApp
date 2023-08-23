import * as React from 'react';
import {Text, View} from 'react-native';

// type Props = NativeStackScreenProps<StackParams, 'Home'>;

export default function Home(): JSX.Element {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
