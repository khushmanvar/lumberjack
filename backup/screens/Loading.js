import React , { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Alert, Dimensions } from 'react-native';
import * as firebase from 'firebase';
import { LinearGradient } from 'expo-linear-gradient';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Auth from './Auth';
import Home from './Home';

const SCREEN_HEIGHT = Dimensions.get("window").height;

class Loading extends React.Component{

    componentDidMount() {

        firebase.auth().onAuthStateChanged(user => this.props.navigation.navigate(user ? "Home" : "Auth"))
        
    }

    render () {
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
    
            </View>
        )
    }
}

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: Loading,
            Home: Home,
            Auth: Auth,
        },
        {
            initialRouteName: "Loading"
        },
        {
            defaultNavigationOptions: {
              headerStyle: {
                elevation: 0,
                marginTop: -100
              }
            }
          }
    )
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent:"center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#7fffd4"
    }
});