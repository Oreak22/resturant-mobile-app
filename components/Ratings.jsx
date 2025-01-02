import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Ratings = ({ item, size }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 3,
      }}>
      {[1, 2, 3, 4, 5].map((ratings, index) => (
        <Ionicons
          name={item + 1 <= ratings ? 'star-outline' : 'star-sharp'}
          size={size || 15}
          color='#508A7B'
          key={index}
          style={{ marginRight: 3 }}
        />
      ))}
    </View>
  );
};

export default Ratings;
