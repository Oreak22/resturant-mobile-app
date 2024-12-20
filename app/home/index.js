import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Platform,
  ScrollView,
} from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import ProfieBar from '../../components/ProfieBar';
import CatigoriesNav from '../../components/CatigoriesNav';
import Carosel from '../../components/Carosel';
import FeatureProduct from '../../components/FeatureProduct';
import BottomNav from '../../components/BottomNav';

const index = () => {
  return (
    <View style={styles.container}>
      {/* Profile Bar */}
      <ProfieBar />
      {/* Content */}
      <ScrollView style={styles.content}>
        <CatigoriesNav women={true} />
        <View style={{ marginVertical: 20 }}>
          <Carosel />
        </View>
        <View>
          <FeatureProduct />
        </View>
      </ScrollView>
      {/* Bottom Nav */}
      <BottomNav />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 60 : 90,
    paddingHorizontal: 20,
  },
});
