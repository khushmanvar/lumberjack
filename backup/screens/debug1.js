import { Camera } from 'expo-camera';
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const _renderItem = (item) => {
  return(
    <TouchableOpacity onPress={() => alert("")}
      style={{ width:WIDTH/2, height:200, backgroundColor: "#fff",alignItems:"center",justifyContent:"center"}}>
      <Text style={{ fontSize:20,color:"#000",fontFamily:"aveny" }}>{item.id}</Text>
    </TouchableOpacity>
  )
}

export default function SwiperComponent() {
    return (
      <Camera style={{ flex: 1 }} ratio={"16:9"}>
        
        <Swiper loop={false} index={1} showsButtons={false} style={{ width: 2.5*WIDTH }}
          dot={(<View style={{ width:0,height:0}} />)} activeDot={(<View style={{ width:0,height:0 }}/>)}>

         <View style={{ width:WIDTH/2, height:HEIGHT, backgroundColor: "transparent" }} />
         <View style={{ width: WIDTH/2, height: HEIGHT, backgroundColor: "yellow", marginLeft: WIDTH/2 }}/>
         <View style={{ width: WIDTH/2, height: HEIGHT, backgroundColor: "pink" }}>
           <FlatList
              data={[{id:"1"},{id:"2"},{id:"3"},{id:"4"},{id:"5"},{id:"6"},{id:"7"},{id:"8"},{id:"9"},
                    {id:"10"}]}
              key={i => i.id}
              renderItem={({ item }) => _renderItem(item)} />
         </View>
        </Swiper>
      </Camera>
    )
}