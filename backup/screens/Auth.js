import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';
import Login from './Login'
import Signup from './Signup';

const SCREEN_HEIGHT = Dimensions.get("window").height;

class Auth extends React.Component {
    render() {
        return(
            <View style={{ flex: 1, height: SCREEN_HEIGHT,
                            backgroundColor: '#7fffd4', marginTop: -40 }}>  

                <LinearGradient
                colors={['#ffd700', 'transparent']}
                style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 600 }}/>    

                <View style={{ borderRadius: 40, borderWidth: 10, borderColor: "#000", alignItems: "center",
                    marginTop: SCREEN_HEIGHT / 2.5, alignSelf: "center", justifyContent: "center", 
                    height: 150, width: 150 }}>
                    <Text style={{ fontSize: 50, fontFamily: "roof", color: "#000" }}>#y</Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 280, alignSelf: "center" }}>
                    <TouchableOpacity style={{ backgroundColor: "#fff", borderRadius: 30, width: 130, height: 50,
                        alignItems: "center", justifyContent: "center" }}
                        onPress={() => this.props.navigation.navigate("Login")}>
                        <Text style={{ fontSize: 18, fontFamily: "frgb", color: "#000" }}>Log In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: "#000", borderRadius: 30, width: 140, height: 50,
                        alignItems: "center", justifyContent: "center", marginLeft: 20 }}
                        onPress={() => this.props.navigation.navigate("Signup")}>
                        <Text style={{ fontSize: 18, fontFamily: "frgb", color: "#fff" }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

export default createAppContainer(
    createSwitchNavigator({
        Auth: Auth,
        Login: Login,
        Signup: Signup
    },
    {
       initalRouteName: "Auth" 
    })
)