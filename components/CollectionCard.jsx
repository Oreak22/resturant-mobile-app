import { View, Text, Dimensions, Image, ImageBackground } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const CollectionCard = ({ padded, datas }) => {
  const { width, height } = Dimensions.get('window');
  return (
    <View
      style={[
        {
          marginHorizontal: padded ? 20 : 0,
          backgroundColor: '#EAEAEB',
          borderRadius: padded ? 20 : 0,
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 10,
          paddingHorizontal: 20,
        },
      ]}>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'column',
          alignContent: 'center',
          width: '50%',
        }}>
        {datas.heading !== '' && (
          <Text
            style={{
              fontSize: 20,
              marginBottom: 15,
              color: 'rgba(0,0,0,0.6)',
            }}>
            | {datas.heading}
          </Text>
        )}
        <Text
          style={{
            fontSize: 30,
            color: 'rgba(0,0,0,0.6)',
            marginTop: '15',
            width: '85%',
          }}>
          {datas.mainContent}
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 10,
          width: '50%',
        }}>
        <Image
          source={datas.pic}
          style={{ height: 250, width: 180, margin: 'auto' }}
        />
      </View>
      <></>
    </View>
  );
};

export default CollectionCard;
