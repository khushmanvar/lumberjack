import React from 'react';
import { View, Alert, Text, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as firebase from 'firebase';

export default class SaveScreen extends React.Component {

  state = {
      photo: null
  };

  async checkCameraRollPermission() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status !== 'granted') {
      return false
    }
    return true
  }

 _pickImage = async () => {

    const checkPermissions = await this.checkCameraRollPermission()
    if (!checkPermissions) return

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false
    });

    if (!result.cancelled) {
      this.setState({ photo: result.uri })
      this.uploadImage(result.uri, "test-image");
    }
  };

  
  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const ref = firebase.storage().ref().child("images/" + imageName);
    return ref.put(blob).then(() => Alert.alert("", "Wohooo! Image Uploaded Successfully") );
  }

    render() {

        return (
            <View>

                <Text style={{ alignSelf: "center", paddingTop: 50, fontSize: 30,
                                 }}>post</Text>

                <TouchableOpacity style={{ marginTop: 200, backgroundColor: "#30d5c8", height: 200,
                width: 200, alignSelf: "center", borderRadius: 100, elevation: 10  }} onPress={this._pickImage}>
                    <Text style={{ color: "black", alignSelf: "center", marginTop: 85,
                                    fontSize: 17 }}>fast upload</Text>
                </TouchableOpacity>
                {this.state.photo && 
                <Image source={{ uri: this.state.photo }} style={{ width: 200, height: 200 }} />}

            </View>
        );
    }
  }