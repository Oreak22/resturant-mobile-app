import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';

const Carosel = () => {
  const { width } = Dimensions.get('window');

  const data = [
    { id: '1', title: `Autumn Collection 2024` },
    { id: '2', title: `Autumn Collection 2024` },
    { id: '3', title: `Autumn Collection 2024` },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={[styles.itemContainer, { width: width }]}>
      <View style={styles.image}>
        <ImageBackground
          source={require('../assets/img/autumn.png')}
          style={styles.image}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.button}>
            <View
              style={[
                styles.buttonNav,
                { borderWidth: item.id === '1' ? 1.5 : 0 },
              ]}>
              <View style={styles.dot}></View>
            </View>
            <View
              style={[
                styles.buttonNav,
                { borderWidth: item.id === '2' ? 1.5 : 0 },
              ]}>
              <View style={styles.dot}></View>
            </View>
            <View
              style={[
                styles.buttonNav,
                { borderWidth: item.id === '3' ? 1.5 : 0 },
              ]}>
              <View style={styles.dot}></View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      snapToAlignment='center'
      snapToInterval={width}
      decelerationRate='fast'
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 300,
    position: 'relative',
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-end',
    borderRadius: 30,
    backgroundColor: 'red',
    overflow: 'hidden',
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    width: 200,
    lineHeight: 50,
    marginTop: 15,
  },
  button: {
    // backgroundColor: 'white',
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonNav: {
    borderRadius: 10,
    borderColor: 'white',
    padding: 5,
    marginHorizontal: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: 'white',
  },
});

export default Carosel;
