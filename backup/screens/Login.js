import React , { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, ProgressBarAndroid, TextInput
} from 'react-native';
import * as firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';

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
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(  this.setState({ progressbarValue: true }))
            .catch(error => this.updatePropgressBarValue(error.message));
    };

    updatePasswordVisible = () => {
        const pState = this.state.passwordVisible;
        const nState = !this.state.passwordVisible;
        this.setState({ passwordVisible: nState })
    };

    updatePropgressBarValue = (message) => {
        const pState = this.state.progressbarValue;
        const nState = !this.state.progressbarValue;
        this.setState({ progressbarValue: nState })
        Alert.alert("", message)
    }

    render () {
        return(
            <View style={{ backgroundColor: "#fff", marginTop: -30 }}>
                <ProgressBarAndroid style={{ paddingTop: 10, marginTop: 20 }} styleAttr="Horizontal" color="#ffba00" animating={this.state.progressbarValue}/>

                <TouchableOpacity style={{ marginLeft: 25, width: 25,marginTop: 20, alignItems: "center" }}
                    onPress={() => this.props.navigation.navigate("Auth")}>
                    <Ionicons name="md-arrow-round-back" size={24} color="#000" />
                </TouchableOpacity>

                <Text style={{ alignSelf: "center", fontFamily: "frgb", fontSize: 25, marginTop: 50, color: "#000" }}>
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
                        secureTextEntry={this.state.passwordVisible}
                        onChangeText={p => this.setState({ password: p })}
                        value={this.state.password}/>
                        
                    <TouchableOpacity style={{ width: 30, height: 30, marginTop: 10 }}
                        onPress={() => this.updatePasswordVisible()} activeOpacity={1}>
                        {this.state.passwordVisible ? (<Ionicons name="md-eye-off" size={30} color="gray" />) :
                            (<Ionicons name="md-eye" size={30} color="gray" />)}
                    </TouchableOpacity>
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