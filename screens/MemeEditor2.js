import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image, ToastAndroid, ActivityIndicator } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import * as Sharing from 'expo-sharing';

const WIDTH = Dimensions.get("window").width;

export default function MemeEditor2({ navigation }) {
    const uri = navigation.getParam("uri");
    React.useEffect(() => { Permissions.askAsync(Permissions.CAMERA_ROLL) },[]);
    const [load, setLoaded] = React.useState(true)
    return (
        <View style={{ flex: 1 , backgroundColor: "#25272a" }}>
            
            <View style={{ backgroundColor: "#25272a", height: 50, flexDirection: "row" }}>
                <TouchableOpacity style={{ marginLeft:10,marginTop:15,flexDirection:"row" }}
                    onPress={()=> navigation.goBack()}>
                    <AntDesign name="left" size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 300, marginTop: 12 }}
                    onPress={() => navigation.navigate("Create")}>
                    <Text style={{ color:"#00ffff",fontSize:15,fontFamily:"frgm"}}>DONE</Text>
                </TouchableOpacity>
            </View>

            <Image style={{ width:WIDTH-50, height:WIDTH-50, backgroundColor:"#fff",alignItems:"center",justifyContent:"center",
                alignSelf:"center",marginTop:40 }} source={{ uri: uri }} onLoadEnd={() => setLoaded(false)}/>
            
            <ActivityIndicator size={70} color="#00ffff" style={{ marginTop: -200}} animating={load} />
            <View style={{ flexDirection: "row", marginTop: 230 }}>
                <View>
                <TouchableOpacity style={{ backgroundColor: "#3a3e42",width: 105,height:105,borderRadius:10,marginLeft:18,
                        alignItems:"center", justifyContent: "center" }}
                    onPress={() => navigation.navigate("Post") }>
                    <FontAwesome5 name="plus" color="#fff"size={48} /></TouchableOpacity>
                <Text style={{ color:"#fff",marginLeft:30,fontFamily:"frgb",
                    fontSize:13, marginTop:10 }}>ADD POST</Text></View>
                <View>
                <TouchableOpacity style={{ backgroundColor: "#3a3e42",width: 105,height:105,borderRadius:10,marginLeft:21,
                                alignItems:"center", justifyContent:"center"}}
                    onPress={() => { MediaLibrary.saveToLibraryAsync(uri); 
                                     ToastAndroid.showWithGravity("Saved To Galley Successfully!", ToastAndroid.SHORT, ToastAndroid.CENTER)}}>
                    <FontAwesome name="save" color="#fff"size={50} /></TouchableOpacity>
                <Text style={{ color:"#fff",marginLeft:55,fontFamily:"frgb",
                    fontSize:13, marginTop:10 }}>SAVE</Text></View>
                <View>
                <TouchableOpacity style={{ backgroundColor: "#3a3e42",width: 105,height:105,borderRadius:10,marginLeft:18,
                                alignItems:"center", justifyContent:"center"}}
                    onPress={() => Sharing.shareAsync(uri)}>
                    <FontAwesome name="share" color="#fff"size={45} /></TouchableOpacity>
                <Text style={{ color:"#fff",marginLeft:48,fontFamily:"frgb",
                    fontSize:13, marginTop:10 }}>SHARE</Text></View>
            </View>
        </View>
    )
}
