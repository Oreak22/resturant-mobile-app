import {
  View,
  Text,
  Modal,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useMemo, useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Slider } from '@miblanchard/react-native-slider';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { MaterialIcons, Foundation } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const FilterSideBar = ({ toggle }) => {
  const [priceRange, setPriceRange] = useState([20, 400]);
  const radioButtons = useMemo(
    () => [
      {
        id: '1',
        label: 'Black',
        color: '#000000',
        backgroundColor: '#000000',
      },
      {
        id: '2',
        label: 'White',
        color: '#FFFFFF',
        backgroundColor: '#FFFFFF',
      },
      {
        id: '3',
        label: 'Red',
        color: '#FF0000',
        backgroundColor: '#FF0000',
      },
      {
        id: '4',
        label: 'Blue',
        color: '#0000FF',
        backgroundColor: '#0000FF',
      },
    ],
    []
  );
  const [selectedId, setSelectedId] = useState();
  const [selectedRating, setSelectedRating] = useState(0);
  const [discountRate, setDiscountRate] = useState();

  const handleRatingPress = (rating) => {
    setSelectedRating(rating);
  };
  const handleDiscount = (discount) => {
    setDiscountRate(discount);
  };
  return (
    <Modal transparent={true} visible={true} onRequestClose={toggle}>
      <>
        <View style={styles.filterContainer}>
          <View style={styles.sideFilter}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                paddingVertical: 25,
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(0,0,0,0.4)',
                // flex: 3,
              }}>
              <View>
                <Text style={styles.headerText}>Filter</Text>
              </View>
              <TouchableOpacity onPress={toggle}>
                <FontAwesome name='filter' size={24} color='black' />
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingVertical: 15,
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              }}>
              <View style={{ width: '100%' }}>
                <Text style={{ fontWeight: '800' }}>Price</Text>
                <Slider
                  value={priceRange}
                  onValueChange={(value) =>
                    setPriceRange(value.map((v) => Math.round(v)))
                  }
                  minimumValue={10}
                  maximumValue={1000}
                  renderAboveThumbComponent={(index) => (
                    <View
                      style={{
                        backgroundColor: 'white',
                        padding: 4,
                        top: 35,
                        position: 'absolute',
                        left: '50%',
                        transform: [{ translateX: -25 }, { translateY: 0 }],
                      }}>
                      <Text>${priceRange[index]}</Text>
                    </View>
                  )}
                  thumbStyle={{
                    backgroundColor: 'white',
                    width: 20,
                    height: 20,
                    borderColor: 'black',
                    borderWidth: 2,
                  }}
                />
              </View>

              <View style={{ width: '100%', marginTop: '10%' }}>
                <Text style={{ fontWeight: '800', marginBottom: 10 }}>
                  Colors
                </Text>
                <RadioGroup
                  radioButtons={radioButtons}
                  onPress={setSelectedId}
                  selectedId={selectedId}
                  containerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 10,
                  }}
                  labelStyle={{ display: 'none' }}
                  RadioButtonComponent={({ item, selected }) => (
                    <View
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: item.backgroundColor,
                        borderWidth: selected ? 2 : 1,
                        borderColor:
                          item.backgroundColor === '#FFFFFF'
                            ? '#000'
                            : selected
                            ? '#000'
                            : 'transparent',
                      }}
                    />
                  )}
                />
              </View>
              <View style={{ marginTop: '10%' }}>
                <Text style={styles.title}>Star Rating</Text>
                <View style={styles.ratingContainer}>
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <TouchableOpacity
                      key={rating}
                      style={[
                        styles.circle,
                        selectedRating === rating && styles.selectedCircle,
                      ]}
                      onPress={() => handleRatingPress(rating)}>
                      <Foundation
                        name='star'
                        size={15}
                        color={selectedRating === rating ? '#fff' : '#000'}
                      />
                      <Text
                        style={
                          selectedRating === rating
                            ? styles.ratingTextSelected
                            : styles.ratingText
                        }>
                        {rating}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              <View>
                <Text style={styles.title}>Catigory</Text>
                <View style={styles.Picker}>
                  <Picker>
                    <Picker.Item value={'Crop Tops'} label='Crop Top' />
                    <Picker.Item value={'Crop Tops'} label='Crop Top' />
                  </Picker>
                </View>
              </View>
              <View>
                <Text style={styles.title}>Discount</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                  {[50, 40, 30, 20].map((discount) => (
                    <TouchableOpacity
                      key={discount}
                      style={[
                        styles.pill,
                        discountRate === discount && styles.selectedCircle,
                      ]}
                      onPress={() => handleDiscount(discount)}>
                      <Text
                        style={
                          discountRate === discount
                            ? styles.pickerTextSelected
                            : styles.pickerText
                        }>
                        {discount}% off
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <TouchableOpacity style={[styles.btn]}>
                  <Text>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.btn, { backgroundColor: 'black' }]}>
                  <Text style={{ color: 'white' }}>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </>
    </Modal>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    minHeight: Dimensions.get('window').height,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  sideFilter: {
    backgroundColor: 'white',
    width: 0.75 * Dimensions.get('window').width,
    height: '100%',
    borderTopStartRadius: 40,
    borderBottomLeftRadius: 40,
    paddingHorizontal: '7%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerText: { fontSize: 20, fontWeight: '700' },

  title: {
    fontSize: 18,
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 5,
    flexDirection: 'row',
  },
  pill: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 5,
    flexDirection: 'row',
    marginBottom: 10,
  },
  selectedCircle: {
    backgroundColor: 'black',
  },
  ratingText: {
    fontSize: 12,
    color: '#000',
    marginTop: 4,
  },
  ratingTextSelected: {
    fontSize: 12,
    color: 'white',
    marginTop: 4,
  },
  pickerText: {
    fontSize: 18,
    color: '#000',
    marginTop: 4,
  },
  pickerTextSelected: {
    fontSize: 18,
    color: 'white',
    marginTop: 4,
  },
  Picker: {
    elevation: 2.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
});

export default FilterSideBar;
