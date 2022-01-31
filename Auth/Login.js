import React , { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, 
         TextInput, Dimensions
} from 'react-native';
import Firebase from '../fire';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HEIGHT = Dimensions.get("window").height;

export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            progressbarValue: false,
            passwordVisible: true,
        };
    };

    handleLogin = () => {

        const { email, password } = this.state;
        
        Firebase.auth().signInWithEmailAndPassword(email, password)
            .then(  this.setState({ progressbarValue: true }))
            .catch(error => this.updatePropgressBarValue(error.message));
    };

    updatePropgressBarValue = (message) => {
        const pState = this.state.progressbarValue;
        const nState = !this.state.progressbarValue;
        this.setState({ progressbarValue: nState })
        Alert.alert("", message)
    }

    render () {
        return(
            <View style={{ backgroundColor: "#fff", height: HEIGHT }}>

                <Text style={{ alignSelf: "center", fontFamily: "frgb", fontSize: 25, marginTop: 100, color: "#000" }}>
                    Log In</Text>
                
                <View style={{ flexDirection: "row", marginTop: 150, width: 300,
                        borderBottomWidth: 1, alignSelf: "center", borderColor: "gray"  }}>
                    <TextInput
                        style={{ width: 250, marginLeft: 10, marginTop: 10, fontSize: 15,
                        fontFamily: "type" , paddingLeft: 0, paddingBottom: 5 }}
                        autoCapitalize="none"
                        placeholder="email"
                        keyboardType="email-address"
                        onChangeText={e => this.setState({ email: e })}
                        value={this.state.email}/>
                </View>

                <View style={{ flexDirection: "row", marginTop: 40, width: 300,
                        borderBottomWidth: 1, alignSelf: "center", borderColor: "gray"  }}>
                    <TextInput
                        style={{ width: 250, marginLeft: 10, marginTop: 10, fontSize: 15,
                        fontFamily: "type" , paddingLeft: 0, paddingBottom: 5 }}
                        autoCapitalize="none"
                        placeholder="password"
                        secureTextEntry={true}
                        onChangeText={p => this.setState({ password: p })}
                        value={this.state.password}/>
                        
                </View>

                <TouchableOpacity style={{ width: 200, height: 50, backgroundColor: "silver", borderRadius: 30,
                    alignSelf: "center", marginTop: 200, alignItems: "center", justifyContent: "center" }}
                    onPress={() => this.handleLogin()}>
                    <Text style={{ fontFamily: "frgb", fontSize: 20, color: "#000"  }}>Log In</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent:"center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },
    signup: {
        marginTop: 80,
        alignSelf: "center",
        width: 250,
        backgroundColor: "#fff",
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});