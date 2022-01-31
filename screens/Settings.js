import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const WIDTH = Dimensions.get("window").width;

export default function Settings() {

    return (
        <View>

            <View style={{ backgroundColor: "#f2f2f1", height: 60, justifyContent: "center",
              elevation: 10, width: WIDTH }}>
                <Text style={{ marginLeft: 20, color: "#000", fontFamily: "chocob" }}>Settings</Text>
            </View>

            <FontAwesome name="cog" color="#000" size={100} style={{ alignSelf: "center", marginTop: 200 }} />
            <Text style={{ alignSelf: "center", marginTop: 10, fontSize: 30, color: "#000" }}>User Settings</Text>
            <Text style={{ alignSelf: "center", marginTop: 10 }}>All your settings will appear here</Text> 
        </View>
    )
}
