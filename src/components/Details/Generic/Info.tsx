import React from 'react';
import {ScrollView, Text, Image, StyleSheet, View} from 'react-native';

import {weapons} from '../../../styles/weaponStyle';

import {infoText} from '../../../styles/Text';
type AttributeProps = {
  title: string;
  statData: attribute[];
};

type TextProps = {
  textData: string;
};

interface ScalingProps {
  title: string;
  statData: scaling[];
}

interface attribute {
  name: string;
  amount: number;
}
interface scaling {
  name: string;
  scaling: number;
}

export function Description({textData}: TextProps): JSX.Element {
  return (
    <>
      <Text style={text.main}>{textData}</Text>
    </>
  );
}

export function SubHeading({textData}: TextProps): JSX.Element {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.titleLine} />
      <Text style={text.subHeading}>{textData}</Text>
      <View style={styles.titleLine} />
    </View>
  );
}

export function AttributeStat({title, statData}: AttributeProps): JSX.Element {
  return (
    <View>
      <Text style={text.subHeading2}>{title}</Text>
      {statData.map(item => {
        return (
          <Text style={text.list}>
            {item!.name}: {item!.amount}
          </Text>
        );
      })}
    </View>
  );
}

export function ScalingStat({title, statData}: ScalingProps): JSX.Element {
  return (
    <View>
      <Text style={text.subHeading2}>{title}</Text>
      {statData.map(item => {
        return (
          <Text style={text.list}>
            {item!.name}: {item!.scaling}
          </Text>
        );
      })}
    </View>
  );
}

export function StatRow({children}: React.PropsWithChildren<{}>): JSX.Element {
  return <View style={styles.statsInner}>{children}</View>;
}

export function Stats({children}: React.PropsWithChildren<{}>): JSX.Element {
  return <View style={styles.stats}>{children}</View>;
}

const styles = StyleSheet.create(weapons);

const text = StyleSheet.create(infoText);
