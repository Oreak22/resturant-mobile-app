import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Ratings from './Ratings';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

const Reviews = ({ data }) => {
  const { ratings, comments } = data;
  const [seeMore, setSeeMore] = useState(false);
  const total = [
    ratings.s1.num,
    ratings.s2.num,
    ratings.s3.num,
    ratings.s4.num,
    ratings.s5.num,
  ];
  const scale = [5, 4, 3, 2, 1];
  //   const commentSection = () => (
  // for (let i = 0; i < !seeMore ? 1 : comments.length; i++) {
  //   const item = comments[i];

  //   );
  // }

  return (
    <View>
      {/* overview */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 35, fontWeight: '900' }}>
            {(
              (total.reduce((a, b) => a + b, 0) / (5 * Math.max(...total))) *
              5
            ).toFixed(2)}
          </Text>
          <Text> OUT OF 5</Text>
        </View>
        <View
          style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <Ratings item={5} size={25} />
          <Text style={{ marginRight: 10, marginTop: 10 }}>
            {total.reduce((a, b) => a + b, 0)} ratings
          </Text>
        </View>
      </View>
      {/* detailed */}
      <View style={{ marginVertical: 25, width: '100%' }}>
        {total.reverse().map((item, index) => (
          <View
            key={index}
            style={{
              marginVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '9%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{scale[index]}</Text>
              <Ionicons
                name='star-sharp'
                size={20}
                color='#508A7B'
                key={index}
                style={{ marginRight: 5 }}
              />
            </View>
            <View
              style={{
                width: '80%',
                backgroundColor: '#fafafa',
                height: 8,
                borderRadius: 20,
                overflow: 'hidden',
              }}>
              <View
                style={{
                  width: `${Math.round(
                    (item / total.reduce((a, b) => a + b, 0)) * 100
                  )}%`,
                  backgroundColor: '#508A7B',
                  borderRadius: 20,
                  height: '100%',
                }}></View>
            </View>

            <View
              style={{
                width: '10%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Text>
                {Math.round((item / total.reduce((a, b) => a + b, 0)) * 100)}%
              </Text>
            </View>
          </View>
        ))}
      </View>
      {/* comments */}
      <ScrollView>
        {comments.map((item, index) =>
          seeMore ? (
            <View style={{}} key={index}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={item.img}
                  style={styles.img}
                  resizeMode='cover'
                  resizeMethod='auto'
                />
                <View style={{ justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 22, fontWeight: '900' }}>
                    {item.name}
                  </Text>
                  <Ratings size={20} item={item.ratings} />
                </View>
              </View>
              <View style={{ paddingVertical: 15 }}>
                <Text style={{ lineHeight: 25 }}>{item.statment}</Text>
              </View>
            </View>
          ) : index >= 0 ? (
            <View style={{}} key={index}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={item.img}
                  style={styles.img}
                  resizeMode='cover'
                  resizeMethod='auto'
                />
                <View style={{ justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 22, fontWeight: '900' }}>
                    {item.name}
                  </Text>
                  <Ratings size={20} item={item.ratings} />
                </View>
              </View>
              <View style={{ paddingVertical: 15 }}>
                <Text style={{ lineHeight: 25 }}>{item.statment}</Text>
              </View>
            </View>
          ) : (
            <></>
          )
        )}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Text
            style={{ textAlign: 'right', paddingRight: 5 }}
            onPress={() => setSeeMore(!seeMore)}>
            See more
          </Text>
          <FontAwesome name={'angle-right'} size={20} color='black' />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  img: { width: 60, height: 60, borderRadius: 20, marginRight: 10 },
});

export default Reviews;
