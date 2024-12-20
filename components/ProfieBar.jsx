import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  Modal,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import Feather from '@expo/vector-icons/Feather';
import { Link } from 'expo-router';

const ProfieBar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.NavbarContainer}>
        <TouchableOpacity
          style={styles.NavbarIcon}
          onPress={() => setModalVisible(true)}>
          <Feather name='menu' size={24} color='black' />
        </TouchableOpacity>
        <Text style={styles.NavbarTitle}>Gemstore</Text>
        <TouchableOpacity style={styles.NavbarIcon}>
          <Feather name='bell' size={24} color='black' />
        </TouchableOpacity>
      </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType='fade'
        onRequestClose={() => setModalVisible(false)}>
        <StatusBar backgroundColor='rgba(0,0,0,0.5)' barStyle='light-content' />
        <View style={styles.ModalContainer}>
          <View style={styles.ModalContent}>
            <View style={styles.ModalHeader}>
              <Image
                source={require('../assets/img/hangout collection.png')}
                style={styles.ModalHeaderImage}
                resizeMode='contain'
              />
              <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                  Profile
                </Text>
                <Text style={{ fontSize: 16, color: 'gray' }}>
                  demo@oreak.xyz
                </Text>
              </View>
            </View>
            <View style={{ width: '100%' }}>
              <View style={styles.NavbarBodyItem}>
                <Link href='/home'>
                  <View style={styles.NavbarBodyItemIcon}>
                    <Feather
                      name='home'
                      size={24}
                      color='black'
                      style={styles.navIcon}
                    />
                    <Text style={styles.NavbarBodyItemText}>Home Page</Text>
                  </View>
                </Link>
                <Link href='/profile'>
                  <View style={styles.NavbarBodyItemIcon}>
                    <Feather
                      name='search'
                      size={24}
                      color='black'
                      style={styles.navIcon}
                    />
                    <Text style={styles.NavbarBodyItemText}>Discover</Text>
                  </View>
                </Link>
                <Link href='/profile'>
                  <View style={styles.NavbarBodyItemIcon}>
                    <Feather
                      name='shopping-bag'
                      size={24}
                      color='black'
                      style={styles.navIcon}
                    />
                    <Text style={styles.NavbarBodyItemText}>My Order</Text>
                  </View>
                </Link>
                <Link href='/profile'>
                  <View style={styles.NavbarBodyItemIcon}>
                    <Feather
                      name='user'
                      size={24}
                      color='black'
                      style={styles.navIcon}
                    />
                    <Text style={styles.NavbarBodyItemText}>My Profile</Text>
                  </View>
                </Link>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'light',
                    marginVertical: 15,
                  }}>
                  OTHER
                </Text>
                <Link href='/profile'>
                  <View style={styles.NavbarBodyItemIcon}>
                    <Feather
                      name='help-circle'
                      size={24}
                      color='black'
                      style={styles.navIcon}
                    />
                    <Text style={styles.NavbarBodyItemText}>Support</Text>
                  </View>
                </Link>
                <Link href='/profile'>
                  <View style={styles.NavbarBodyItemIcon}>
                    <Feather
                      name='settings'
                      size={24}
                      color='black'
                      style={styles.navIcon}
                    />
                    <Text style={styles.NavbarBodyItemText}>Setting</Text>
                  </View>
                </Link>
                <Link href='/profile'>
                  <View style={styles.NavbarBodyItemIcon}>
                    <Feather
                      name='info'
                      size={24}
                      color='black'
                      style={styles.navIcon}
                    />
                    <Text style={styles.NavbarBodyItemText}>About Us</Text>
                  </View>
                </Link>
              </View>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Link
                href='/login'
                style={[
                  styles.ModalFooterItem,
                  { backgroundColor: 'rgb(0, 0, 0)' },
                ]}>
                <Text style={{ color: 'white' }}>Sign In</Text>
              </Link>
              <Link
                href='/register'
                style={[styles.ModalFooterItem, { backgroundColor: 'white' }]}>
                <Text style={{ color: 'black' }}>Sign Up</Text>
              </Link>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.ModalClose}
          onPress={() => setModalVisible(false)}>
          <Feather
            name='x'
            size={24}
            color='black'
            style={{ textAlign: 'center' }}
          />
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  NavbarContainer: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 40,
    paddingBottom: 10,
   
  },
  NavbarTitle: {
    fontSize: 30,
    fontWeight: '900',
  },
  NavbarIcon: {
    padding: 10,
    borderRadius: 100,
  },
  ModalContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'flex-start',
  },
  ModalContent: {
    backgroundColor: 'white',
    width: '75%',
    height: '100%',
    borderTopEndRadius: 40,
    borderBottomRightRadius: 40,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ModalClose: {
    top: 20,
    width: 40,
    height: 40,
    backgroundColor: 'white',
    right: 20,
    position: 'absolute',
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ModalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',

    borderRadius: 20,
    backgroundColor: 'rgb(250, 250, 250)',
    overflow: 'hidden',
    marginTop: 20,
  },
  ModalHeaderImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginRight: 10,
    backgroundColor: 'orangered',
  },
  NavbarBodyItem: {
    width: '100%',
  },
  NavbarBodyItemIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgb(250, 250, 250)',
    width: '100%',
    paddingVertical: 20,
  },
  navIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  NavbarBodyItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ModalFooterItem: {
    padding: 10,
    borderRadius: 50,

    width: '30%',
    paddingVertical: 10,
    textAlign: 'center',
    marginBottom: 10,
    marginHorizontal: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default ProfieBar;
