import * as React from 'react';
import {Text, View} from 'react-native';

// type Props = NativeStackScreenProps<StackParams, 'BookMarks'>;

export default function BookMarks(): JSX.Element {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Bookmarks</Text>
    </View>
  );
}
