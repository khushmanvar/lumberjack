import React , { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import * as firebase from 'firebase';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';

const WIDTH = Dimensions.get("window").width;

export default function Profile() {

    const [email, setEmail] = React.useState("");

    React.useEffect(() => {
        const email = firebase.auth().currentUser; setEmail(email)
    },[]);

    return(
        <View style={{ flex: 1, backgroundColor: "#fff" }}>

            <View style={{ backgroundColor: "#f2f2f1", height: 60, justifyContent: "center",
              elevation: 10 }}>
                <Text style={{ marginLeft: 20, color: "#000", fontFamily: "chocob" }}>__chain_memer</Text>

                <TouchableOpacity style={{ marginTop: -23, marginLeft: 350 }} onPress={()=>alert("")}>
                    <Feather name="more-vertical" size={22} color="#000" />
                </TouchableOpacity>
            </View>

            <Image 
                style={{ width: 150, height: 150, borderColor: "#fff", borderRadius: 80,
                    marginTop: 30, alignSelf: "center" }}
                source={require("../assets/2.jpg")} />

            <View style={{ justifyContent: "center", marginTop: 20, flexDirection: "row",
                    borderBottomWidth: 1, borderBottomColor: "silver", paddingBottom: 20 }}>
                <View style={{ alignItems: "center", marginLeft: 30 }}>
                    <Text style={{ color: "#000", fontSize: 17 }}>3</Text>
                    <Text style={{ color: "#000" }}>Posts</Text>
                </View>
                <View style={{ alignItems: "center", marginLeft: 30 }}>
                    <Text style={{ color: "#000", fontSize: 17 }}>20</Text>
                    <Text style={{ color: "#000" }}>Followers</Text>
                </View>
                <View style={{ alignItems: "center", marginLeft: 20 }}>
                    <Text style={{ color: "#000", fontSize: 17 }}>100</Text>
                    <Text style={{ color: "#000" }}>Following</Text>
                </View>
            </View>

            
        </View>
    )
}