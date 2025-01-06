import {
  View,
  Text,
  Platform,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import SearchList from '../../../components/SearchList';
import Octicons from '@expo/vector-icons/Octicons';
import FilterSideBar from '../../../components/FilterSideBar';
import SecondaryNavbar from '../../../components/SecondaryNavbar';

const searchResult = () => {
  const { search, parameters } = useLocalSearchParams();
  const [filter, setfilter] = useState(false);
  const [searching, setsearching] = useState(true);
  const data = [
    {
      id: 1,
      name: 'Turtleneck Sweater',
      img: require('../../../assets/img/linen dress.png'),
      price: 100,
      ratings: 3,
      color: ['E7C0A7', '050302', 'EE6969'],
      size: ['L', 'M', 'S'],
      description:
        'Sportswear is no longer under culture, it is no longer indie or cobbled together as it once was. Sport is fashion today. The top is oversized in fit and style, may need to size down.',
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
            img: require('../../../assets/icon/jennifer comment.png'),
            statment:
              'I love it.  Awesome customer service!! Helped me out with adding an additional item to my order. Thanks again!',
            ratting: 5,
          },
          {
            name: 'Kelly Rihana',
            img: require('../../../assets/icon/kelly comment.png'),
            statment: `I'm very happy with order, It was delivered on and good quality. Recommended!`,
            ratting: 5,
          },
        ],
      },
    },
    {
      id: 2,
      name: 'Long Sleeve Dress',
      img: require('../../../assets/img/filted waist.png'),
      price: 200,
      ratings: 4,
      color: ['E7C0A7', '050302', 'EE6969'],
      size: ['L', 'M', 'S'],
      description:
        'Sportswear is no longer under culture, it is no longer indie or cobbled together as it once was. Sport is fashion today. The top is oversized in fit and style, may need to size down.',
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
            img: require('../../../assets/icon/jennifer comment.png'),
            statment:
              'I love it.  Awesome customer service!! Helped me out with adding an additional item to my order. Thanks again!',
            ratting: 5,
          },
          {
            name: 'Kelly Rihana',
            img: require('../../../assets/icon/kelly comment.png'),
            statment: `I'm very happy with order, It was delivered on and good quality. Recommended!`,
            ratting: 5,
          },
        ],
      },
    },
    {
      id: 3,
      name: 'sportwear Set',
      img: require('../../../assets/img/maxi dress.png'),
      price: 300,
      ratings: 5,
      color: ['E7C0A7', '050302', 'EE6969'],
      size: ['L', 'M', 'S'],
      description:
        'Sportswear is no longer under culture, it is no longer indie or cobbled together as it once was. Sport is fashion today. The top is oversized in fit and style, may need to size down.',
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
            img: require('../../../assets/icon/jennifer comment.png'),
            statment:
              'I love it.  Awesome customer service!! Helped me out with adding an additional item to my order. Thanks again!',
            ratting: 5,
          },
          {
            name: 'Kelly Rihana',
            img: require('../../../assets/icon/kelly comment.png'),
            statment: `I'm very happy with order, It was delivered on and good quality. Recommended!`,
            ratting: 5,
          },
        ],
      },
    },
    {
      id: 1,
      name: 'Turtleneck Sweater',
      img: require('../../../assets/img/linen dress.png'),
      price: 100,
      ratings: 5,
      color: ['E7C0A7', '050302', 'EE6969'],
      size: ['L', 'M', 'S'],
      description:
        'Sportswear is no longer under culture, it is no longer indie or cobbled together as it once was. Sport is fashion today. The top is oversized in fit and style, may need to size down.',
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
            img: require('../../../assets/icon/jennifer comment.png'),
            statment:
              'I love it.  Awesome customer service!! Helped me out with adding an additional item to my order. Thanks again!',
            ratting: 5,
          },
          {
            name: 'Kelly Rihana',
            img: require('../../../assets/icon/kelly comment.png'),
            statment: `I'm very happy with order, It was delivered on and good quality. Recommended!`,
            ratting: 5,
          },
        ],
      },
    },
    {
      id: 2,
      name: 'Long Sleeve Dress',
      img: require('../../../assets/img/filted waist.png'),
      price: 200,
      ratings: 4,
      color: ['E7C0A7', '050302', 'EE6969'],
      size: ['L', 'M', 'S'],
      description:
        'Sportswear is no longer under culture, it is no longer indie or cobbled together as it once was. Sport is fashion today. The top is oversized in fit and style, may need to size down.',
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
            img: require('../../../assets/icon/jennifer comment.png'),
            statment:
              'I love it.  Awesome customer service!! Helped me out with adding an additional item to my order. Thanks again!',
            ratting: 5,
          },
          {
            name: 'Kelly Rihana',
            img: require('../../../assets/icon/kelly comment.png'),
            statment: `I'm very happy with order, It was delivered on and good quality. Recommended!`,
            ratting: 5,
          },
        ],
      },
    },
    {
      id: 3,
      name: 'sportwear Set',
      img: require('../../../assets/img/maxi dress.png'),
      price: 300,
      ratings: 5,
      color: ['E7C0A7', '050302', 'EE6969'],
      size: ['L', 'M', 'S'],
      description:
        'Sportswear is no longer under culture, it is no longer indie or cobbled together as it once was. Sport is fashion today. The top is oversized in fit and style, may need to size down.',
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
            img: require('../../../assets/icon/jennifer comment.png'),
            statment:
              'I love it.  Awesome customer service!! Helped me out with adding an additional item to my order. Thanks again!',
            ratting: 5,
          },
          {
            name: 'Kelly Rihana',
            img: require('../../../assets/icon/kelly comment.png'),
            statment: `I'm very happy with order, It was delivered on and good quality. Recommended!`,
            ratting: 5,
          },
        ],
      },
    },
  ];
  const model = () => {
    setfilter(!filter);
  };
  useEffect(() => {
    setTimeout(() => {
      setsearching(false);
    }, 2000);
  }, []);

  return (
    <>
      <SecondaryNavbar centered={true} title={search} />

      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingTop:
            Platform.OS === 'android' ? StatusBar.currentHeight + 50 : 50,
          paddingBottom: 100,
        }}>
        {searching ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <ActivityIndicator color={'black'} size={30} />
            <Text style={{ fontSize: 15, color: 'rgba(0,0,0,0.3)' }}>
              Searching for {search} results
            </Text>
          </View>
        ) : (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <Text style={{ fontSize: 20, fontWeight: '900' }}>
                Found {'\n'}
                {data.length} Results
              </Text>
              <TouchableOpacity
                onPress={model}
                style={{
                  width: 110,
                  height: 50,
                  borderRadius: 30,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3,
                  elevation: 5,
                  backgroundColor: 'white',
                  paddingHorizontal: 5,
                }}>
                <Text>Filter</Text>
                <Octicons name='triangle-down' size={20} color='black' />
              </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
              <SearchList data={data} />
            </View>
          </>
        )}
      </View>
      {filter && <FilterSideBar toggle={model} />}
    </>
  );
};

export default searchResult;
