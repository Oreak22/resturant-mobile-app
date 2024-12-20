import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const BottomNav = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab}>
        <Ionicons name="home-outline" size={24} color="#666" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.tab}>
        <Ionicons name="compass-outline" size={24} color="#666" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.tab}>
        <Ionicons name="receipt-outline" size={24} color="#666" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.tab}>
        <Ionicons name="person-outline" size={24} color="#666" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    zIndex: 1000,
  },
  tab: {
    alignItems: 'center',
    padding: 5,
    backgroundColor:'red'
  },
})

export default BottomNav