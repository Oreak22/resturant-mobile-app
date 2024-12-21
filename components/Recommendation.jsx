import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Recommendation = () => {
  const data = [
    {
      pic: require('../assets/img/reco hoddie.png'),
      name: 'White fashion hoodie',
      price: '29',
      id: '1',
    },
    {
      pic: require('../assets/img/reco cotton.png'),
      name: 'White fashion hoodie',
      price: '30',
      id: '2',
    },
    {
      pic: require('../assets/img/reco hoddie.png'),
      name: 'White fashion hoodie',
      price: '25',
      id: '3',
    },
    {
      pic: require('../assets/img/reco cotton.png'),
      name: 'White fashion hoodie',
      price: '28',
      id: '4',
    },
  ];
  const dollar = '$';
  const renderItem = ({ item }) => (
    <Link href='/home' style={{ marginHorizontal: 15 }}>
      <View style={styles.items}>
        <View style={styles.img}>
          <Image
            source={item.pic}
            style={{
              width: '100%',
              height: '100%',
            }}
            resizeMode='contain'
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'column',
            marginLeft: 10,
          }}>
          <Text style={{fontWeight:'900'}}>{item.name}</Text>
          <Text style={{fontWeight:'900 '}}>
            {dollar} {item.price}.00
          </Text>
        </View>
      </View>
    </Link>
  );
  return (
    <FlatList
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      data={data}
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 20,
    paddingVertical: '5',
  },
  items: {
    width: 350,

    height: 100,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.5,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    padding: 0,
  },
  img: {
    width: '30%',
    padding: 0,
    backgroundColor: '#F6F6F8',
  },
});
export default Recommendation;
