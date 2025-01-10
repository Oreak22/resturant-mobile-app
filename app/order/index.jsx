import { View, Text, Dimensions, Platform, StatusBar,TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import ProfieBar from '../../components/ProfieBar';

const index = () => {
  return (
    <>
      <ProfieBar title={'My Orders'} />
      <SafeAreaView style={styles.container}>
        <View style={styles.flexBtn}>
          <TouchableOpacity style={[styles.orderBtn,{}]}></TouchableOpacity>
          <TouchableOpacity style={[styles.orderBtn,{}]}></TouchableOpacity>
          <TouchableOpacity style={[styles.orderBtn,{}]}></TouchableOpacity>
        </View>
        <Text>index</Text>
      </SafeAreaView>
      {/* <BottomNav/> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 60 : 90,
    minHeight: Dimensions.get('window').height,
    backgroundColor: 'white',
    paddingHorizontal:20
  },
  flexBtn:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  orderBtn:{
    width: '30%',
    justifyContent:'center',
    alignItems:'center'
  }
});
export default index;
