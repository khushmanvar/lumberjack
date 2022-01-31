import React from 'react';
import { View, Text, TouchableOpacity, Image, Animated, PanResponder, TextInput, ImageBackground,
    StyleSheet, Dimensions, Modal
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { ColorPicker } from 'react-native-color-picker';
import * as Permissions from 'expo-permissions';
import { captureRef } from 'react-native-view-shot';

const ImageArray = [
    null,require("../assets/tempelates/m1.jpg"), require("../assets/tempelates/m2.jpg"), require("../assets/tempelates/m3.jpg"), require("../assets/tempelates/m4.jpg"), require("../assets/tempelates/m5.jpg"), require("../assets/tempelates/m6.jpg"), require("../assets/tempelates/m7.jpg"), require("../assets/tempelates/m8.jpg"), require("../assets/tempelates/m9.jpg"), require("../assets/tempelates/m10.jpg"), require("../assets/tempelates/m11.jpg"), require("../assets/tempelates/m12.jpg"), require("../assets/tempelates/m13.jpg"), require("../assets/tempelates/m14.jpg"), require("../assets/tempelates/m15.jpg"), require("../assets/tempelates/m16.jpg"), require("../assets/tempelates/m17.jpg"), require("../assets/tempelates/m18.jpg"), require("../assets/tempelates/m19.jpg"), require("../assets/tempelates/m20.jpg"), require("../assets/tempelates/m21.jpg"), require("../assets/tempelates/m22.jpg"), require("../assets/tempelates/m23.jpg"), require("../assets/tempelates/m24.jpg"), require("../assets/tempelates/m25.jpg"), require("../assets/tempelates/m26.jpg"), require("../assets/tempelates/m27.jpg"), require("../assets/tempelates/m28.jpg"), require("../assets/tempelates/m29.jpg"), require("../assets/tempelates/m30.jpg"), require("../assets/tempelates/m31.jpg"), require("../assets/tempelates/m32.jpg"), require("../assets/tempelates/m33.jpg"), require("../assets/tempelates/m34.jpg"), require("../assets/tempelates/m35.jpg"), require("../assets/tempelates/m36.jpg"), require("../assets/tempelates/m37.jpg"), require("../assets/tempelates/m38.jpg"), require("../assets/tempelates/m39.jpg"), require("../assets/tempelates/m40.jpg"), require("../assets/tempelates/m41.jpg"), require("../assets/tempelates/m42.jpg"), require("../assets/tempelates/m43.jpg"), require("../assets/tempelates/m44.jpg"), require("../assets/tempelates/m45.jpg"), require("../assets/tempelates/m46.jpg"), require("../assets/tempelates/m47.jpg"), require("../assets/tempelates/m48.jpg"), require("../assets/tempelates/m49.jpg"), require("../assets/tempelates/m50.jpg"), require("../assets/tempelates/m51.jpg"), require("../assets/tempelates/m52.jpg"), require("../assets/tempelates/m53.jpg"), require("../assets/tempelates/m54.jpg"), require("../assets/tempelates/m55.jpg"), require("../assets/tempelates/m56.jpg"), require("../assets/tempelates/m57.jpg"), require("../assets/tempelates/m58.jpg"), require("../assets/tempelates/m59.jpg"), require("../assets/tempelates/m60.jpg"), require("../assets/tempelates/m61.jpg"), require("../assets/tempelates/m62.jpg"), require("../assets/tempelates/m63.jpg"), require("../assets/tempelates/m64.jpg"), require("../assets/tempelates/m65.jpg"), require("../assets/tempelates/m66.jpg"), require("../assets/tempelates/m67.jpg"), require("../assets/tempelates/m68.jpg"), require("../assets/tempelates/m69.jpg"), require("../assets/tempelates/m70.jpg"), require("../assets/tempelates/m71.jpg"), require("../assets/tempelates/m72.jpg"), require("../assets/tempelates/m73.jpg"), require("../assets/tempelates/m74.jpg"), require("../assets/tempelates/m75.jpg"), require("../assets/tempelates/m76.jpg"), require("../assets/tempelates/m77.jpg"), require("../assets/tempelates/m78.jpg"), require("../assets/tempelates/m79.jpg"), require("../assets/tempelates/m80.jpg"), require("../assets/tempelates/m81.jpg"), require("../assets/tempelates/m82.jpg"), require("../assets/tempelates/m83.jpg"), require("../assets/tempelates/m84.jpg"), require("../assets/tempelates/m85.jpg"), require("../assets/tempelates/m86.jpg"), require("../assets/tempelates/m87.jpg"), require("../assets/tempelates/m88.jpg"), require("../assets/tempelates/m89.jpg"), require("../assets/tempelates/m90.jpg"), require("../assets/tempelates/m91.jpg"), require("../assets/tempelates/m92.jpg"), require("../assets/tempelates/m93.jpg"), require("../assets/tempelates/m94.jpg"), require("../assets/tempelates/m95.jpg"), require("../assets/tempelates/m96.jpg"), require("../assets/tempelates/m97.jpg"), require("../assets/tempelates/m98.jpg"), require("../assets/tempelates/m99.jpg"), require("../assets/tempelates/m100.jpg"),     
];

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").height;

const PanRes = ({ fontSiz, fontFam, fontCol }) => {

    const [textInput, setTextInput] = React.useState("tap and drag to edit text")

    const styles = StyleSheet.create({
        textInputStyle: { fontSize: fontSiz, alignSelf: "center", color: fontCol, fontFamily: fontFam, 
            marginTop: -2,  }});
  
    const pan = React.useRef(new Animated.ValueXY()).current;
    const panResponder = React.useRef(
      PanResponder.create({ onMoveShouldSetPanResponder: (evt, gestureState) => Math.abs(gestureState.dy) > 5,
        onPanResponderGrant: () => {
          pan.setOffset({
            x: pan.x._value,
            y: pan.y._value
          });
        },onPanResponderMove: Animated.event([ null, { dx: pan.x, dy: pan.y } ]),
        onPanResponderRelease: () => {  pan.flattenOffset();  }})).current;
  
    return (
        <Animated.View
          style={{  transform: [{ translateX: pan.x }, { translateY: pan.y }], marginTop: -55,
                backgroundColor: "transparent" }}
          {...panResponder.panHandlers}>
            <TextInput value={textInput} style={styles.textInputStyle}
                        onChangeText={t => setTextInput(t)} />
        </Animated.View>
    );
  }

export default class MemeEditor extends React.Component {

    static navigationOptions = {
        header: null
    };

    componentDidMount() {   Permissions.askAsync(Permissions.CAMERA_ROLL);}
    state = { index: 0, m1: false, m2: false, m3: false, fontSiz: 20, fontFam: "mont", fontCol: "#ffa812" };
    render() {
        const { navigation } = this.props;
        const arr = navigation.getParam("arr", []);
        const id = navigation.getParam("id", "")
        console.log(arr);

        const EleLoop = (index, fontSiz, fontFam, fontCol) => {
            var array = [];
            for (var i=0; i<index; i++) {
              array.push(<PanRes fontSiz={fontSiz} fontFam={fontFam} fontCol={fontCol} />) }
            return array; }
        
        const ImgLay = (ImId) => {
            if(ImId == 1) {
                return(
                    <Image source={ImageArray[arr]} style={{ width: 290, height: 290, alignSelf: "center",
                        backgroundColor: "#f2f2f1", marginTop: 100, resizeMode: "stretch" }} />)}

            if(ImId == 2) {
                return(
                    <Image source={ImageArray[arr]} style={{ width: 400, height: 400, alignSelf: "center",
                        backgroundColor: "#f2f2f1", marginTop: 0, resizeMode: "stretch" }} />)}

            if(ImId == 3) {
                return (<>
                    <View style={{ width: WIDTH, height: 200,borderBottomColor: "#000", borderBottomWidth: 1 }}>
                    <Image source={ImageArray[arr[0]]} style={{ width: 200, height: 200,
                        backgroundColor: "#f2f2f1" }}/></View>
                    <Image source={ImageArray[arr[1]]} style={{ width: 200, height: 200,
                        backgroundColor: "#f2f2f1" }} /></>)}

            if(ImId == 4) {
                return (
                    <View style={{ width: 400, height: 400, backgroundColor: "#fff", flexDirection: "row",
                                    justifyContent: "center" }}>
                    <Image source={ImageArray[arr[0]]} style={{ width: 170, height: 170, marginLeft: 0,
                        backgroundColor: "#f2f2f1", marginTop: 200 }} />
                    <Image source={ImageArray[arr[1]]} style={{ width: 170, height: 170, marginLeft: 0,
                        backgroundColor: "#f2f2f1", marginTop: 200 }} />
                    </View>)}

            if(ImId == 6) {
                return (
                    <View style={{ width: 400, height: 400, backgroundColor: "#fff", flexDirection: "column"}}>
                    
                    <View style={{ width: WIDTH, height: 400/3, borderBottomWidth: 1, borderColor: "#000" }}>
                        <Image source={ImageArray[arr[0]]} style={{ width: 400/3, height: 400/3, marginLeft: 0,
                            backgroundColor: "#fff", resizeMode: "stretch" }} /></View>
                    <View style={{ width: WIDTH, height: 400/3, borderBottomWidth: 1, borderColor: "#000" }}>
                        <Image source={ImageArray[arr[1]]} style={{ width: 400/3, height: 400/3, marginLeft: 0,
                            backgroundColor: "#fff", resizeMode: "stretch" }} /></View>
                    <View style={{ width: WIDTH, height: 400/3, borderBottomWidth: 1, borderColor: "#000" }}>
                        <Image source={ImageArray[arr[2]]} style={{ width: 400/3, height: 400/3, marginLeft: 0,
                            backgroundColor: "#fff", resizeMode: "stretch" }} /></View>
                    </View>)}

            if(ImId == 8) {
                return (
                    <View style={{ width: 400, height: 400, backgroundColor: "#fff", marginTop: 10,
                        flexDirection: "row"}}>

                    
                    <Image source={ImageArray[arr[0]]} style={{ width: 400/3, height: 410, marginLeft: 0,
                        backgroundColor: "#fff", marginTop: -10, resizeMode: "cover",
                            borderRightWidth: 1, marginRight: 2  }} />
                    
                    <Image source={ImageArray[arr[1]]} style={{ width: 400/3, height: 410, marginLeft: 0,
                        backgroundColor: "#fff", marginTop: -10 , resizeMode: "cover",
                            borderRightWidth: 1, marginRight: 2 }} />
                    
                    <Image source={ImageArray[arr[2]]} style={{ width: 400/3, height: 410, marginLeft: 0,
                        backgroundColor: "#fff", marginTop: -10 , resizeMode: "cover",
                            borderRightWidth: 1, marginRight: 2 }} />
                    
                    </View>)}

            if(ImId == 9) {
                return (
                    <View style={{ width: 400, height: 400, backgroundColor: "#fff", flexDirection: "column"}}>
                    
                    <View style={{ width: WIDTH, height: 400/4, borderBottomWidth: 1, borderColor: "#000" }}>
                        <Image source={ImageArray[arr[0]]} style={{ width: 400/2.4, height: 400/4, marginLeft: 0,
                            backgroundColor: "#fff", resizeMode: "stretch" }} /></View>
                    <View style={{ width: WIDTH, height: 400/4, borderBottomWidth: 1, borderColor: "#000" }}>
                        <Image source={ImageArray[arr[1]]} style={{ width: 400/2.4, height: 400/4, marginLeft: 0,
                            backgroundColor: "#fff", resizeMode: "stretch" }} /></View>
                    <View style={{ width: WIDTH, height: 400/4, borderBottomWidth: 1, borderColor: "#000" }}>
                        <Image source={ImageArray[arr[2]]} style={{ width: 400/2.4, height: 400/4, marginLeft: 0,
                            backgroundColor: "#fff", resizeMode: "stretch" }} /></View>
                    <View style={{ width: WIDTH, height: 400/4, borderBottomWidth: 1, borderColor: "#000" }}>
                        <Image source={ImageArray[arr[3]]} style={{ width: 400/2.4, height: 400/4, marginLeft: 0,
                            backgroundColor: "#fff", resizeMode: "stretch" }} /></View>
                    </View>)}

            if(ImId == 10) {
                return (
                    <View style={{ width: 400, height: 400, backgroundColor: "#fff", marginTop: 10,
                        flexDirection: "row"}}>
                    
                    <Image source={ImageArray[arr[0]]} style={{ width: 400/4, height: 200, marginLeft: 0,
                        backgroundColor: "#fff", marginTop: 200, resizeMode: "stretch",
                            borderRightWidth: 1, marginRight: 2  }} />
                    
                    <Image source={ImageArray[arr[1]]} style={{ width: 400/4, height: 200, marginLeft: 0,
                        backgroundColor: "#fff", marginTop: 200 , resizeMode: "stretch",
                            borderRightWidth: 1, marginRight: 2 }} />
                    
                    <Image source={ImageArray[arr[2]]} style={{ width: 400/4, height: 200, marginLeft: 0,
                        backgroundColor: "#fff", marginTop: 200 , resizeMode: "stretch",
                            borderRightWidth: 1, marginRight: 2 }} />

                    <Image source={ImageArray[arr[3]]} style={{ width: 400/4, height: 200, marginLeft: 0,
                        backgroundColor: "#fff", marginTop: 200 , resizeMode: "stretch",
                            borderRightWidth: 1, marginRight: 2 }} />
                    
                    </View>)}

            if(ImId == 12) {
                return (
                    <View style={{ width: 400, height: 400, backgroundColor: "#fff" }}>
                    
                    <Image source={ImageArray[arr[0]]} style={{ width: 200, height: 200, marginLeft: 0,
                        backgroundColor: "#f2f2f1", marginTop: 0, resizeMode: "stretch",
                            borderRightWidth: 1, marginRight: 2  }} />
                        
                    <Image source={ImageArray[arr[1]]} style={{ width: 200, height: 200, marginLeft: 200,
                        backgroundColor: "#f2f2f1", marginTop: -200, resizeMode: "stretch",
                            borderRightWidth: 1, marginRight: 2  }} />

                    <Image source={ImageArray[arr[2]]} style={{ width: 200, height: 200, marginLeft: 0,
                        backgroundColor: "#f2f2f1", marginTop: 0, resizeMode: "stretch",
                            borderRightWidth: 1, marginRight: 2  }} />
                        
                    <Image source={ImageArray[arr[3]]} style={{ width: 200, height: 200, marginLeft: 200,
                        backgroundColor: "#f2f2f1", marginTop: -200, resizeMode: "stretch",
                            borderRightWidth: 1, marginRight: 2  }} />
                    </View>)}
            
        }  
        
        return (
        
    <View style={{ flex: 1, backgroundColor: "#25272a" }}>

        <View style={{ backgroundColor: "#25272a", height: 50, flexDirection: "row" }}>
            <TouchableOpacity style={{ marginLeft:10,marginTop:15,flexDirection:"row" }}
                onPress={()=> navigation.goBack()}>
                <AntDesign name="left" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 300, marginTop: 12 }} onPress={async() => {
                await captureRef(this.memeView, { format:"jpg" , quality:1 })
                    //.then(r => FileSystem.downloadAsync(r, FileSystem.documentDirectory + 'meme.jpg' ))
                    .then((r) => navigation.navigate("MemeEditor2", { uri: r }))
                }}>
                <Text style={{ color:"#00ffff",fontSize:15,fontFamily:"frgm"}}>NEXT</Text>
            </TouchableOpacity>
        </View>
     
        <View ref={(v) => this.memeView = v} collapsable={false} 
            style={{ backgroundColor: "#fff" }}>
            <View style={{ flex: 1 }}>
                {ImgLay(id)}
            </View>
            <View style={{ marginTop: 400 }}>
                {EleLoop(this.state.index, this.state.fontSiz, this.state.fontFam, this.state.fontCol )}
            </View>
        </View>

        <View style={{ marginTop: 80, flexDirection: "row" }} horizontal={false}>        
                <TouchableOpacity style={{ width:75,height:75,backgroundColor:"#fff",
                    marginLeft:15,borderRadius:10,alignItems:"center",justifyContent:"center" }}
                    onPress={() => { const iV = this.state.index; const nV = iV + 1; this.setState({ index: nV }) }}>
                    <FontAwesome5 name="plus" size={30} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={{ width:75,height:75, backgroundColor: this.state.index > 0 ? "#fff":"rgba(250,250,250,0.5)",
                    marginLeft:20,borderRadius:10,alignItems:"center",justifyContent:"center" }}
                    disabled={ this.state.index > 0 ? false : true }
                    onPress={() => { const iV = this.state.index; const nV = iV - 1; this.setState({ index: nV }) }}>
                    <FontAwesome name="repeat" size={30} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={{ width:75,height:75,backgroundColor:"#fff",
                    marginLeft:20,borderRadius:10,alignItems:"center",justifyContent:"center" }}
                    onPress={() => this.setState({ m1: true })}>
                    <Text style={{ color:"#000",fontSize:25,fontFamily: this.state.fontFam }}>{this.state.fontSiz}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width:75,height:75,backgroundColor:"#fff",
                    marginLeft:20,borderRadius:10,alignItems:"center",justifyContent:"center" }}
                    onPress={() => this.setState({ m2 : true })}>
                    <Text style={{ color:"#000",fontSize:25,fontFamily: this.state.fontFam}}>Aa</Text>
                </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ width:75,height:75,backgroundColor:"#fff", marginTop: 20,
            alignSelf: "center", borderRadius:10,alignItems:"center",justifyContent:"center" }}
            onPress={() => this.setState({ m3: true })}>
            <View style={{ width:50,height:50,backgroundColor: this.state.fontCol,borderRadius:40 }} />
        </TouchableOpacity>

        <Modal visible={this.state.m3} transparent={true} onRequestClose={() => this.setState({ m3: false })} >
            <View style={{ backgroundColor: "rgba(0,0,0,0.8)"}}>
            <TouchableOpacity style={{ width:50,height:50,backgroundColor:"rgba(0,0,0,0.8)" }}
                onPress={() => this.setState({ m3: false })}>
                <AntDesign name="left" size={20} color="#fff" style={{ marginLeft:10,marginTop:15 }} />
            </TouchableOpacity></View>
            <View style={{ flex:1 ,backgroundColor: "rgba(0,0,0,0.8)" }}>
                <ColorPicker style={{ flex:1,marginTop:-100 }} onColorSelected={(c) => {
                    this.setState({ fontCol: c, m3: false  })   }} />
                <View style={{ height: 50 }}></View>
            </View>
        </Modal>
        <Modal visible={this.state.m2} transparent={true} onRequestClose={() => this.setState({ m2: false })} >
                <View style={{ backgroundColor: "rgba(0,0,0,0.8)"}}>
                <TouchableOpacity style={{ width:50,height:50,backgroundColor:"rgba(0,0,0,0.8)" }}
                    onPress={() => this.setState({ m2: false })}>
                    <AntDesign name="left" size={20} color="#fff" style={{ marginLeft:10,marginTop:15 }} />
                </TouchableOpacity></View>
                
                <View style={{ flex: 1,backgroundColor:"rgba(0,0,0,0.8)",alignItems:"center",justifyContent:"center"}}>
                    <TouchableOpacity onPress={() => {this.setState({ fontFam: "aveny" }); this.setState({ m2: false })}}
                     style={{ padding: 18,marginTop:-30}}>
                        <Text style={{ fontFamily:"aveny",color:"#fff",fontSize:30}}>Meme Font</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.setState({ fontFam: "avenyM" }); this.setState({ m2: false })}}
                     style={{ padding: 18}}>
                        <Text style={{ fontFamily:"avenyM",color:"#fff",fontSize:30}}>Meme Font</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.setState({ fontFam: "helv" }); this.setState({ m2: false })}}
                     style={{ padding: 18}}>
                        <Text style={{ fontFamily:"helv",color:"#fff",fontSize:30}}>Meme Font</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.setState({ fontFam: "helvb" }); this.setState({ m2: false })}}
                     style={{ padding: 18}}>
                        <Text style={{ fontFamily:"helvb",color:"#fff",fontSize:30}}>Meme Font</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.setState({ fontFam: "anton" }); this.setState({ m2: false })}}
                     style={{ padding: 18}}>
                        <Text style={{ fontFamily:"anton",color:"#fff",fontSize:30}}>Meme Font</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.setState({ fontFam: "mont" }); this.setState({ m2: false })}}
                     style={{ padding: 18}}>
                        <Text style={{ fontFamily:"mont",color:"#fff",fontSize:30}}>Meme Font</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.setState({ fontFam: "ail" }); this.setState({ m2: false })}}
                     style={{ padding: 18}}>
                        <Text style={{ fontFamily:"ail",color:"#fff",fontSize:30}}>Meme Font</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.setState({ fontFam: "csans" }); this.setState({ m2: false })}}
                     style={{ padding: 18}}>
                        <Text style={{ fontFamily:"csans",color:"#fff",fontSize:30}}>Meme Font</Text></TouchableOpacity>
                
                </View>
            </Modal>
        <Modal visible={this.state.m1} transparent={true} onRequestClose={() => this.setState({ m1: false })} >
                <View style={{ backgroundColor: "rgba(0,0,0,0.8)"}}>
                <TouchableOpacity style={{ width:50,height:50,backgroundColor:"rgba(0,0,0,0.8)" }}
                    onPress={() => this.setState({ m1: false })}>
                    <AntDesign name="left" size={20} color="#fff" style={{ marginLeft:10,marginTop:15 }} />
                </TouchableOpacity></View>
                <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0,0,0,0.8)"}}>
                    <TouchableOpacity onPress={()=>{this.setState({ fontSiz: 10 }); this.setState({ m1: false }) }}>
                        <Text style={{color:"#fff",fontSize:40,fontFamily: this.state.fontFam,padding:10}}>10</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.setState({ fontSiz: 20 }); this.setState({ m1: false }) }}>
                        <Text style={{color:"#fff",fontSize:40,fontFamily: this.state.fontFam,padding:10}}>20</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.setState({ fontSiz: 30 }); this.setState({ m1: false }) }}>
                        <Text style={{color:"#fff",fontSize:40,fontFamily: this.state.fontFam,padding:10}}>30</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.setState({ fontSiz: 40 }); this.setState({ m1: false }) }}>
                        <Text style={{color:"#fff",fontSize:40,fontFamily: this.state.fontFam,padding:10}}>40</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.setState({ fontSiz: 50 }); this.setState({ m1: false }) }}>
                        <Text style={{color:"#fff",fontSize:40,fontFamily: this.state.fontFam,padding:10}}>50</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.setState({ fontSiz: 60 }); this.setState({ m1: false }) }}>
                        <Text style={{color:"#fff",fontSize:40,fontFamily: this.state.fontFam,padding:10}}>60</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.setState({ fontSiz: 70 }); this.setState({ m1: false }) }}>
                        <Text style={{color:"#fff",fontSize:40,fontFamily: this.state.fontFam,padding:10}}>70</Text></TouchableOpacity>
                        
                </View>
        </Modal>

    </View>
        )   
    }
}