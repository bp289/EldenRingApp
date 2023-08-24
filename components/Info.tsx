import React, {useMemo} from 'react';
import {ScrollView, Text} from 'react-native';

import {useQuery} from '@apollo/client';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../screens/Home';
import {GET_INFO} from '../GraphQL/queries';

type Props = NativeStackScreenProps<HomeStackParams, 'InfoPage'>;

export default function Info({navigation, route}: Props): JSX.Element {
  const {id, type} = route.params;

  const {loading, error, data} = useQuery(GET_INFO(type, id));

  const entityInfo = useMemo(() => {
    return data ? data[type] : [];
  }, [data, type]);

  if (loading) {
    return <Text>'Loading...'</Text>;
  }
  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  return <ScrollView>{<Text> {JSON.stringify(entityInfo)}</Text>}</ScrollView>;
}
