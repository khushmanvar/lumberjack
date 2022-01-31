import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import Home from './Home';

const DATA = [//{key: "1",title: "Welcome Here! Spread Joy by memes!"},
{key: "2",title: "It's everything you can do with memes!"},
{key: "3",title: "You can do anything with that!"}];

export default function Notifications({ navigation }) {

  const _renderItem = (item) => {
    return(
      <View style={{ flex: 1, justifyContent: "center", flexDirection: "row",
            borderBottomColor: "silver", borderBottomWidth: StyleSheet.hairlineWidth }}>

        <Image source={require("../assets/3.jpg")} 
            style={{ width: 70, height: 70, borderRadius: 40, marginLeft: 30,marginTop: 20, backgroundColor:"#f2f2f1" }} />

        <View style={{ marginLeft: 15, marginTop: 20, width: 200 }}>
          <Text style={{ color: "#000" }}>__chain__memer__</Text>
          <Text style={{ color: "silver" }}>commented on your post</Text>
          <Text style={{ color: "#000", marginTop: 15 }}>{item.title}</Text>
          <TouchableOpacity onPress={()=>alert("")} style={{ paddingBottom: 20, marginTop: 2 }}>
              <Text style={{ color: "#00cccc" }}>See Post</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center", justifyContent: "center", width: 120 }}>
          <Text style={{ fontSize: 13 }}>1d ago</Text>
        </View>
      </View>
    )
  }

   return(
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
          
      <View style={{ backgroundColor: "#f2f2f1", height: 60, justifyContent: "center",
              elevation: 10 }}>
        <Text style={{ marginLeft: 20, color: "#000", fontFamily: "chocob" }}>Activity</Text>
        <TouchableOpacity style={{ marginTop: -23, marginLeft: 350 }} onPress={()=> navigation.goBack()}>
          <AntDesign name="close" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={item => item.key}
        renderItem={({ item }) => _renderItem(item)}/>

    </View>
   )
}