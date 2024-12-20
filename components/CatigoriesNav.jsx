import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const CatigoriesNav = ({ men, women, accessories, beauty }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cati}>
        <View
          style={[
            styles.catiItem,
            { backgroundColor: women ? 'black' : '#E6E8EC' },
          ]}>
          <Ionicons
            name='female-outline'
            size={40}
            color='black'
            style={women && styles.active}
          />
        </View>
        <Text style={styles.catiText}>Women</Text>
      </TouchableOpacity>
      {/* Men */}
      <TouchableOpacity style={styles.cati}>
        <View
          style={[
            styles.catiItem,
            { backgroundColor: men ? 'black' : '#E6E8EC' },
          ]}>
          <Ionicons
            name='male-outline'
            size={40}
            color='black'
            style={men && styles.active}
          />
        </View>
        <Text style={styles.catiText}>Men</Text>
      </TouchableOpacity>
      {/* Accessories */}
      <TouchableOpacity style={styles.cati}>
        <View
          style={[
            styles.catiItem,
            { backgroundColor: accessories ? 'black' : '#E6E8EC' },
          ]}>
          <Ionicons
            name='glasses-outline'
            size={40}
            color='black'
            style={accessories && styles.active}
          />
        </View>
        <Text style={styles.catiText}>Accessories</Text>
      </TouchableOpacity>
      {/* Beauty */}
      <TouchableOpacity style={styles.cati}>
        <View
          style={[
            styles.catiItem,
            { backgroundColor: beauty ? 'black' : '#E6E8EC' },
          ]}>
          <Ionicons
            name='rose-outline'
            size={40}
            color='black'
            style={beauty && styles.active}
          />
        </View>
        <Text style={styles.catiText}>Beauty</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cati: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  catiItem: {
    width: 0.2 * Dimensions.get('window').width,
    height: 0.2 * Dimensions.get('window').width,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
  },
  catiItemActive: {
    width: 0.2 * Dimensions.get('window').width,
    height: 0.2 * Dimensions.get('window').width,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1.5,
  },
  catiText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  active: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    flexDirection: 'column',
    borderWidth: 3,
    borderColor: 'white',
    alignContent: 'center',
    verticalAlign: 'center',
    paddingTop: 23,
  },
});

export default CatigoriesNav;
