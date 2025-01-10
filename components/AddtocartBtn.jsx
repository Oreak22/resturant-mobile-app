import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/golbalReducer';
import { Link } from 'expo-router';

const AddtocartBtn = ({ item, setAlert, setResponce }) => {
  const cart = useSelector((state) => state.globalReducer.cart);
  const dispatch = useDispatch();
  const findIf = cart.filter((cart) => cart.id === item.id);
  const checkExist = () => findIf.length > 0;
  console.log(checkExist(), 'found');
  const addToCartFunction = () => {
    dispatch(addToCart(item));
  };
  return (
    <>
      {!checkExist() ? (
        <TouchableOpacity
          disabled={checkExist()}
          onPress={() => {
            setAlert(false);
            if (item.size !="" && item.color !="") {
              setAlert(true);
              addToCartFunction();
              setResponce({ message: 'Added To Cart', status: 'success' });
            } else {
              setAlert(true);
              setResponce({
                message: 'Select a prefered color and size',
                status: 'error',
              });
            }
          }}
          style={{
            height: 0.1 * Dimensions.get('window').height,
            width: Dimensions.get('window').width,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome name='shopping-bag' size={30} color={'white'} />
            <Text
              style={{
                color: 'white',
                width: 200,
                textAlign: 'center',
                fontSize: 25,
                fontWeight: '900',
              }}>
              {!checkExist() ? 'Add To Cart' : 'Aready In Cart'}
            </Text>
          </View>
          <View
            style={{
              width: '30%',
              paddingVertical: 2,
              backgroundColor: 'white',
              marginTop: '2%',
              borderRadius: 10,
            }}></View>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            width: Dimensions.get('window').width,
            backgroundColor: 'transparent',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <Link
            href='/search'
            style={{
              width: '100%',
              backgroundColor: 'green',
              paddingVertical: '8',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                width: '100%',
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '900',
                marginBottom: 6,
              }}>
              Go To Cart
            </Text>
          </Link>
          <Link
            href='/search'
            style={{
              width: '100%',
              backgroundColor: 'black',
              paddingVertical: '8',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 6,
            }}>
            <Text
              style={{
                color: 'white',
                width: '100%',
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '900',
              }}>
              Continue Shopping
            </Text>
          </Link>
        </View>
      )}
    </>
  );
};

export default AddtocartBtn;
