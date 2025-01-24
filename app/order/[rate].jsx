import { View, Text,Button,TouchableOpacity, StyleSheet, TextInput, Dimensions } from 'react-native'
import { useLocalSearchParams } from "expo-router";
import React, { useState } from 'react'
import SecondaryNavbar from '../../components/SecondaryNavbar';
import Entypo from '@expo/vector-icons/Entypo';
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';

const RatingPage = () => {
  const {rate} = useLocalSearchParams()
  const [ratings, setratings] = useState(1);
  
  return (
  <>
    <SecondaryNavbar centered={true} title={'Rate Product'}/>
    <View style={{flex:1, backgroundColor:'white', paddingHorizontal:20}}>
     <View style={styles.narative}>
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                alignItems:'center'
              }}
            >
              <Octicons name="gift" size={40} color="black" />
              <Text style={{ color: "white", fontSize: 15 }}>
              Submit your review to get 5 points
              </Text>
            </View>
            <Entypo name="chevron-small-right" size={24} color="white" />
        </View>
        <View style={{marginVertical:15, flexDirection:'row', justifyContent:'center', width:'100%'}}>
         { [1,2,3,4,5].map(ratingNum =>(<TouchableOpacity onPress={()=>setratings(ratingNum)} key={ratingNum} style={{width:50, justifyContent:'center', flexDirection:'row', marginHorizontal:5}}>
          <Ionicons name={ "star-sharp"} size={50} color={ratingNum <= ratings ? "#508A7B" :'#f0f0f0'} />
         </TouchableOpacity>))}
        </View>
        <View style={[styles.details]}>
              <TextInput multiline numberOfLines={5} spellCheck placeholder='Would you like to write anything about this product' style={[{lineHeight:5,minHeight:300, textAlign:'justify', fontSize:20,alignContent:'flex-start'  }]} editable/>
        </View>
        <View>
          <TouchableOpacity style={{backgroundColor:'black', paddingVertical:15, borderRadius:20, marginVertical:20}}><Text style={{fontWeight:'700', fontSize:18, textAlign:'center', color:'white'}}>Submit Review</Text></TouchableOpacity>
        </View>
    </View>
  </>
  )
}

const styles = StyleSheet.create({
  narative: {
		backgroundColor: "black",
		marginVertical: 25,
		padding: 25,
		flexDirection: "row",
		justifyContent: "space-between",
		borderRadius: 15,
		alignItems: "center",
	},
  details: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		elevation: 3,
		backgroundColor: "white",
		padding: 10,
		borderRadius: 15,
		marginVertical: 15,
	},
})

export default RatingPage