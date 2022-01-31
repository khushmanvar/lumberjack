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
      
      <Swiper loop={false} containerStyle={{ height:HEIGHT }} index={0} showsButtons={false} style={{ width: 3*WIDTH, height:HEIGHT }}
        dot={(<View style={{ width:0,height:0}} />)} activeDot={(<View style={{ width:0,height:0 }}/>)}>
        
        <View style={{ width: WIDTH, height: HEIGHT, backgroundColor: "transparent" }}>
          
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={{ width: 50, height: 50,alignItems:"center",justifyContent:"center" }}>
              <FontAwesome name="cog" size={32} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 290,width: 50, height: 50,alignItems:"center",justifyContent:"center" }}>
              <FontAwesome5 name="sync-alt" size={26} color="#fff" />
            </TouchableOpacity>
          </View>

          <LinearGradient
              colors={["transparent", "#000"]}
              style={{ width: WIDTH, height: 800, marginTop: 200 }} />

          <View style={{ height: 60, flexDirection: "row", marginTop: -340, backgroundColor: "rgba(255,215,0,1)" }}>

          </View>

          <View style={{ marginTop: -500, marginLeft: 340, flexDirection: "column" }}>
            <TouchableOpacity style={{ width: 50, height: 50,alignItems:"center",justifyContent:"center" }}>
              <FontAwesome5 name="pen-alt" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 50, height: 50,marginTop:15,alignItems:"center",justifyContent:"center" }}>
              <FontAwesome name="video-camera" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 50, height: 50,marginTop:15,alignItems:"center",justifyContent:"center" }}>
              <Text style={{ fontSize: 23, fontFamily: "avenyM", color: "#fff" }}>Aa</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 135, marginLeft: 154,width:90,height:90,borderRadius:50,
                backgroundColor:"transparent",borderWidth:5,borderColor:"#fff" }}>

          </View>

        </View>
        <View style={{ width: WIDTH, height: HEIGHT, backgroundColor: "transparent", flexDirection: "row" }}>

          <View style={{ width: WIDTH/2, height: HEIGHT, backgroundColor: "rgba(30,30,30,0.7)" }}>
            
            <Text style={{ alignSelf:"center", marginTop: 8, fontFamily: "chocob",fontSize:15, color: "#fff" }}>create with</Text>         
            <Text style={{ alignSelf:"center", marginTop: 100, fontFamily: "roof", fontSize: 70, 
                color: blur ? "#fff" : "#f2f2f1" }}>
              {"h\na\ns\nh\ny"}</Text>
            
            
            <View style={{ marginTop: 150 }}>
              <Text style={{ fontSize:15,color:"silver",marginLeft:10 }}>swipe to create meme</Text>
              <Text style={{ fontSize:15,color:"silver",alignSelf:"center",marginTop:-10 }}>with cool filters</Text>
            </View>
          </View>
          <View style={{ width: WIDTH/2, height: WIDTH/2, backgroundColor: "transparent" }}>

            <View style={{ width: WIDTH/2, height: WIDTH/2 }}>
              <View style={{ borderBottomWidth: 2, borderColor: "#fff", borderLeftWidth: 3, borderColor: "#fff" }}>
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
                        textShadowColor:'rgba(255,215,0, 0.7)', textShadowOffset: {width: -1, height: 1}}}> explore</Text>        
                </ImageBackground></View>
                
              <View style={{ borderBottomWidth: 3, borderColor: "#fff", borderLeftWidth: 3, borderColor: "#fff" }}>
                <ImageBackground style={{ backgroundColor: "#fff", width: WIDTH/2, height: WIDTH/2, resizeMode: "contain",
                                  alignItems:"center",justifyContent:"center"  }}
                    source={require("../assets/3.jpg")}>
                    <Text style={{ fontFamily: "chocob", fontSize:40, color:"#ffd700",
                          textShadowColor: 'rgba(255,215,0, 0.7)', textShadowOffset: {width: -1, height: 1},
                          textShadowRadius: 10 }}># 1</Text>
                </ImageBackground></View>
              
              <View style={{ borderColor: "#fff", borderLeftWidth: 3, borderColor: "#fff" }}>
                <Video style={{ backgroundColor: "#f2f2f1", height: HEIGHT/2, width: WIDTH/2 }}
                    source={require("../assets/1.mp4")}
                    shouldPlay isMuted={true} isLooping={true} volume={1.0} rate={1.0} resizeMode={Video.RESIZE_MODE_COVER}/></View>

              <View style={{ marginTop: -HEIGHT/2, height: HEIGHT/2 }}>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <FontAwesome name="play" size={20} color="#fff" style={{ marginLeft: 10 }} />
                  <Text style={{ fontSize: 15, color: "#fff", marginTop: -6, marginLeft: 10, fontFamily: "choco" }}>videos for you</Text>
          
                </View>

                <LinearGradient
                  colors={["transparent" , "#000"]} style={{ height: 80, marginTop: 270, width: WIDTH/2,marginLeft:2 }} />
              </View>
            
            </View>   
          </View>

        </View>
        <View style={{ width: WIDTH, height: HEIGHT, backgroundColor: "#fff" }}>
          <FlatList
            data={[{id:"-2"},{id:"-1"},{id:"0"},{id:"1"},{id:"2"},{id:"3"},{id:"4"},{id:"5"},{id:"6"},{id:"7"},{id:"8"},{id:"9"},{id:"10"},{id:"11"},{id:"12"},{id:"13"},{id:"14"},{id:"15"},{id:"16"},{id:"17"},{id:"18"},{id:"19"},{id:"20"},{id:"21"},{id:"22"},{id:"23"},{id:"24"},{id:"25"},{id:"26"},{id:"27"},{id:"28"},{id:"29"},{id:"30"},{id:"31"},{id:"32"},{id:"33"},{id:"34"},{id:"35"},{id:"36"},{id:"37"},{id:"38"},{id:"39"},{id:"40"},{id:"41"},{id:"42"},{id:"43"},{id:"44"},{id:"45"},{id:"46"},{id:"47"},{id:"48"},{id:"49"},{id:"50"},{id:"51"},{id:"52"},{id:"53"},{id:"54"},{id:"55"},{id:"56"},{id:"57"},{id:"58"},{id:"59"},{id:"60"},{id:"61"},{id:"62"},{id:"63"},{id:"64"},{id:"65"},{id:"66"},{id:"67"},{id:"68"},{id:"69"},{id:"70"},{id:"71"},{id:"72"},{id:"73"},{id:"74"},{id:"75"},{id:"76"},{id:"77"},{id:"78"},{id:"79"},{id:"80"},{id:"81"},{id:"82"},{id:"83"},{id:"84"},{id:"85"},{id:"86"},{id:"87"},{id:"88"},{id:"89"},{id:"90"},{id:"91"},{id:"92"},{id:"93"},{id:"94"},{id:"95"},{id:"96"},{id:"97"},{id:"98"},{id:"99"},{id:"100"}]}
            keyExtractor={item => item.id}
            numColumns={3} showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              if(item.id == -2) return(
                <View style={{ width: WIDTH, height: WIDTH, borderBottomWidth: 1, borderColor: "#fff", backgroundColor: "#f2f2f1" }}>

                </View>)
              if(item.id==7 || item.id==25 || item.id==43 || item.id==61 || item.id==79 || item.id==97 ) return(
                <View style={{ width: (2*WIDTH)/3, height: (2*WIDTH)/3, borderWidth:1.5,borderColor:"#fff",backgroundColor:"#f2f2f1" }}>
                </View>)
              if(item.id==9 || item.id==27 || item.id==45 || item.id==63 || item.id==81 || item.id==99 ) return(
                <View style={{  marginLeft:-WIDTH/3, marginTop:WIDTH/3, width: (2*WIDTH)/3, height:WIDTH/3, borderWidth:1.5,borderColor:"#fff",backgroundColor:"#f2f2f1" }}>
                </View>)
              if(item.id==18 || item.id==36 || item.id==54 || item.id==72 || item.id==90 ) return(
                <View style={{ width: (2*WIDTH)/3, height: (2*WIDTH)/3, borderWidth:1.5,borderColor:"#fff",backgroundColor:"#f2f2f1" }}>
                </View>)
              if(item.id==17 || item.id==35 || item.id==53 || item.id==71 || item.id==89 ) return(
                <View style={{ width: WIDTH/3, height: WIDTH/3, marginTop:WIDTH/3,marginLeft:-WIDTH/3,borderWidth:1.5,borderColor:"#fff",backgroundColor:"#f2f2f1" }}>
                </View>)
                       
              return (<View style={{ width: WIDTH/3, height: WIDTH/3, borderWidth: 1.5, borderColor: "#fff", backgroundColor: "#f2f2f1" }}>
              </View>)
            }} />
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