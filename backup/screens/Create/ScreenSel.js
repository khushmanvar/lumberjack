import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons';

export default function ScreenSel({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

            <TouchableOpacity style={{ width: 40, marginLeft: 205, alignItems: "center", padding: 10 }}
                onPress={() => navigation.goBack()} activeOpacity={1}>
                <AntDesign name="close" size={18} color="#fff"  />
            </TouchableOpacity>

            <View style={{ width: 220, height: 140, backgroundColor: "#fff", borderRadius: 4, marginTop: 0 }}>

                <TouchableOpacity style={{ justifyContent: "center", height: 45, marginTop: 0 }}>
                   <Text style={{ color: "#000", fontSize: 14, fontFamily: "chocob", marginLeft: 17 }}>
                    Favourites</Text></TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: "center", height: 45 }}>
                   <Text style={{ color: "#000", fontSize: 14, fontFamily: "chocob", marginLeft: 17 }}>
                    Categories</Text></TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: "center", height: 45 }}>
                   <Text style={{ color: "#000", fontSize: 14, fontFamily: "chocob", marginLeft: 17 }}>
                    Add To Pocket..</Text></TouchableOpacity>

            </View>

        </View>
    )
}
