import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { StyleSheet } from 'react-native';
import Ratings from '../../components/Ratings';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import Collapsible from '../../components/Collapsible';

const index = () => {
  const { id, details } = useLocalSearchParams();
  const data = JSON.parse(details);
  const [size, setSize] = useState('');
  const [color, setColor] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const selectSize = (s) => setSize(s);
  const selectColor = (item) => setColor(item);
  return (
    <SafeAreaView
      style={{
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        minHeight: Dimensions.get('window').height,
      }}>
      <View style={styles.heroImg}>
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
            <FontAwesome name='heart' size={20} color={'#FF6E6E'} />
          </TouchableOpacity>
        </View>
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text
              style={{ fontSize: 22, fontWeight: '800', marginVertical: 20 }}>
              {data.name}
            </Text>
            <Ratings item={data.ratings} size={25} />
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
                    { backgroundColor: size !== item ? '#FAFAFA' : 'black' },
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
            <Text style={{ fontSize: 18, fontWeight: '600' }}>Description</Text>
            <FontAwesome
              name={isOpen ? 'angle-down' : 'angle-right'}
              size={20}
              color='black'
            />
          </TouchableOpacity>
          <Collapsible isOpen={isOpen}>
            <View style={{ padding: 16 }}>
              <Text style={{ fontSize: 16, lineHeight: 24 }}>
                {data.description || 'No description available'}
              </Text>
            </View>
          </Collapsible>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heroImg: {
    flex: 2,
    width: '100%',
    position: 'relative',
  },
  content: {
    flex: 3,
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
    minHeight: 50,
    minWidth: 50,
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
    borderWidth: 5,
    borderColor: 'white',
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
