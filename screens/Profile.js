import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const WIDTH = Dimensions.get("window").width;

export default function Settings() {

    return (
        <View>

            <View style={{ backgroundColor: "#f2f2f1", height: 60, justifyContent: "center",
              elevation: 10, width: WIDTH }}>
                <Text style={{ marginLeft: 20, color: "#000", fontFamily: "chocob" }}>
                    Profile</Text>
            </View>

            <FontAwesome5 name="user-alt" color="#000" size={100} style={{ alignSelf: "center", marginTop: 200 }} />
            <Text style={{ alignSelf: "center", marginTop: 30 }}>Your Profile will show up here</Text> 
        </View>
    )
}
