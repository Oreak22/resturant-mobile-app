import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  FlatList,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import BottomNav from '../../components/BottomNav';
import ProfieBar from '../../components/ProfieBar';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SearchSection from '../../components/SearchSection';
import { FontAwesome5 } from '@expo/vector-icons';
import FeatureProduct from '../../components/FeatureProduct';
import FilterSideBar from '../../components/FilterSideBar';
import { router, useRouter } from 'expo-router';
// import { navigate } from 'expo-router/build/global-state/routing';
const index = () => {
  const [searching, setSearching] = useState(false);
  const [filter, setfilter] = useState(false);
  const [searchFor, setSearchFor] = useState('');
  const [filterParameter, setFilterParameter] = useState({ d: 'd' });
  const discover = [
    {
      name: 'CLOTHING',
      img: require('../../assets/img/discover clothing.png'),
      catigories: [
        { name: 'Jacket', amount: 128, subCatigories: [] },
        { name: 'Skirts', amount: 40, subCatigories: [] },
        {
          name: 'Dresses',
          amount: 36,
          subCatigories: [
            { name: 'Sweaters', amount: 20 },
            { name: 'Jeans', amount: 14 },
          ],
        },
        { name: 'T-Shirt', amount: 12, subCatigories: [] },
        { name: 'Pants', amount: 9, subCatigories: [] },
      ],
      backgroundColor: '#A3A798',
    },
    {
      name: 'ACCESSORIES',
      img: require('../../assets/img/discover accessories.png'),
      catigories: [
        { name: 'Jacket', amount: 128, subCatigories: [] },
        { name: 'Skirts', amount: 40, subCatigories: [] },
        {
          name: 'Dresses',
          amount: 36,
          subCatigories: [
            { name: 'Sweaters', amount: 20 },
            { name: 'Jeans', amount: 14 },
          ],
        },
        { name: 'T-Shirt', amount: 12, subCatigories: [] },
        { name: 'Pants', amount: 9, subCatigories: [] },
      ],
      backgroundColor: '#A3A798',
    },
    {
      name: 'SHOES',
      img: require('../../assets/img/discover shoes.png'),
      catigories: [
        { name: 'Jacket', amount: 128, subCatigories: [] },
        { name: 'Skirts', amount: 40, subCatigories: [] },
        {
          name: 'Dresses',
          amount: 36,
          subCatigories: [
            { name: 'Sweaters', amount: 20 },
            { name: 'Jeans', amount: 14 },
          ],
        },
        { name: 'T-Shirt', amount: 12, subCatigories: [] },
        { name: 'Pants', amount: 9, subCatigories: [] },
      ],
      backgroundColor: '#A3A798',
    },
    {
      name: 'COLLECTION',
      img: require('../../assets/img/discover collection.png'),
      catigories: [
        { name: 'Jacket', amount: 128, subCatigories: [] },
        { name: 'Skirts', amount: 40, subCatigories: [] },
        {
          name: 'Dresses',
          amount: 36,
          subCatigories: [
            { name: 'Sweaters', amount: 20 },
            { name: 'Jeans', amount: 14 },
          ],
        },
        { name: 'T-Shirt', amount: 12, subCatigories: [] },
        { name: 'Pants', amount: 9, subCatigories: [] },
      ],
      backgroundColor: '#A3A798',
    },
  ];
  const seaches = ['Sunglasses', 'Sweater', 'Hoodie'];
  const model = () => {
    setfilter(!filter);
  };
  const searchNow = () => {
    if (searchFor.trim() !== '') {
      router.navigate(
        `/search/searchResult/${searchFor}?parameters=${JSON.stringify(
          filterParameter
        )}`
      );
    }
  };
  return (
    <>
      <ProfieBar />
      <SafeAreaView
        style={{
          paddingTop:
            Platform.OS === 'android' ? StatusBar.currentHeight + 60 : 90,
          paddingHorizontal: 20,
          backgroundColor: 'white',
          paddingBottom: 60,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 20,
          }}>
          <View style={styles.searchInput}>
            {searching ? (
              <>
                <FontAwesome name='search' size={24} color='black' />
                <TextInput
                  placeholder='Search'
                  keyboardAppearance='default'
                  returnKeyType='search'
                  inputMode='search'
                  autoFocus={true}
                  value={searchFor}
                  style={[{ width: '90%' }, styles.input]}
                  onChangeText={(text) => {
                    setSearchFor(text);
                    if (text === '') setSearching(false);
                  }}
                  onEndEditing={searchNow}
                />
                <TouchableOpacity onPress={() => setSearching(false)}>
                  <FontAwesome6 name='x' size={24} color='black' />
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                onPress={() => setSearching(true)}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}>
                <FontAwesome name='search' size={24} color='black' />
                <Text style={[styles.input, { marginLeft: 5 }]}>Seach</Text>
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            style={styles.seachBtn}
            onPress={() => setfilter(!filter)}>
            <FontAwesome6 name='filter-circle-xmark' size={24} color='black' />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={[
            {
              backgroundColor: 'white',
              marginBottom: 100,
              paddingTop: 10,
              minHeight: 0.8 * Dimensions.get('window').height,
            },
          ]}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <View style={[{ flex: 1 }]}>
            {searching ? (
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={[styles.recent]}>Recent Searches</Text>
                  <TouchableOpacity style={{ padding: 10 }}>
                    <FontAwesome6 name='trash-can' size={24} color='black' />
                  </TouchableOpacity>
                </View>
                <View>
                  <FlatList
                    style={{ paddingVertical: 5 }}
                    data={seaches}
                    keyExtractor={(item) => item}
                    horizontal
                    renderItem={({ item }) => (
                      <View
                        style={{
                          width: 150,
                          backgroundColor: '#E5E5E5',
                          flexDirection: 'row',
                          paddingVertical: 15,
                          marginRight: 5,
                          borderRadius: 10,
                          paddingHorizontal: 10,
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        <TouchableOpacity
                          style={{ width: '80%' }}
                          onPress={() => {
                            setSearchFor(item);
                            searchNow();
                          }}>
                          <Text>{item}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '20%' }}>
                          <FontAwesome6
                            name='x'
                            size={15}
                            color='
                        black'
                          />
                        </TouchableOpacity>
                      </View>
                    )}
                  />
                </View>
                <View style={{ marginTop: 30 }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingHorizontal: 20,
                      marginTop: 20,
                    }}>
                    <Text style={{ fontWeight: '900', fontSize: 23 }}>
                      Popular this week
                    </Text>
                    <TouchableOpacity>
                      <Text>Show all</Text>
                    </TouchableOpacity>
                  </View>
                  <FeatureProduct />
                </View>
              </>
            ) : (
              <View>
                {discover.map((item, index) => (
                  <SearchSection data={item} key={index} />
                ))}
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
      <BottomNav discover={true} />
      {filter && <FilterSideBar toggle={model} />}
    </>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.5,
    elevation: 3,
    width: '85%',
    height: '100%',
    borderRadius: 20,
    backgroundColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    overflow: 'hidden',
  },
  seachBtn: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.5,
    elevation: 3,
    width: '13%',
    borderRadius: 20,
    backgroundColor: '#E5E5E5',
    aspectRatio: 1 / 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
  },
  recent: { color: 'rgba(0,0,0,0.5)', fontSize: 20, width: '60%' },
});

export default index;
