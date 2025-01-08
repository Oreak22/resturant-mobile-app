import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { StyleSheet } from 'react-native';
import Ratings from '../../components/Ratings';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import Collapsible from '../../components/Collapsible';
import FeatureProduct from '../../components/FeatureProduct';
import Reviews from '../../components/Reviews';
import AddtocartBtn from '../../components/AddtocartBtn';
import Alert from '../../components/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../../redux/golbalReducer';

const index = () => {
  const { id, details } = useLocalSearchParams();
  const data = JSON.parse(details);
  const [alertIt, setaertIt] = useState(false);
  const [responce, setResponce] = useState({});
  // const {ratings} =
  const total = [
    data.reviews.ratings.s1.num,
    data.reviews.ratings.s2.num,
    data.reviews.ratings.s3.num,
    data.reviews.ratings.s4.num,
    data.reviews.ratings.s5.num,
  ].reduce((a, b) => a + b, 0);
  const [size, setSize] = useState('');
  const [color, setColor] = useState();
  const [isOpen, setIsOpen] = useState(true);
  const [reviewIsopen, setReviewIsopen] = useState(true);
  const [similarIsOpen, setSimilarIsOpen] = useState(true);
  const selectSize = (s) => setSize(s);
  const selectColor = (item) => setColor(item);
  const wishList = useSelector((state) => state.globalReducer.wishlist);
  const SeeIf = () => {
    const inWish = wishList.filter((wishItem) => wishItem.id === data.id);
    console.log(inWish.length);
    if (inWish.length > 0) return true;

    return false;
  };

  const dispatch = useDispatch();

  const addWishList = () => {
    dispatch(addToWishlist(data));
  };
  return (
    <View
      style={{
        position: 'relative',
        paddingBottom: 0.1 * Dimensions.get('window').height,
      }}>
      <View
        style={{
          paddingVertical: 15,
          paddingHorizontal: 20,
          backgroundColor: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 999,
          width: '100%',
        }}>
        {/* back btn */}
        <TouchableOpacity
          onPress={() => router.back()}
          style={[
            {
              width: 50,
              height: 50,
              borderRadius: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            },
            styles.backbtn,
          ]}>
          <FontAwesome6 name='angle-left' size={28} color='black' />
        </TouchableOpacity>
        {/* wishList btn */}
        <TouchableOpacity
          onPress={() => addWishList()}
          style={[
            {
              width: 50,
              height: 50,
              borderRadius: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            },
            styles.backbtn,
          ]}>
          <FontAwesome
            name='heart'
            size={20}
            color={SeeIf() ? '#FF6E6E' : '#D8D8D8'}
          />
        </TouchableOpacity>
      </View>
      {alertIt && (
        <Alert
          message={responce.message}
          alertIt={alertIt}
          setalertIt={setaertIt}
        />
      )}
      <ScrollView>
        <SafeAreaView
          style={{
            minHeight: Dimensions.get('window').height,
            overflow: 'scroll',
          }}>
          <View style={styles.heroImg}>
            <Image
              source={data.img}
              width={200}
              height={250}
              style={styles.img}
              resizeMode='contain'
              resizeMethod='resize'
            />
          </View>
          <View style={styles.content}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: '800',
                    marginVertical: 20,
                  }}>
                  {data.name}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Ratings item={data.ratings} size={25} />
                  <Text>({total})</Text>
                </View>
              </View>
              <View>
                <Text style={{ fontSize: 25, fontWeight: '900' }}>
                  $ {data.price}.00
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 20,
              }}>
              <View>
                <Text style={styles.label}>Color</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  {data.color.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.round,
                        { backgroundColor: `${'#' + item || item}` },
                        color === item && styles.colorSelected,
                      ]}
                      onPress={() => selectColor(item)}></TouchableOpacity>
                  ))}
                </View>
              </View>
              <View>
                <Text style={styles.label}>Size</Text>
                <View style={{ flexDirection: 'row' }}>
                  {data.size.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.size,
                        styles.round,
                        {
                          backgroundColor: size !== item ? '#FAFAFA' : 'black',
                        },
                      ]}
                      onPress={() => selectSize(item)}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 15,
                          color: size === item ? '#FAFAFA' : 'black',
                        }}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
            <View>
              {/* discription */}
              <TouchableOpacity
                onPress={() => setIsOpen(!isOpen)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: 16,
                  borderBottomWidth: 1,
                  borderBottomColor: '#eee',
                }}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>
                  Description
                </Text>
                <FontAwesome
                  name={isOpen ? 'angle-down' : 'angle-right'}
                  size={20}
                  color='black'
                />
              </TouchableOpacity>
              <Collapsible isOpen={isOpen}>
                <View style={{ paddingVertical: 16 }}>
                  <Text style={{ fontSize: 16, lineHeight: 24 }}>
                    {data.description || 'No description available'}
                  </Text>
                </View>
              </Collapsible>
              {/* review */}
              <TouchableOpacity
                onPress={() => setReviewIsopen(!reviewIsopen)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: 16,
                  borderBottomWidth: 1,
                  borderBottomColor: '#eee',
                }}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>Reviews</Text>
                <FontAwesome
                  name={reviewIsopen ? 'angle-down' : 'angle-right'}
                  size={20}
                  color='black'
                />
              </TouchableOpacity>
              <Collapsible isOpen={reviewIsopen}>
                <ScrollView style={{ paddingVertical: 16, minHeight: 10000 }}>
                  <Reviews data={data.reviews} />
                </ScrollView>
              </Collapsible>
              {/* similar */}
              <TouchableOpacity
                onPress={() => setSimilarIsOpen(!similarIsOpen)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: 16,
                  borderBottomWidth: 1,
                  borderBottomColor: '#eee',
                }}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>
                  Similar Products
                </Text>
                <FontAwesome
                  name={similarIsOpen ? 'angle-down' : 'angle-right'}
                  size={20}
                  color='black'
                />
              </TouchableOpacity>

              <Collapsible isOpen={similarIsOpen}>
                <View style={{ paddingVertical: 16 }}>
                  <FeatureProduct />
                </View>
              </Collapsible>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <AddtocartBtn
        setAlert={setaertIt}
        setResponce={setResponce}
        item={data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heroImg: {
    // flex: 1,
    width: '100%',
    height: 0.45 * Dimensions.get('window').height,
    // position: 'relative',
  },
  content: {
    flex: 3,
    // display: 'none',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: -3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  round: {
    minHeight: 35,
    minWidth: 35,
    borderRadius: '50%',
    marginRight: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 15,
  },
  size: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorSelected: {
    borderWidth: 3,
    borderColor: '#fafafa',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  sizeSelected: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  backbtn: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: 'white',
    marginRight: 20,
  },
});

export default index;
