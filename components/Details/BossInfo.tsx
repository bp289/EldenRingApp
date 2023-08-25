import React, {useMemo} from 'react';
import {ScrollView, Text} from 'react-native';

import {useQuery} from '@apollo/client';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../screens/Home';
import {GET_BOSS_DETAILS} from '../../GraphQL/Bosses';

type Props = NativeStackScreenProps<HomeStackParams, 'BossInfo'>;

export default function BossInfo({navigation, route}: Props): JSX.Element {
  const {id} = route.params;

  const {loading, error, data} = useQuery(GET_BOSS_DETAILS(id));

  const entityInfo = useMemo(() => {
    return data ? data : [];
  }, [data]);

  if (loading) {
    return <Text>'Loading...'</Text>;
  }
  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  return <ScrollView>{<Text> {JSON.stringify(entityInfo)}</Text>}</ScrollView>;
}
