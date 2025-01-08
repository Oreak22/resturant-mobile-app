import {
  View,
  Text,
  FlatList,
  Image,
  Platform,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import Ratings from './Ratings';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../redux/golbalReducer';

const SearchList = ({ data }) => {
  const { width, height } = Dimensions.get('window');
  const even = (e) => e % 2 === 0;
  const handleNavigation = (to) => {};
  const wishList = useSelector((state) => state.globalReducer.wishlist);
  const cart = useSelector((state) => state.globalReducer.cart);
  const dispatch = useDispatch();
  const addWishList = (item) => {
    dispatch(addToWishlist(item));
  };
  const SeeIf = (item) => {
    const inWish = wishList.filter(
      (wishItem) => wishItem.id === item.id
    );
    console.log(inWish.length);
    if (inWish.length > 0) return true;

    return false;
  };
  const renderItem = ({ item, index, separators }) => (
    <Link
      style={{ flexDirection: 'column', width: 0.4 * width }}
      href={`/product/${item.id}?details=${JSON.stringify(item)}`}>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          flexDirection: 'row',
          //   paddingTop: 10,
          borderRadius: 20,
          overflow: 'hidden',
          position: 'relative',
        }}>
        <Image
          source={item.img}
          style={{ width: '100%', aspectRatio: '1/1.5' }}
        />
        <TouchableOpacity
          style={styles.wishlist}
          onPress={() => addWishList(item)}>
          <FontAwesome
            name='heart'
            size={20}
            color={SeeIf(item) ? '#FF6E6E' : '#D8D8D8'}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            marginTop: 20,
            marginBottom: 5,
            fontSize: 18,
            width: '100%',
          }}>
          {item.name}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: '900', width: '100%' }}>
          ${item.price}.00
        </Text>
        <Ratings item={item.ratings} />
      </View>
    </Link>
  );
  return (
    <FlatList
      ItemSeparatorComponent={
        Platform.OS !== 'android' &&
        (({ highlighted }) => (
          <View style={[style.separator, highlighted && { marginLeft: 0 }]} />
        ))
      }
      data={data}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={renderItem}
      horizontal={false}
      columnGap={20}
      contentContainerStyle={{
        rowGap: 30,
        justifyContent: 'space-between',
        width: '100%',
      }}
      columnWrapperStyle={{
        justifyContent: 'space-between',
      }}
    />
  );
};

const styles = StyleSheet.create({
  wishlist: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: '50%',
    top: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    // Android shadow
    elevation: 3,
  },
});
export default SearchList;
