import {sortData} from './src/utils/sortdata';

interface creature {
  __typename: string;
  id: string;
  image: string;
  name: string;
}
const data: Array<creature> = [
  {
    __typename: 'Creature',
    id: '17f6a3ceea8l0i6yrr9i9li6sityc',
    image:
      'https://eldenring.fanapis.com/images/creatures/17f6a3ceea8l0i6yrr9i9li6sityc.png',
    name: 'Arcane Sphere Of Faces',
  },
  {
    __typename: 'Creature',
    id: '17f6a0bda2cl0i6yrtkvf0vjp9puf',
    image:
      'https://eldenring.fanapis.com/images/creatures/17f6a0bda2cl0i6yrtkvf0vjp9puf.png',
    name: 'A - begins with A',
  },
  {
    __typename: 'Creature',
    id: '17f6a4a6036l0i6yrvd9spb0xhw8tg',
    image:
      'https://eldenring.fanapis.com/images/creatures/17f6a4a6036l0i6yrvd9spb0xhw8tg.png',
    name: 'B - begins with B',
  },
  {
    __typename: 'Creature',
    id: '17f6a47bf80l0i6ys0d6zu6xbqlwu2',
    image:
      'https://eldenring.fanapis.com/images/creatures/17f6a47bf80l0i6ys0d6zu6xbqlwu2.png',
    name: 'C - begins with c',
  },
  {
    __typename: 'Creature',
    id: '17f6a58d8d2l0i6ys2scc9vx91u6pp',
    image:
      'https://eldenring.fanapis.com/images/creatures/17f6a58d8d2l0i6ys2scc9vx91u6pp.png',
    name: 'D - begins with D',
  },
  {
    __typename: 'Creature',
    id: '17f6a170239l0i6ysg3xam4t0zopmn',
    image:
      'https://eldenring.fanapis.com/images/creatures/17f6a170239l0i6ysg3xam4t0zopmn.png',
    name: 'E begins with  E',
  },
];

const result = [
  {
    title: 'A',
    data: [
      {
        __typename: 'Creature',
        id: '17f6a3ceea8l0i6yrr9i9li6sityc',
        image:
          'https://eldenring.fanapis.com/images/creatures/17f6a3ceea8l0i6yrr9i9li6sityc.png',
        name: 'Arcane Sphere Of Faces',
      },
      {
        __typename: 'Creature',
        id: '17f6a0bda2cl0i6yrtkvf0vjp9puf',
        image:
          'https://eldenring.fanapis.com/images/creatures/17f6a0bda2cl0i6yrtkvf0vjp9puf.png',
        name: 'A - begins with A',
      },
    ],
  },
  {
    title: 'B',
    data: [
      {
        __typename: 'Creature',
        id: '17f6a4a6036l0i6yrvd9spb0xhw8tg',
        image:
          'https://eldenring.fanapis.com/images/creatures/17f6a4a6036l0i6yrvd9spb0xhw8tg.png',
        name: 'B - begins with B',
      },
    ],
  },
  {
    title: 'C',
    data: [
      {
        __typename: 'Creature',
        id: '17f6a47bf80l0i6ys0d6zu6xbqlwu2',
        image:
          'https://eldenring.fanapis.com/images/creatures/17f6a47bf80l0i6ys0d6zu6xbqlwu2.png',
        name: 'C - begins with c',
      },
    ],
  },
  {
    title: 'D',
    data: [
      {
        __typename: 'Creature',
        id: '17f6a58d8d2l0i6ys2scc9vx91u6pp',
        image:
          'https://eldenring.fanapis.com/images/creatures/17f6a58d8d2l0i6ys2scc9vx91u6pp.png',
        name: 'D - begins with D',
      },
    ],
  },
  {
    title: 'E',
    data: [
      {
        __typename: 'Creature',
        id: '17f6a170239l0i6ysg3xam4t0zopmn',
        image:
          'https://eldenring.fanapis.com/images/creatures/17f6a170239l0i6ysg3xam4t0zopmn.png',
        name: 'E begins with  E',
      },
    ],
  },
];

test('data is correct', () => {
  expect(sortData(data)).toEqual(result);
});
