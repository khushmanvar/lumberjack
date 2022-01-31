import React, { useState, useEffect } from 'react';
import { Text, View, Animated, FlatList, TouchableOpacity, Image, Dimensions, ImageBackground, LogBox
} from 'react-native';
import { SimpleLineIcons, Ionicons, FontAwesome, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { Camera } from 'expo-camera';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from '@react-native-community/blur';
import Swiper, {} from 'react-native-swiper';
import VideoScreen from './Trending';
import Create from './Create';
import CreateMeme from './CreateMeme';
import MemeEditor from './MemeEditor';
import MemeEditor2 from './MemeEditor2';
import Debug from './debug';
import Debug1 from './debug1';
import Profile from './Profile';
import Post from './Post';
import Pocket from './Pocket';
import Notifications from './Notifications';
import Trending from './Trending';
import VideoMeme from './Create/VideoMeme';
import VideoMeme1 from './Create/Screen1';
import VideoMemeScreenSel from './Create/ScreenSel';
import VideoMemeScreen2 from './Create/Screen2';
import VideoMemeScreen3 from './Create/Screen3';


const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

function CameraScreen({ navigation }) {

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [blur, setBlur] = useState(false)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()}, []);

  if (hasPermission === null) {return <View />;}
  if (hasPermission === false) {return <Text>No access to camera</Text>;}

  return (
    <View style={{ flex: 1 }}>
      
      <Camera type={type} ratio={"16:9"} style={{ flex: 1 }}>
      
      <Swiper loop={false} index={0} showsButtons={false} style={{ width: 2.5*WIDTH, height:HEIGHT }}
        dot={(<View style={{ width:0,height:0}} />)} activeDot={(<View style={{ width:0,height:0 }}/>)}>
        
        <View style={{ width:WIDTH/2, height:HEIGHT, backgroundColor: "transparent" }} />
        <View style={{ backgroundColor: "#000", width: WIDTH/2, height: HEIGHT }}>

          <Text style={{ alignSelf:"center", marginTop: 8, fontFamily: "chocob",fontSize:15, color: "#fff" }}>create with</Text>         
          <Text style={{ alignSelf:"center", marginTop: 100, fontFamily: "roof", fontSize: 70, 
              color: blur ? "#fff" : "#f2f2f1" }}>
            {"h\na\ns\nh\ny"}</Text>
          
          
          <TouchableOpacity
            onPress={() => alert("")} activeOpacity={1}
            style={{ borderTopLeftRadius:50,borderBottomLeftRadius:50,width:30,height:100,backgroundColor:"#fff",
                  marginTop: -250,borderWidth:0,marginLeft: 167 }}>
              <Text></Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", marginTop: 300 }}>
            <TouchableOpacity  style={{ marginLeft: 10 ,alignItems:"center",justifyContent:"center", width:60, height:50 }}
                    onPress={() => navigation.navigate("Debug1")}>
              <FontAwesome5 name="pen-alt" size={30} color="#fff" /></TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 0,alignItems:"center",justifyContent:"center", width:60, height:50 }}>
              <FontAwesome name="camera" size={30} color="#fff" /></TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 0,alignItems:"center",justifyContent:"center", width:60, height:50 }}>
              <FontAwesome name="video-camera" size={30} color="#fff" /></TouchableOpacity>
          </View>
        </View>

        <View style={{ backgroundColor: "#fff", width:WIDTH/2, height: HEIGHT, 
                      borderWidth:6,borderColor:"#fff",borderTopWidth: 0 }}>
          
          <View style={{ width:WIDTH/2, height:HEIGHT }}>
            <View style={{ borderBottomWidth: 2, borderColor: "#fff" }}>
              <ImageBackground style={{ backgroundColor: "#fff",width: WIDTH/2, height: WIDTH/2, resizeMode: "cover"  }}
                  source={require("../assets/1.jpg")}>

                  <LinearGradient 
                    colors={["#000", "transparent"]} style={{ height: 170 }}/>

                  <View style={{ flexDirection: "row", marginTop: -160 }}>
                    <TouchableOpacity style={{ marginLeft: 100,alignItems:"center",justifyContent:"center", width:45, height:45 }}>
                      <FontAwesome5 name="user-alt" size={27} color="#fff" /></TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 0,alignItems:"center",justifyContent:"center", width:45, height:45 }}>
                      <FontAwesome name="cog" size={29} color="#fff" /></TouchableOpacity>
                  </View>    

                  <Text style={{ fontSize:15,marginLeft:13,fontFamily:"choco",marginTop:100,color:"#fff",textShadowRadius: 10,
                      textShadowColor:'rgba(0, 0, 0, 0.7)', textShadowOffset: {width: -1, height: 1}}}> explore</Text>        
              </ImageBackground></View>
              
            <View style={{ borderBottomWidth: 3, borderColor: "#fff" }}>
              <ImageBackground style={{ backgroundColor: "#fff", width: WIDTH/2, height: WIDTH/2, resizeMode: "contain",
                                alignItems:"center",justifyContent:"center"  }}
                  source={require("../assets/3.jpg")}>
                  <Text style={{ fontFamily: "chocob", fontSize:40, color:"#fff",
                        textShadowColor: 'rgba(0, 0, 0, 0.7)', textShadowOffset: {width: -1, height: 1},
                        textShadowRadius: 10 }}># 1</Text>
              </ImageBackground></View>
            
            <View>
            <Video style={{ backgroundColor: "#f2f2f1", height: HEIGHT/2, width: WIDTH/2 }}
                  source={require("../assets/1.mp4")}
                  shouldPlay isMuted={true} isLooping={true} volume={1.0} rate={1.0} resizeMode={Video.RESIZE_MODE_COVER}/></View>

            <View style={{ marginTop: -HEIGHT/2, height: HEIGHT/2 }}>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <FontAwesome name="play" size={20} color="#fff" style={{ marginLeft: 10 }} />
                <Text style={{ fontSize: 15, color: "#fff", marginTop: -6, marginLeft: 10, fontFamily: "choco" }}>videos for you</Text>
        
              </View>

              <LinearGradient
                colors={["transparent" , "#000"]} style={{ height: 80, marginTop: 270, width: WIDTH }} />
            </View>
          
          </View>           
        </View>
        
      </Swiper>  
      
      </Camera>

      {blur ? <BlurView style={{ position: "absolute",top:0,bottom:0,left:0,right:0}} 
        blurType="light" blurAmount={100} /> : null}
      

    </View>
  )

}

