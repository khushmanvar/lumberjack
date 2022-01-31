import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

function MainScreen({ navigation }) {

    return (
        <View style={{ flex: 1}}>

            <LinearGradient
                colors={["#000","transparent"]}
                style={{ height: 300 }}/>

            <TouchableOpacity style={{ marginLeft: 350, marginTop: -270, width: 50 }}
                onPress={()=> navigation.goBack()}>
                <Ionicons name="md-close" size={28} color="#fff" />
            </TouchableOpacity>

            <FontAwesome name="video-camera"color="#f2f2f1" size={100} style={{alignSelf:"center",marginTop:70}} />
            <Text style={{ alignSelf: "center", marginTop: 30, fontSize: 25, fontFamily: "chocob", color: "#fff" }}>
                Create With Hash-Y</Text>
            <Text style={{ alignSelf: "center", marginTop: 13, fontSize: 12, fontFamily: "choco", color: "#fff"}}>
                Record short videos and customize them
            </Text>
            <Text style={{alignSelf:"center",marginTop:5,fontSize:12,fontFamily:"choco",color:"#fff"}}>
                with cool crafted filters. Also try video tempelates
            </Text>

            <TouchableOpacity style={{ width: 300, height: 50, backgroundColor: "#fff",borderRadius: 5,
            alignItems:"center",justifyContent:"center", alignSelf:"center",marginTop: 50 }}
                onPress={()=> navigation.navigate("VideoMeme1") }>
                <Text style={{ fontFamily:"choco", color: "#000" }}>Video Tempelates</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 300, height: 50,borderRadius: 5,
            alignItems:"center",justifyContent:"center", alignSelf:"center",marginTop: 10 }}
                onPress={()=>alert("")}>
                <Text style={{ fontFamily:"choco", color: "#fff" }}>Upload Video</Text>
            </TouchableOpacity>

            <LinearGradient
                colors={["transparent","#000"]}
                style={{ height: 200, marginTop: 40 }}/>

        </View>
    )
};

export default MainScreen;
