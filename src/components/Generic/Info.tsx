import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

type AttributeProps = {
  title: string;
  statData: attribute[];
};

type GenericRowItem = {
  title: string;
  description: string | number;
};

type TextProps = {
  textData: string;
};

interface ScalingProps {
  title: string;
  statData: scaling[];
}

interface attribute {
  __typename: string;
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

export function FillRowAttributeStat({
  title,
  statData,
}: AttributeProps): JSX.Element {
  return (
    <View style={styles.statsInner}>
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

export function FillRowScalingStat({
  title,
  statData,
}: ScalingProps): JSX.Element {
  return (
    <View style={styles.statsInner}>
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

export function RowItem({title, description}: GenericRowItem): JSX.Element {
  return (
    <View>
      <Text style={text.subHeading2}>{title}</Text>
      <Text style={text.list}>{description}</Text>
    </View>
  );
}

export function RowItemFill({title, description}: GenericRowItem): JSX.Element {
  return (
    <View style={styles.statsInner}>
      <Text style={text.subHeading2}>{title}</Text>
      <Text style={text.list}>{description}</Text>
    </View>
  );
}

export function StatRow({children}: React.PropsWithChildren<{}>): JSX.Element {
  return <View style={styles.statsInner}>{children}</View>;
}

export function Stats({children}: React.PropsWithChildren<{}>): JSX.Element {
  return <View style={styles.stats}>{children}</View>;
}
export function Divider(): JSX.Element {
  return <View style={styles.divider} />;
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  divider: {
    backgroundColor: '#D8D2B0',
    height: 3,
    width: 'auto',
  },
  stats: {
    flex: 1,
    alignItems: 'flex-start',
  },
  left: {
    marginBottom: 20,
    marginLeft: 70,
  },
  statsInner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 5,
  },
  titleLine: {
    backgroundColor: '#D8D2B0',
    height: 2,
    width: 90,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icons: {
    height: 23,
    width: 23,
  },
});

const text = StyleSheet.create({
  subHeading: {
    fontFamily: 'Raleway',
    fontSize: 25,
    color: '#F9DF99',
    fontWeight: '500',
  },
  subHeading2: {
    fontFamily: 'Raleway',
    fontSize: 20,
    marginLeft: 15,
    color: '#F9DF99',
    fontWeight: '500',
  },
  main: {
    fontFamily: 'Raleway',
    fontSize: 20,
    color: '#F9DF99',
    fontWeight: '300',
    marginRight: 30,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  locationText: {
    fontFamily: 'Raleway',
    fontSize: 20,
    color: '#F9DF99',
    fontWeight: '300',
    marginRight: 5,
    marginBottom: 5,
    marginTop: 20,
  },
  list: {
    fontFamily: 'Raleway',
    fontSize: 20,
    color: '#F9DF99',
    fontWeight: '300',
    marginRight: 30,
    marginLeft: 20,
    marginTop: 5,
  },
});
