import React, {useMemo} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_ARMORS} from '../../GraphQL/Armors';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParams} from '../../types/Pages';

import {Spinner} from '../Spinner';
import {ArmorsQuery, ArmorsQueryVariables} from '../../types/graphql';
import {ListItemType, categories} from '../../types/pages';

import groupCategories from '../../utils/groupCategories';
type Props = NativeStackScreenProps<HomeStackParams, 'Armors'>;

export default function Armors({navigation}: Props): JSX.Element {
  const [armorCategory, setArmorCategory] = useState();
  const {loading, error, data} = useQuery<ArmorsQuery, ArmorsQueryVariables>(
    GET_ARMORS,
  );

  const groupedArmors = useMemo(() => {
    if (data) {
      return groupCategories(data?.armor as Array<ListItemType>);
    } else {
      return {} as categories;
    }
  }, [data]);

  const categories = useMemo(() => {
    return Object.keys(groupedArmors);
  }, [groupedArmors]);

  const currentGroup = useMemo(() => {
    return groupedArmors[armorCategory];
  }, [groupedArmors, armorCategory]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Text>`Error! ${error.message}`</Text>;
  }

  return (
    <FlatList
      style={styles.container}
      data={currentGroup}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ArmorInfo', {
              name: item!.name!,
              id: item!.id,
              image: item!.id,
            });
          }}>
          {item?.image && (
            <ImageBackground
              blurRadius={2}
              style={styles.thumbnail}
              source={{
                uri: item.image,
              }}>
              <Text style={styles.textStyle}>{item.name}</Text>
            </ImageBackground>
          )}
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbnail: {
    height: 100,
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  textStyle: {
    fontFamily: 'Cormorant Garamond',
    fontSize: 20,
    color: '#F9DF99',
    marginTop: 40,
    marginLeft: 10,
  },
});
