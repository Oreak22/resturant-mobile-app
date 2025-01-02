import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
import React, { useRef, useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const SearchSection = ({ data }) => {
  const [open, setOpen] = useState(false);
  const sizeAnim = useRef(new Animated.Value(0)).current;

  const toggleAnimation = () => {
    Animated.timing(sizeAnim, {
      toValue: open ? 0 : 500,
      duration: 500,
      useNativeDriver: false,
    }).start();
    setOpen(!open);
  };
  return (
    <View style={{ marginVertical: 15 }}>
      <TouchableOpacity
        onPress={toggleAnimation}
        style={{
          backgroundColor: data.backgroundColor,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 200,
          borderRadius: 20,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            textAlign: 'center',
            fontWeight: '900',
            width: '50%',
          }}>
          {data.name}
        </Text>
        <Image source={data.img} style={{ height: 200, width: 250 }} />
      </TouchableOpacity>
      <Animated.View
        style={{
          marginVertical: 15,
          height: sizeAnim,
          paddingHorizontal: 10,
        }}>
        {open &&
          data.catigories.map((item, index) => (
            <View key={index}>
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignContent: 'center',
                  paddingHorizontal: 15,
                  borderBottomColor: 'rgba(0,0,0,0.5)',
                  borderBottomWidth: 1,
                  paddingVertical: 20,
                }}>
                <Text
                  style={{ fontSize: 20, fontWeight: 'light', width: '50%' }}>
                  {item.name}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text>{item.amount} Items </Text>
                  <TouchableOpacity>
                    <FontAwesome
                      name='chevron-circle-right'
                      size={24}
                      color='black'
                    />
                  </TouchableOpacity>
                </View>
              </View>
              {item.subCatigories.length > 1 &&
                item.subCatigories.map((subItem, i) => (
                  <View
                    key={i}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignContent: 'center',
                      paddingHorizontal: 15,
                      borderBottomColor: 'rgba(0,0,0,0.5)',
                      borderBottomWidth: 1,
                      paddingVertical: 20,
                      width: '80%',
                      alignSelf: 'flex-end',
                    }}>
                    <Text style={{ fontSize: 20, fontWeight: 'light' }}>
                      {subItem.name}
                    </Text>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text>{subItem.amount} Items </Text>
                      <TouchableOpacity>
                        <FontAwesome
                          name='chevron-circle-right'
                          size={24}
                          color='black'
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
            </View>
          ))}
      </Animated.View>
    </View>
  );
};

export default SearchSection;
