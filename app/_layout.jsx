import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='index'
        options={{
          headerShown: false,
          animation: 'slide_from_right',
          headerLeft: () => <Text>Back</Text>,
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerLeftLabelStyle: { fontFamily: 'Product Sans Regular' },
        }}
      />
      <Stack.Screen
        name='home/index'
        options={{
          headerShown: false,
          animation: 'slide_from_left',
          presentation: 'modal',
          headerLeft: () => <Text>Back</Text>,
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerLeftLabelStyle: { fontFamily: 'Product Sans Regular' },
          headerRight: () => <Text>Next</Text>,
          headerRightContainerStyle: { paddingRight: 10 },
          headerRightLabelStyle: { fontFamily: 'Product Sans Regular' },
        }}
      />
      <Stack.Screen
        name='login/index'
        options={{
          headerShown: false,
          animation: 'slide_from_left',
          presentation: 'modal',
          headerLeft: () => <Text>Back</Text>,
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerLeftLabelStyle: { fontFamily: 'Product Sans Regular' },
          headerRight: () => <Text>Next</Text>,
          headerRightContainerStyle: { paddingRight: 10 },
          headerRightLabelStyle: { fontFamily: 'Product Sans Regular' },
        }}
      />
      <Stack.Screen
        name='register/index'
        options={{
          headerShown: false,
          animation: 'slide_from_left',
          presentation: 'modal',
          headerLeft: () => <Text>Back</Text>,
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerLeftLabelStyle: { fontFamily: 'Product Sans Regular' },
          headerRight: () => <Text>Next</Text>,
          headerRightContainerStyle: { paddingRight: 10 },
          headerRightLabelStyle: { fontFamily: 'Product Sans Regular' },
        }}
      />
    </Stack>
  );
};

export default _layout;
