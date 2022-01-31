import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function CreateMeme({ route, navigation }) {
    
    //const arr = navigation.getParam("imgIndex", []);
    const arr = route.params.imgIndex;
    console.log(arr.length);

    if(arr.length == 1) {
        return(
            <View style={{ flex: 1, backgroundColor: "#3b444b" }} >
                
                <View style={{ backgroundColor: "#000", height: 50, flexDirection: "row" }}>
                    <TouchableOpacity style={{ marginLeft:10,marginTop:15,flexDirection:"row" }}
                        onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
    
                <View>
                    {arr.map((item) => {
                        return(
<View style={{ flexDirection: "column", marginTop: 100, alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity onPress={() => navigation.navigate("MemeEditor", {
                id: 1,
                arr: arr})}

                style={{ width: 220, height: 220, borderColor: "gray", borderWidth: StyleSheet.hairlineWidth, alignSelf: "center" }}>
                <View style={{ width: 180, height: 150, backgroundColor: "silver", alignSelf: "center", marginTop: 50,
                    alignItems: "center", justifyContent: "center"}}>
                    <Ionicons name="ios-person" size={80} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 220, height: 220, borderColor: "gray", borderWidth: StyleSheet.hairlineWidth, borderColor: "gray",
                marginTop: 40, alignItems: "center", justifyContent: "center", alignSelf: "center" }}
                onPress={() => navigation.navigate("MemeEditor", { id: 2, arr: arr })}>
                
                <View style={{ width: 220, height: 220, backgroundColor: "silver", alignSelf: "center", marginTop: 0,
                alignItems: "center", justifyContent: "center"}}>
                    <Ionicons name="ios-person" size={80} />
                </View>
            </TouchableOpacity>
                                </View>)})}
</View></View>)}

    if(arr.length == 2) {
        return(
            <View style={{ backgroundColor: "#3b444b", flex: 1 }}>
            <View style={{ backgroundColor: "#000", height: 50, flexDirection: "row" }}>
                    <TouchableOpacity style={{ marginLeft:10,marginTop:15,flexDirection:"row" }}
                        onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
            <View style={{ flexDirection: "column", alignSelf: "center" }}>

    <TouchableOpacity style={{ width: 220, height: 220, borderWidth: StyleSheet.hairlineWidth, borderColor: "gray",
        marginTop: 100 }} onPress={() => navigation.navigate("MemeEditor", { id: 3, arr: arr })}>
                    
        <View style={{ width: 110, height: 110, backgroundColor: "silver", alignItems: "center", justifyContent: "center",
        borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: "#000" }}>
            <Ionicons name="ios-person" size={50} /></View>

        <View style={{ width: 110, height: 110, alignItems: "center", justifyContent: "center", borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: "#000",
            marginLeft: 110, marginTop: -110 }}></View> 

        <View style={{ width: 110, height: 110, backgroundColor: "silver", alignItems: "center", justifyContent: "center"}}>
            <Ionicons name="ios-person" size={50} /></View> 
    </TouchableOpacity>

    <TouchableOpacity style={{ width: 220, height: 220, borderWidth: StyleSheet.hairlineWidth, borderColor: "gray",
        marginTop: 40, flexDirection: "row" }} onPress={() => navigation.navigate("MemeEditor", { id: 4, arr: arr })}>
        <View style={{ width: 100, height: 100, backgroundColor: "silver", marginTop: 110,marginLeft: 9, alignItems: "center", justifyContent: "center"}}>
            <Ionicons name="ios-person" size={50} /></View> 
        <View style={{ width: 100, height: 100, backgroundColor: "silver", marginTop: 110,alignItems: "center", justifyContent: "center"}}>
            <Ionicons name="ios-person" size={50} /></View> 
    </TouchableOpacity>

        </View>
        </View>
        )
    }

    if(arr.length == 3) {
        return(
            <View style={{ backgroundColor: "#3b444b", flex: 1 }}>
            <View style={{ backgroundColor: "#000", height: 50, flexDirection: "row" }}>
                    <TouchableOpacity style={{ marginLeft:10,marginTop:15,flexDirection:"row" }}
                        onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
            <View style={{ flexDirection: "column", alignSelf: "center" }}>
    
    <TouchableOpacity style={{ width: 220, height: 220, borderWidth: StyleSheet.hairlineWidth, borderColor: "gray",
        marginTop: 100 }} onPress={() => navigation.navigate("MemeEditor", { id: 6, arr: arr })}>
                    
        <View style={{ width: 109, height: 220/3, backgroundColor: "silver", alignItems: "center", justifyContent: "center",
        borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: "#000" }}>
            <Ionicons name="ios-person" size={40} /></View>
        <View style={{ width: 109, height: 220/3, alignItems: "center", justifyContent: "center", borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#000", marginLeft: 109, marginTop: -220/3 }}></View>

        <View style={{ width: 109, height: 220/3, backgroundColor: "silver", alignItems: "center", justifyContent: "center",
        borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: "#000" }}>
            <Ionicons name="ios-person" size={40} /></View>
        <View style={{ width: 109, height: 220/3, alignItems: "center", justifyContent: "center", borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#000", marginLeft: 109, marginTop: -220/3 }}></View>

        <View style={{ width: 109, height: 220/3, backgroundColor: "silver", alignItems: "center", justifyContent: "center"}}>
            <Ionicons name="ios-person" size={40} /></View>
        
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate("MemeEditor", { id: 8, arr: arr })} 
        style={{ width: 220, height: 220, borderWidth: StyleSheet.hairlineWidth, borderColor: "gray",marginTop: 20 }}>
        <View style={{ width: 220/3, height: 85*2.58, backgroundColor: "silver", alignItems: "center", justifyContent: "center",
                borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: "#000" }}>
            <Ionicons name="ios-person" size={40} /></View> 
        <View style={{ width: 220/3, height: 85*2.58, marginLeft: 220/3, marginTop: -85*2.58, backgroundColor: "silver", alignItems: "center", justifyContent: "center",
                borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: "#000" }}>
            <Ionicons name="ios-person" size={40} /></View>
        <View style={{ width: 220/3, height: 85*2.58, marginLeft: (2*220)/3+0.5, marginTop: -85*2.58, backgroundColor: "silver", alignItems: "center", justifyContent: "center", 
                borderRightWidth: StyleSheet.hairlineWidth }}>
            <Ionicons name="ios-person" size={40} /></View> 
    </TouchableOpacity>
        </View>
            </View>
        )
    }

    if(arr.length == 4) {
        return(
        <View style={{ backgroundColor: "#3b444b", flex: 1 }}>
        <View style={{ backgroundColor: "#000", height: 50, flexDirection: "row" }}>
                    <TouchableOpacity style={{ marginLeft:10,marginTop:15,flexDirection:"row" }}
                        onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={20} color="#fff" />
                    </TouchableOpacity>
        </View>

    <View style={{ flexDirection: "column", alignSelf: "center" }}>
    
    <View style={{ flexDirection: "column", alignSelf: "center" }}>
        <TouchableOpacity style={{ width: 210, height: 210, borderWidth: StyleSheet.hairlineWidth, borderColor: "gray",
        marginTop: 20 }} onPress={() => navigation.navigate("MemeEditor", { id: 9, arr: arr })}>
                    
            <View style={{ width: 104.5, height: 210/4, backgroundColor: "silver", alignItems: "center", justifyContent: "center",
            borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: "#000" }}>
                <Ionicons name="ios-person" size={40} /></View>
            <View style={{ width: 104.5, height: 210/4, alignItems: "center", justifyContent: "center", borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: "#000", marginLeft: 104.5, marginTop: -210/4 }}></View>

            <View style={{ width: 104.5, height: 210/4, backgroundColor: "silver", alignItems: "center", justifyContent: "center",
            borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: "#000" }}>
                <Ionicons name="ios-person" size={40} /></View>
            <View style={{ width: 104.5, height: 210/4, alignItems: "center", justifyContent: "center", borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: "#000", marginLeft: 104.5, marginTop: -210/4 }}></View>

            <View style={{ width: 104.5, height: 210/4, backgroundColor: "silver", alignItems: "center", justifyContent: "center",
            borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: "#000" }}>
                <Ionicons name="ios-person" size={40} /></View>
            <View style={{ width: 104.5, height: 210/4, alignItems: "center", justifyContent: "center", borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: "#000", marginLeft: 104.5, marginTop: -210/4 }}></View>

            <View style={{ width: 104.5, height: 210/4, backgroundColor: "silver", alignItems: "center", justifyContent: "center",
            borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: "#000" }}>
                <Ionicons name="ios-person" size={40} /></View>
            <View style={{ width: 104.5, height: 210/4, alignItems: "center", justifyContent: "center", borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: "#000", marginLeft: 104.5, marginTop: -210/4 }}></View>

        </TouchableOpacity>

        <TouchableOpacity style={{ width: 210, height: 210, borderWidth: StyleSheet.hairlineWidth, borderColor: "gray",
        marginTop: 20,flexDirection: "row" }}
        onPress={() => navigation.navigate("MemeEditor", { id: 10, arr: arr })}>
            <View style={{ width: 60*3/4, height: 80, backgroundColor: "silver", marginTop: 120,marginLeft: 15, alignItems: "center", justifyContent: "center", 
                        borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: "#000" }}>
                <Ionicons name="ios-person" size={40} /></View> 
            <View style={{ width: 60*3/4, height: 80, backgroundColor: "silver", marginTop: 120,alignItems: "center", justifyContent: "center", 
                        borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: "#000" }}>
                <Ionicons name="ios-person" size={40} /></View> 
            <View style={{ width: 60*3/4, height: 80, backgroundColor: "silver", marginTop: 120,alignItems: "center", justifyContent: "center" }}>
                <Ionicons name="ios-person" size={40} /></View> 
            <View style={{ width: 60*3/4, height: 80, backgroundColor: "silver", marginTop: 120,alignItems: "center", justifyContent: "center" }}>
                <Ionicons name="ios-person" size={40} /></View> 
        </TouchableOpacity>
        
        <TouchableOpacity style={{ width: 210, height: 210, borderWidth: StyleSheet.hairlineWidth, borderColor: "gray",
            marginTop: 20 }} onPress={() => navigation.navigate("MemeEditor", { id: 12, arr: arr })}>
            <View style={{ width: 210/2, height: 210/2, backgroundColor: "silver", alignItems: "center", justifyContent: "center",
                    borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: "#000" }}>
                <Ionicons name="ios-person" size={40} /></View> 
            <View style={{ width: 210/2, height: 210/2, marginLeft: 210/2, marginTop: -210/2, backgroundColor: "silver", alignItems: "center", justifyContent: "center",
                    borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: "#000" }}>
                <Ionicons name="ios-person" size={40} /></View>
            <View style={{ width: 210/2, height: 210/2, marginLeft: 0, marginTop: 0, backgroundColor: "silver", alignItems: "center", justifyContent: "center", 
                    borderRightWidth: StyleSheet.hairlineWidth }}>
                <Ionicons name="ios-person" size={40} /></View> 
            <View style={{ width: 210/2, height: 210/2, marginLeft: 210/2, marginTop: -210/2, backgroundColor: "silver", alignItems: "center", justifyContent: "center", 
                    borderRightWidth: StyleSheet.hairlineWidth }}>
                <Ionicons name="ios-person" size={40} /></View> 
        </TouchableOpacity>
    </View>
    
        </View>
        </View>
        )
    }
};