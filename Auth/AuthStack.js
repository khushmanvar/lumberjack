import React, { useState, useEffect, createContext } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import Firebase from '../fire';
import Login from './Login'
import Home from '../screens/Home'
import SignUp from './Signup'
import Pocket from '../screens/Pocket'
import Settings from '../screens/Settings'
import Profile from '../screens/Profile'
import Create from '../screens/Create'
import CreateMeme from '../screens/CreateMeme'
import Screen1 from '../screens/Create/Screen1'
import Screen2 from '../screens/Create/Screen2'
import Screen3 from '../screens/Create/Screen3'
import ScreenSel from '../screens/Create/ScreenSel'
import VideoMeme from '../screens/Create/VideoMeme'
import LinearGradient from 'react-native-linear-gradient'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();
const HEIGHT = Dimensions.get("window").height;

function AuthScreen({ navigation }) {
    return(
        <View style={{ flex: 1, height: HEIGHT,
                            backgroundColor: '#7fffd4', marginTop: -40 }}>  

            <LinearGradient
                colors={['#ffd700', 'transparent']}
                style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 600 }}/>    

            <View style={{ borderRadius: 40, borderWidth: 10, borderColor: "#000", alignItems: "center",
                marginTop: HEIGHT / 2.5, alignSelf: "center", justifyContent: "center", 
                height: 150, width: 150 }}>
                <Text style={{ fontSize: 50, fontFamily: "roof", color: "#000" }}>#y</Text>
            </View>

            <View style={{ flexDirection: "row", marginTop: 280, alignSelf: "center" }}>
                <TouchableOpacity style={{ backgroundColor: "#fff", borderRadius: 30, width: 130, height: 50,
                    alignItems: "center", justifyContent: "center" }}
                    onPress={() => navigation.navigate("Login")}>
                    <Text style={{ fontSize: 18, fontFamily: "frgb", color: "#000" }}>Log In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: "#000", borderRadius: 30, width: 140, height: 50,
                    alignItems: "center", justifyContent: "center", marginLeft: 20 }}
                    onPress={() => navigation.navigate("Signup")}>
                    <Text style={{ fontSize: 18, fontFamily: "frgb", color: "#fff" }}>Sign Up</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

function SignInStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Pocket" component={Pocket} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Create" component={Create}/>
                <Stack.Screen name="CreateMeme" component={CreateMeme}/>
                <Stack.Screen name="Screen1" component={Screen1}/>
                <Stack.Screen name="Screen2" component={Screen2}/>
                <Stack.Screen name="Screen3" component={Screen3}/>
                <Stack.Screen name="ScreenSel" component={ScreenSel}/>
                <Stack.Screen name="VideoMeme" component={VideoMeme}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function SignOutStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="Auth">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Auth" component={AuthScreen} />
                <Stack.Screen name="Signup" component={SignUp}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default function AuthStack() {
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState(null)
  
    // Handle user state changes
    function onAuthStateChanged(result) {
      setUser(result)
      if (initializing) setInitializing(false)
    }
  
    useEffect(() => {
      const authSubscriber = Firebase.auth().onAuthStateChanged(onAuthStateChanged)
  
      // unsubscribe on unmount
      return authSubscriber
    }, [])
  
    if (initializing) {
      return null
    }
  
    return user ? (
      <AuthContext.Provider value={user}>
        <SignInStack />
      </AuthContext.Provider>
    ) : (
      <SignOutStack />
    )
}

export const AuthContext = createContext(null)