import * as React from 'react';
import {Text, View} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_BOSS} from '../GraphQL/queries';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParams} from '../screens/Home';

type Props = NativeStackScreenProps<HomeStackParams, 'Bosses'>;

export default function Bosses({navigation}: Props): JSX.Element {
  const {loading, error, data} = useQuery(GET_BOSS);

  if (loading) {
    return <Text>'Loading...'</Text>;
  }
  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
}
