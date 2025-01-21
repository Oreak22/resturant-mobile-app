import { View, Text,Button,TouchableOpacity } from 'react-native'
import { useLocalSearchParams } from "expo-router";
import React from 'react'

const RatingPage = () => {
  const {rating,data} = useLocalSearchParams()
  // console.log(JSON.parse(rating))
  const assync= async()=>{
    console.log('product')
    const products = useLocalSearchParams()
    console.log(data)
  }
  return (
    <View>
      <Text>RatingPage</Text>
      <TouchableOpacity onPress={assync}><Text>Textssssss</Text></TouchableOpacity>
      <TouchableOpacity></TouchableOpacity>
    </View>
  )
}

export default RatingPage