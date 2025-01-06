import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const AddtocartBtn = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        height: 0.1 * Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FontAwesome name='shopping-bag' size={30} color={'white'} />
        <Text
          style={{
            color: 'white',
            width: 200,
            textAlign: 'center',
            fontSize: 25,
            fontWeight: '900',
          }}>
          Add To Cart
        </Text>
      </View>
      <View
        style={{
          width: '30%',
          paddingVertical: 2,
          backgroundColor: 'white',
          marginTop: '2%',
          borderRadius:10
        }}></View>
    </TouchableOpacity>
  );
};

export default AddtocartBtn;
