import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import ProfieBar from '../../components/ProfieBar';
import CatigoriesNav from '../../components/CatigoriesNav';
import Carosel from '../../components/Carosel';
import FeatureProduct from '../../components/FeatureProduct';
import BottomNav from '../../components/BottomNav';
import CollectionCard from '../../components/CollectionCard';
import Recommendation from '../../components/Recommendation';

const index = () => {
  const hangDatas = {
    pic: require('../../assets/img/hangout collection.png'),
    heading: '',
    mainContent: 'HANG OUT & PARTY',
  };
  const collectionData = [
    {
      pic: require('../../assets/img/slim and beauty.png'),
      heading: '',
      mainContent: 'FOR SLIM & BEAUTY',
      id: '1',
    },
    {
      pic: require('../../assets/img/more sexy.png'),
      heading: '',
      mainContent: 'Most sexy & fabulous design',
      id: '2',
    },
  ];
  const shareCollectionData = [
    {
      pic: require('../../assets/img/office shirt.png'),
      heading: '',
      mainContent: 'FOR SLIM & BEAUTY',
      id: '1',
    },
    {
      pic: require('../../assets/img/office dress.png'),
      heading: '',
      mainContent: 'Most sexy & fabulous design',
      id: '2',
    },
  ];
  return (
    <>
      {/* Profile Bar */}
      <ProfieBar />
      {/* Content */}
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={{ paddingHorizontal: 20 }}>
            <CatigoriesNav women={true} />
          </View>

          <View style={{ marginVertical: 20 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
                marginBottom: 20,
              }}>
              <Text style={{ fontWeight: '900', fontSize: 30 }}>
                Feature Products
              </Text>
              <TouchableOpacity>
                <Text>See all</Text>
              </TouchableOpacity>
            </View>

            <Carosel />
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <FeatureProduct />
          </View>
          <CollectionCard datas={hangDatas} padded={false} />
          {/* recommendation */}
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
                marginTop: 20,
              }}>
              <Text style={{ fontWeight: '900', fontSize: 30 }}>
                Recommended
              </Text>
              <TouchableOpacity>
                <Text>See all</Text>
              </TouchableOpacity>
            </View>
            <Recommendation />
          </View>
          {/* collections */}
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
                marginTop: 20,
              }}>
              <Text style={{ fontWeight: '900', fontSize: 30 }}>
                Top Collections
              </Text>
              <TouchableOpacity>
                <Text>See all</Text>
              </TouchableOpacity>
            </View>
            {collectionData.map((datas) => (
              <CollectionCard key={datas.id} padded={true} datas={datas} />
            ))}
            <View
              style={{
                flexDirection: 'row',
                padding: 20,
                justifyContent: 'space-between',
              }}>
              <View style={styles.card}>
                <Image
                  source={shareCollectionData[0].pic}
                  style={{ height: 250, width: 100 }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={[{ marginBottom: 5 }, styles.header]}>
                    T-Shirts
                  </Text>
                  <Text style={[{ marginTop: 5 }, styles.mainContent]}>
                    The {'\n'}Office {'\n'}Life {'\n'}
                  </Text>
                </View>
              </View>
              <View style={styles.card2}>
                <Image
                  source={shareCollectionData[1].pic}
                  style={{ height: 250, width: 100 }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    // alignItems: 'center',
                    justifyContent: 'center',
                    paddingLeft: 5,
                  }}>
                  <Text style={[{ marginBottom: 5 }, styles.header]}>
                    Dresses
                  </Text>
                  <Text style={[{ marginTop: 5 }, styles.mainContent]}>
                    Elegant {'\n'}Dress {'\n'}{' '}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* End of contents */}
        </View>
      </ScrollView>
      {/* Bottom Nav */}
      <BottomNav home={true} />
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 80,
  },
  content: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 60 : 90,
    paddingBottom: 80,
  },
  card: {
    flexDirection: 'row',
    width: '47%',
    backgroundColor: '#EAEAEB',
    borderRadius: 20,
    overflow: 'hidden',
  },
  card2: {
    flexDirection: 'row-reverse',
    width: '47%',
    backgroundColor: '#EAEAEB',
    borderRadius: 20,
    overflow: 'hidden',
  },
  header: {
    fontSize: 20,
    fontWeight: 100,
    color: 'rgba(0,0,0,0.6)',
  },
  mainContent: {
    fontSize: 30,
    fontWeight: 100,
    color: 'rgba(0,0,0,1)',
  },
});
