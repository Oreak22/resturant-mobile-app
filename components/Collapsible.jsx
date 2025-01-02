import { View, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';

const Collapsible = ({ children, isOpen }) => {
  const animatedHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: isOpen ? 1 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [isOpen]);

  return (
    <Animated.View
      style={{
        maxHeight: animatedHeight.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 500], // Adjust max height as needed
        }),
        overflow: 'hidden',
      }}>
      {children}
    </Animated.View>
  );
};

export default Collapsible;
