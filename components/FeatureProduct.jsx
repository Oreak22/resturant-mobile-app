import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const FeatureProduct = () => {
  const data = [
    {
      id: 11,
      name: 'Turtleneck Sweater',
      img: require('../assets/img/sweaters.png'),
      price: 100,
      ratings: '5',
      color: ['E7C0A7', '050302', 'EE6969'],
      size: ['L', 'M', 'S'],
      description:
        'Sportswear is no longer under culture, it is no longer indie or cobbled together as it once was. Sport is fashion today. The top is oversized in fit and style, may need to size down1.',
      reviews: {
        ratings: {
          s5: { num: 30, people: ['Jenifer Rose', 'Kelly Rihana'] },
          s4: { num: 12, people: ['Jenifer Rose', 'Kelly Rihana'] },
          s3: { num: 5, people: ['Jenifer Rose', 'Kelly Rihana'] },
          s2: { num: 2, people: ['Jenifer Rose', 'Kelly Rihana'] },
          s1: { num: 0, people: ['Jenifer Rose', 'Kelly Rihana'] },
        },
        comments: [
          {
            name: 'Jenifer Rose',
            img: require('../assets/icon/jennifer comment.png'),
            statment:
              'I love it.  Awesome customer service!! Helped me out with adding an additional item to my order. Thanks again!',
            ratting: 5,
          },
          {
            name: 'Kelly Rihana',
            img: require('../assets/icon/kelly comment.png'),
            statment: `I'm very happy with order, It was delivered on and good quality. Recommended!`,
            ratting: 5,
          },
        ],
      },
    },
    {
      id: 22,
      name: 'Long Sleeve Dress',
      img: require('../assets/img/long sleeve.png'),
      price: 200,
      ratings: '5',
      color: ['E7C0A7', '050302', 'EE6969'],
      size: ['L', 'M', 'S'],
      description:
        'Sportswear is no longer under culture, it is no longer indie or cobbled together as it once was. Sport is fashion today. The top is oversized in fit and style, may need to size down2.',
      reviews: {
        ratings: {
          s5: { num: 30, people: ['Jenifer Rose', 'Kelly Rihana'] },
          s4: { num: 12, people: ['Jenifer Rose', 'Kelly Rihana'] },
          s3: { num: 5, people: ['Jenifer Rose', 'Kelly Rihana'] },
          s2: { num: 2, people: ['Jenifer Rose', 'Kelly Rihana'] },
          s1: { num: 0, people: ['Jenifer Rose', 'Kelly Rihana'] },
        },
        comments: [
          {
            name: 'Jenifer Rose',
            img: require('../assets/icon/jennifer comment.png'),
            statment:
              'I love it.  Awesome customer service!! Helped me out with adding an additional item to my order. Thanks again!',
            ratting: 5,
          },
          {
            name: 'Kelly Rihana',
            img: require('../assets/icon/kelly comment.png'),
            statment: `I'm very happy with order, It was delivered on and good quality. Recommended!`,
            ratting: 5,
          },
        ],
      },
    },
    {
      id: 33,
      name: 'sportwear Set',
      img: require('../assets/img/sport wear.png'),
      price: 300,
      ratings: '5',
      color: ['E7C0A7', '050302', 'EE6969'],
      size: ['L', 'M', 'S'],
      description:
        'Sportswear is no longer under culture, it is no longer indie or cobbled together as it once was. Sport is fashion today. The top is oversized in fit and style, may need to size down9.',
      reviews: {
        ratings: {
          s5: { num: 30, people: ['Jenifer Rose', 'Kelly Rihana'] },
          s4: { num: 12, people: ['Jenifer Rose', 'Kelly Rihana'] },
          s3: { num: 5, people: ['Jenifer Rose', 'Kelly Rihana'] },
          s2: { num: 2, people: ['Jenifer Rose', 'Kelly Rihana'] },
          s1: { num: 0, people: ['Jenifer Rose', 'Kelly Rihana'] },
        },
        comments: [
          {
            name: 'Jenifer Rose',
            img: require('../assets/icon/jennifer comment.png'),
            statment:
              'I love it.  Awesome customer service!! Helped me out with adding an additional item to my order. Thanks again!',
            ratting: 5,
          },
          {
            name: 'Kelly Rihana',
            img: require('../assets/icon/kelly comment.png'),
            statment: `I'm very happy with order, It was delivered on and good quality. Recommended!`,
            ratting: 5,
          },
        ],
      },
    },
  ];
  const doller = '$';
  const renderItem = ({ item }) => {
    return (
      <Link
        href={`/product/${item.id}?details=${JSON.stringify(item)}`}
        style={styles.container}>
        <View style={styles.content}>
          <Image source={item.img} style={styles.img} resizeMode='contain' />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>
            {doller} {item.price}.00
          </Text>
        </View>
      </Link>
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    marginRight: 20,
  },
});

export default FeatureProduct;
