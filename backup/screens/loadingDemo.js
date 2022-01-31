import React from 'react';
import { View, Image, Dimensions, TouchableOpacity, Alert, Text } from 'react-native';
import { EvilIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const uArray = [
  { id: "1", u: require("../assets/5.jpg") }, { id: "2", u: require("../assets/5.jpg") }, { id: "3", u: require("../assets/5.jpg") }, { id: "4", u: require("../assets/5.jpg") }, { id: "5", u: require("../assets/5.jpg") }, { id: "6", u: require("../assets/5.jpg") }, { id: "7", u: require("../assets/5.jpg") }, { id: "8", u: require("../assets/5.jpg") }, { id: "9", u: require("../assets/5.jpg") }, { id: "10", u: require("../assets/5.jpg") }, { id: "11", u: require("../assets/5.jpg") }, { id: "12", u: require("../assets/5.jpg") }, { id: "13", u: require("../assets/5.jpg") }, { id: "14", u: require("../assets/5.jpg") }, { id: "15", u: require("../assets/5.jpg") }, 
  //{ id: "16", u: require("../assets/5.jpg") }, { id: "17", u: require("../assets/5.jpg") }, { id: "18", u: require("../assets/5.jpg") }, { id: "19", u: require("../assets/5.jpg") }, { id: "20", u: require("../assets/5.jpg") }, { id: "21", u: require("../assets/5.jpg") }, { id: "22", u: require("../assets/5.jpg") }, { id: "23", u: require("../assets/5.jpg") }, { id: "24", u: require("../assets/5.jpg") }, { id: "25", u: require("../assets/5.jpg") }, { id: "26", u: require("../assets/5.jpg") }, { id: "27", u: require("../assets/5.jpg") }, { id: "28", u: require("../assets/5.jpg") }, { id: "29", u: require("../assets/5.jpg") },   
];

export default function Debug() {
    
  const _renderItem = (post) => {
    return(
      <View style={{ flex: 1, backgroundColor: "#000" }}>
  
        <View style={{ flex: 1, marginTop: 10, flexDirection: "row" }}>
  
          <Image style={{ width: 50, height: 50, borderRadius: 23, marginLeft: 15  }} 
          source={require("../assets/3.jpg")}/>
  
          <Text style={{ color: "#fff", marginTop: 7, marginLeft: 20 }}>__chain_memer_</Text>
  
          <Text style={{ color: "silver", marginLeft: 10, fontSize: 15, marginTop: 6 }}>1k</Text>
          <AntDesign name="heart" size={20} color="silver" style={{ marginTop: 11, marginLeft: 8 }}  />
        </View>
  
        <Image source={require("../assets/5.jpg")}
              style={{ width: SCREEN_WIDTH, height: 500, marginTop: 20 }} />
        
        <View style={{ flexDirection: "row", marginTop: 70, alignItems: "center", justifyContent: "center",
          paddingBottom: 10, marginLeft: -100 }}>
  
          <TouchableOpacity style={{ width: 60, height: 60, borderRadius: 30, borderWidth: 1, borderColor: "#fff",
            backgroundColor: "transparent", alignItems: "center", justifyContent: "center" }} activeOpacity={1}>
            <EvilIcons name="heart" size={40} color="#fff" />
          </TouchableOpacity>
  
          <View style={{ width: 230, height: 60, borderRadius: 30, borderWidth: 1, justifyContent: "center",
              borderColor: "#fff", marginLeft: 10 }}>
            <Text style={{ color: "#fff", marginLeft: 20 }}>Write Comment..</Text>
          </View>
  
          <View style={{ width: 60, height: 60, borderRadius: 30, borderWidth: 1, borderColor: "#000",
            backgroundColor: "transparent", alignItems: "center", justifyContent: "center", marginLeft: 10 }}>
            <EvilIcons name="share-google" size={40} color="#fff"  />
          </View>
  
        </View>
      </View>
    )
  }
  
  return(
    <View style={{ flex: 1, marginTop: 0, backgroundColor: "#000" }}>
      <Carousel
        data={uArray}
        renderItem={({ item }) => _renderItem(item)}
        sliderWidth={SCREEN_WIDTH}
        sliderHeight={SCREEN_HEIGHT}
        itemWidth={SCREEN_WIDTH + 100}
        itemHeight={SCREEN_HEIGHT}
        horizontal={true}
        layout={"default"}
        />
    </View>
  )
  
}