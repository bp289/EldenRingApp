import React, {useContext} from 'react';
import {Text, View} from 'react-native';

import MMKVContext from '../contexts/Storage';

export default function BookMarks(): JSX.Element {
  const {storage} = useContext(MMKVContext);

  console.log(storage);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Bookmarks</Text>
    </View>
  );
}
