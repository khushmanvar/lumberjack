import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ToastAndroid } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import Firebase from '../fire';
import { decode, encode } from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

export default function Pocket({ navigation }) {

    const [data, setData] = React.useState([]);
    const [fData, setFData] = React.useState([]);
    const [time, setTime] = React.useState(null);

    React.useEffect(() => {

        Firebase.database().goOnline();
        var ref = Firebase.database().ref('users/' + 'user1');
        let listener = ref.on('value', (snap) => {
            var email = snap.val()
            setData(email);
            console.log(email);
        });

        const usersRef = Firebase.firestore().collection('users');
        usersRef.doc('user2').get().then((doc) => {
            const userData = doc.data();
            setFData(userData);
        })
        console.log("firestore: ",fData);

        usersRef.doc('user4').set({
            email: "user4",
            password: "123456"
        })

        var time = new Date().getHours(); setTime(time); console.log(time);

    },[])

    return (
        <View>

            <View style={{ backgroundColor: "#f2f2f1", height: 60, justifyContent: "center",
              elevation: 10 }}>
                <Text style={{ marginLeft: 20, color: "#000", fontFamily: "chocob" }}>Pocket</Text>
                <TouchableOpacity style={{ marginTop: -23, marginLeft: 350 }} onPress={()=>navigation.goBack()}>
                <AntDesign name="close" size={22} color="#000" />
                </TouchableOpacity>
            </View>

            <FontAwesome name="get-pocket" color="#000" size={100} style={{ alignSelf: "center", marginTop: 200 }} />
            <Text style={{ alignSelf: "center", marginTop: 10, fontSize: 30, color: "#000" }}>No Items Saved Yet</Text>
            <Text style={{ alignSelf: "center", marginTop: 10 }}>All the posts you have saved</Text>
            <Text style={{ alignSelf: "center" }}>will saved here</Text>

            <Text style={{ alignSelf: "center", marginTop: 20, color: "#000" }}>{data.username}</Text>
            <Text style={{ alignSelf: "center", marginTop: 20, color: "#000" }}>{fData.email}</Text>

            <TouchableOpacity onPress={() => {
                Firebase.database().goOffline()
                alert("offline mode")
            }} style={{ alignSelf: "center", marginTop: 20 }}>
                <Text>Off</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                Firebase.database().goOnline()
                alert("back online")
            }} style={{ alignSelf: "center", marginTop: 20 }}>
                <Text>On</Text>
            </TouchableOpacity>

        </View>
    )
}
