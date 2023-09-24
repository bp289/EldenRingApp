import React, {useMemo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SectionList,
} from 'react-native';

import {useQuery} from '@apollo/client';
import {GET_BOSS} from '../../GraphQL/Bosses';

import {creatures} from '../../styles/creatureStyle';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../types/Pages';

import {Spinner} from '../Spinner';
import {BossQuery, BossQueryVariables} from '../../types/graphql';
import {sortData, Section, SectionItem} from '../../utils/sortdata';
import {TopTitle} from '../Generic/List';

import {ListItemType} from '../../types/pages';
import {CreatureCard} from '../Generic/creatureComponents';

type Props = NativeStackScreenProps<HomeStackParams, 'Bosses'>;

export default function Bosses({navigation}: Props): JSX.Element {
  const {loading, error, data} = useQuery<BossQuery, BossQueryVariables>(
    GET_BOSS,
  );
  const bossData = useMemo(() => {
    return data ? data?.boss : [];
  }, [data]);

  const sections = useMemo(() => {
    return bossData
      ? sortData(bossData as Array<SectionItem>)
      : ([] as Array<Section>);
  }, [bossData]);

  const handleNavigation = (item: ListItemType): void => {
    navigation.navigate('BossInfo', {
      name: item!.name,
      id: item!.id,
      image: item!.image,
    });
  };

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }
  return (
    <View style={styles.backGround}>
      <SectionList
        sections={sections}
        ListHeaderComponent={
          <ImageBackground
            style={styles.imageBackground}
            source={require('../../../assets/images/Bosses.png')}>
            <TopTitle title="Bosses " />
          </ImageBackground>
        }
        renderItem={({item}) => (
          <>
            {item?.image && (
              <CreatureCard onNavigation={handleNavigation} item={item} />
            )}
          </>
        )}
        renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create(creatures);