Trending.navigationOptions = {header: null, animationEnabled: false};
CameraScreen.navigationOptions = {header: null, animationEnabled: false};
Debug.navigationOptions = {header: null, animationEnabled: false};
Debug1.navigationOptions = { header: null, animationEnabled: false };
Create.navigationOptions = {header: null, animationEnabled: false};
CreateMeme.navigationOptions = {header: null, animationEnabled: false};
MemeEditor.navigationOptions = {header: null, animationEnabled: false};
MemeEditor2.navigationOptions = {header: null, animationEnabled: false};
Notifications.navigationOptions = {header: null, animationEnabled: false};
Pocket.navigationOptions = {header: null, animationEnabled: false};
Profile.navigationOptions = { header: null, animationEnabled: false };
Post.navigationOptions = { header: null, animationEnabled: false };
VideoMeme.navigationOptions = {header: null, animationEnabled: false, 
  cardStyle: {backgroundColor:"rgba(0,0,0,0.7)"}};
VideoMeme1.navigationOptions =  {header: null, animationEnabled: false}
VideoMemeScreenSel.navigationOptions = {header: null, animationEnabled: false, 
  cardStyle: {backgroundColor:"rgba(0,0,0,0.6)"}};
VideoMemeScreen2.navigationOptions = {header: null, animationEnabled: false};
VideoMemeScreen3.navigationOptions = {header: null, animationEnabled: false}

LogBox.ignoreAllLogs = true;

export default createAppContainer(
  createStackNavigator({
    Trending: Trending,
    CameraScreen: CameraScreen,
    Debug: Debug,
    Debug1: Debug1,
    Create: Create,
    CreateMeme: CreateMeme,
    MemeEditor: MemeEditor,
    MemeEditor2: MemeEditor2,
    Notifications: Notifications,
    Pocket: Pocket,
    Profile: Profile,
    Post: Post,
    VideoMeme: VideoMeme,
    VideoMeme1: VideoMeme1,
    VideoMemeScreenSel: VideoMemeScreenSel,
    VideoMemeScreen2: VideoMemeScreen2,
    VideoMemeScreen3: VideoMemeScreen3
  },{
    initialRouteName: "CameraScreen"
  })
)

console.disableYellowBox = true

/*

<LinearGradient
          colors={['#ffd700', '#00cccc']}
          start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
          style={{ borderRadius:50,width:81.5,height:81.5,alignSelf:"center",backgroundColor:"#ffd700",marginTop: -100,alignItems:"center",justifyContent:"center",
          marginLeft: -220 }}>
            <TouchableOpacity style={{ width: 75,height: 75,borderRadius: 45,alignSelf: 'center',borderColor: '#fff',
                  borderWidth: 2.3,alignItems:"center",justifyContent:"center",backgroundColor:"#000" }}
                  onPress={() => alert("")}>
              <FontAwesome5 name="pen-alt" size={30} color="#fff" />
            </TouchableOpacity>
        </LinearGradient>
<Carousel
          data={[ {id:"1"}, {id:"2"}, {id:"3"}, {id:"4"}, {id:"5"}, {id:"6"}, {id:"7"}, {id:"8"}, {id:"9"}, {id:"10"}]}
          sliderHeight={100}
          itemHeight={100}
          sliderWidth={WIDTH}
          itemWidth={WIDTH}
          horizontal={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => _renderItem(item)}/>
*/
/*
<Text style={{ alignSelf:"center", marginTop: 8, fontFamily: "chocob",fontSize:15, color: "#fff" }}>create with</Text>         
          <Text style={{ alignSelf:"center", marginTop: 100, fontFamily: "roof", fontSize: 70, 
              color: blur ? "#fff" : "#f2f2f1" }}>
            {"h\na\ns\nh\ny"}</Text>
          
          
          <TouchableOpacity
            onPress={() => alert("")} activeOpacity={1}
            style={{ borderTopLeftRadius:50,borderBottomLeftRadius:50,width:30,height:100,backgroundColor:"#fff",
                  marginTop: -250,borderWidth:0,marginLeft: 167 }}>
              <Text></Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", marginTop: 300 }}>
            <TouchableOpacity  style={{ marginLeft: 10 ,alignItems:"center",justifyContent:"center", width:60, height:50 }}
                    onPress={() => navigation.navigate("Debug1")}>
              <FontAwesome5 name="pen-alt" size={30} color="#fff" /></TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 0,alignItems:"center",justifyContent:"center", width:60, height:50 }}>
              <FontAwesome name="camera" size={30} color="#fff" /></TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 0,alignItems:"center",justifyContent:"center", width:60, height:50 }}>
              <FontAwesome name="video-camera" size={30} color="#fff" /></TouchableOpacity>
          </View>
          */