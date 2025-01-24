//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import BottomNav from '../../components/BottomNav';
import { useSelector } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, router } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

// create a component
const settings = () => {
    const userEmail = useSelector(state=>state.globalReducer.userId)
    return (
    <>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
        <View style={styles.container}>
            <View style={{marginVertical:65, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <View style={[styles.profiePicBg]}>
                    <Image source={require('../../assets/img/hangout collection.png')} style={{width:'100%'}} resizeMode='center' resizeMethod='scale'/>
                </View>
                <View style={{justifyContent:'space-evenly', flexDirection:'column', width:'65%'}}>
                    <Text style={{fontSize:20, textTransform:'capitalize', marginBottom:10}}>{userEmail.split('@')[0]}</Text>
                    <Text style={{fontSize:18}}>{userEmail}</Text>
                </View>
                <Link href='/settings/edit-profie' style={{borderLeftColor:'rgba(0,0,0,0.5)', borderLeftWidth:0.5, padding:10}}>
                    <Ionicons name="settings" size={30} color="black" />
                </Link>
            </View>
            <View style={[styles.shadow,{padding:10, marginVertical:20}]}>
                <Link href={'/settings'} style={styles.link}>
                   <View style={{justifyContent:'space-between', flexDirection:'row', alignItems:'center', width:'100%'}}>
                        <View style={{ alignItems:'center', flexDirection:'row'}}>
                            <FontAwesome5 name='map-marker-alt' size={24} color="rgba(0,0,0,0.4)" style={{paddingHorizontal:10}}/>
                            <Text style={{fontSize:20, fontWeight:'500', marginLeft:10}}>Address</Text>
                        </View>
                        <View>
                            <Entypo name="chevron-right" size={24} color="black" />
                        </View>
                   </View>
                </Link>
               
                <Link href={'/settings'} style={styles.link}>
                   <View style={{justifyContent:'space-between', flexDirection:'row', alignItems:'center', width:'100%'}}>
                        <View style={{ alignItems:'center', flexDirection:'row'}}>
                            <MaterialIcons name='payments' size={24} color="rgba(0,0,0,0.4)" style={{paddingHorizontal:10}}/>
                            <Text style={{fontSize:20, fontWeight:'500', marginLeft:10}}>Payment Method</Text>
                        </View>
                        <View>
                            <Entypo name="chevron-right" size={24} color="black" />
                        </View>
                   </View>
                </Link>

                <Link href={'/settings'} style={styles.link}>
                   <View style={{justifyContent:'space-between', flexDirection:'row', alignItems:'center', width:'100%'}}>
                        <View style={{ alignItems:'center', flexDirection:'row'}}>
                            <MaterialCommunityIcons name='ticket-confirmation' size={24} color="rgba(0,0,0,0.4)" style={{paddingHorizontal:10}}/>
                            <Text style={{fontSize:20, fontWeight:'500', marginLeft:10}}>Voucher</Text>
                        </View>
                        <View>
                            <Entypo name="chevron-right" size={24} color="black" />
                        </View>
                   </View>
                </Link>

                <Link href={'/settings'} style={styles.link}>
                   <View style={{justifyContent:'space-between', flexDirection:'row', alignItems:'center', width:'100%'}}>
                        <View style={{ alignItems:'center', flexDirection:'row'}}>
                            <Entypo name='heart' size={24} color="rgba(0,0,0,0.4)" style={{paddingHorizontal:10}}/>
                            <Text style={{fontSize:20, fontWeight:'500', marginLeft:10}}>My Wishlist</Text>
                        </View>
                        <View>
                            <Entypo name="chevron-right" size={24} color="black" />
                        </View>
                   </View>
                </Link>

                <TouchableOpacity onPress={()=> router.replace('/')} style={styles.link}>
                   <View style={{justifyContent:'space-between', flexDirection:'row', alignItems:'center', width:'100%'}}>
                        <View style={{ alignItems:'center', flexDirection:'row'}}>
                            <MaterialCommunityIcons name='logout' size={24} color="rgba(0,0,0,0.4)" style={{paddingHorizontal:10}}/>
                            <Text style={{fontSize:20, fontWeight:'500', marginLeft:10}}>Log Out</Text>
                        </View>
                        <View>
                            <Entypo name="chevron-right" size={24} color="black" />
                        </View>
                   </View>
                </TouchableOpacity>
            </View>
        </View>
        <BottomNav profie={true} />
    </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal:20
    },
    profiePicBg:{
        width:100,
        aspectRatio:1/1,
        borderRadius:50,
        backgroundColor:'red',
        overflow:'hidden',
        marginRight:15
    },
    shadow:{
        shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 3,
        backgroundColor:'white',
        borderRadius:20
    },
    link:{
        paddingVertical:25,
        borderBottomColor:'rgba(0,0,0,0.3)',
        borderBottomWidth:0.5,
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
});

//make this component available to the app
export default settings;
