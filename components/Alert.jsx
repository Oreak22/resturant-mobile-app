import {
  View,
  Text,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { EvilIcons, FontAwesome, FontAwesome6 } from '@expo/vector-icons';

const Alert = ({ message, alertIt, setalertIt }) => {
  const { width, height } = Dimensions.get('window');
  const [color, setColor] = useState(
    message.status === 'success' ? 'green' : message.status === 'error' && 'red'
  );

  const progress = useRef(new Animated.Value(100)).current;
  const reset = () => (progress = useRef(new Animated.Value(100)).current);
  useEffect(() => {
    Animated.timing(progress, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    const countDown = setTimeout(() => {
      setalertIt(false);
    }, 5000);

    return () => {
      clearTimeout(countDown);
      //   reset();
    };
  }, [progress, alertIt]);

  const widthInterpolation = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });
  return (
    <>
      {alertIt && (
        <View
          style={{
            width: width,
            height: 0.1 * height,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: '10%',
            position: 'absolute',
            top: 10,
            left: 0,
            zIndex: 1001,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              height: '50%',
              flexDirection: 'row',
              width: '100%',
              position: 'relative',
            }}>
            <FontAwesome5 name='info-circle' size={24} color={color} />
            <Text style={{ marginLeft: '3%', color }}>{message.message}</Text>
            <TouchableOpacity
              style={{
                padding: '1%',
                borderRadius: '50%',
                position: 'absolute',
                top: '1%',
                right: '1%',
              }}
              onPress={() => setalertIt(false)}>
              <EvilIcons name='close' size={24} color={'red'} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'black',
              width: '100%',
            }}>
            <View
              style={{
                backgroundColor: '#dddd',
                width: '90%',
                height: '10%',
                borderRadius: 10,
              }}>
              <Animated.View
                style={{
                  backgroundColor: color,
                  width: widthInterpolation,
                  height: '100%',
                  borderRadius: 10,
                }}></Animated.View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default Alert;
