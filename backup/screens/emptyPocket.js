import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ToastAndroid } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export default function Pocket() {

    return (
        <View>

            <View style={{ backgroundColor: "#f2f2f1", height: 60, justifyContent: "center",
              elevation: 10 }}>
                <Text style={{ marginLeft: 20, color: "#000" }}>Pocket</Text>
                <TouchableOpacity style={{ marginTop: -23, marginLeft: 350 }} onPress={()=>alert("")}>
                <AntDesign name="close" size={22} color="#000" />
                </TouchableOpacity>
            </View>

            <FontAwesome name="get-pocket" color="#000" size={100} style={{ alignSelf: "center", marginTop: 200 }} />
            <Text style={{ alignSelf: "center", marginTop: 10, fontSize: 30, color: "#000" }}>No Items Saved Yet</Text>
            <Text style={{ alignSelf: "center", marginTop: 10 }}>All the posts you have saved</Text>
            <Text style={{ alignSelf: "center" }}>will saved here</Text>

        </View>
    )
}
