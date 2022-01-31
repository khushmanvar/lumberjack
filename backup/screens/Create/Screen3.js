import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, Share } from 'react-native'
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const WIDTH = Dimensions.get("window").width;

export default function Screen3({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: "#25272a" }}> 
            
            <View style={{ backgroundColor: "#25272a", height: 50, flexDirection: "row" }}>
                <TouchableOpacity style={{ marginLeft:10,marginTop:15,flexDirection:"row" }}
                    onPress={()=> navigation.goBack()}>
                    <AntDesign name="left" size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 300, marginTop: 12 }} onPress={()=> {
                    //navigation.navigate("VideoMemeScreen3")
                    //let res = await captureRef(viewRef, {format:"jpg",quality:1}).then(r => Sharing.shareAsync(r))
                    }}>
                    <Text style={{ color:"#00ffff",fontSize:15,fontFamily:"frgm"}}>DONE</Text>
                </TouchableOpacity>
            </View>

            <View style={{ width:WIDTH-50, height:WIDTH-50, backgroundColor:"#f2f2f1",
                alignSelf:"center",marginTop:40 }}>
            </View>
            
            <View style={{ flexDirection: "row", marginTop: 90 }}>
                <View>
                <View style={{ backgroundColor: "#3a3e42",width: 105,height:105,borderRadius:10,marginLeft:18,
                                alignItems:"center", justifyContent:"center"}}>
                    <FontAwesome5 name="plus" color="#fff"size={48} /></View>
                <Text style={{ color:"#fff",marginLeft:30,fontFamily:"frgb",
                    fontSize:13, marginTop:10 }}>ADD POST</Text></View>
                <View>
                <View style={{ backgroundColor: "#3a3e42",width: 105,height:105,borderRadius:10,marginLeft:21,
                                alignItems:"center", justifyContent:"center"}}>
                    <FontAwesome name="save" color="#fff"size={50} /></View>
                <Text style={{ color:"#fff",marginLeft:55,fontFamily:"frgb",
                    fontSize:13, marginTop:10 }}>SAVE</Text></View>
                <View>
                <View style={{ backgroundColor: "#3a3e42",width: 105,height:105,borderRadius:10,marginLeft:18,
                                alignItems:"center", justifyContent:"center"}}>
                    <FontAwesome name="share" color="#fff"size={45} /></View>
                <Text style={{ color:"#fff",marginLeft:48,fontFamily:"frgb",
                    fontSize:13, marginTop:10 }}>SHARE</Text></View>
            </View>
        </View>
    )
}
