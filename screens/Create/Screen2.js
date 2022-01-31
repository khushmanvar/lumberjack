import React from 'react'
import { View, Text, TouchableOpacity, TextInput, Dimensions, Modal, BackHandler } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import { ColorPicker } from 'react-native-color-picker';
import { captureRef } from 'react-native-view-shot';

const WIDTH = Dimensions.get("window").width;

export default function Screen2({ navigation }) {
    const [text, setText] = React.useState("Tap To Add Text");
    const [fc,sFc]=React.useState("#000");const[bc,Sbc]=React.useState("#fff");const[size,Ssize] = React.useState(30);const[fam,setFam]=React.useState("aveny")
    const [m1,s1]=React.useState(false);const[m2,s2]=React.useState(false);const[m3,s3]=React.useState(false);const[m4,s4]=React.useState(false);
    const viewRef = React.createRef();
    
    return (
        <View style={{ flex: 1, backgroundColor: "#3b444b" }}>
            
            <View style={{ backgroundColor: "#000", height: 50, flexDirection: "row" }}>
                <TouchableOpacity style={{ marginLeft:10,marginTop:15,flexDirection:"row" }}
                    onPress={()=> navigation.goBack()}>
                    <AntDesign name="left" size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 300, marginTop: 12 }}>
                    <Text style={{ color:"#00ffff",fontSize:15,fontFamily:"frgm"}}>NEXT</Text>
                </TouchableOpacity>
            </View>

            <View style={{ width: WIDTH,height: WIDTH,alignSelf: "center",backgroundColor: bc,
                    alignItems:"center",justifyContent:"center" }}
                    ref={viewRef} collapsable={false}>
                <TextInput style={{fontSize:size,fontFamily:fam,color:fc}} 
                    value={text} onChangeText={(t)=>setText(t)} multiline={true} textAlignVertical="center"/>
            </View>

            <View style={{ marginTop: 80, flexDirection: "row" }}>
                
                <TouchableOpacity style={{ width:75,height:75,backgroundColor:"#fff",
                    marginLeft:15,borderRadius:10,alignItems:"center",justifyContent:"center" }}
                    onPress={() => s1(true)}>
                    <View style={{ width:60,height:60,backgroundColor:fc,borderRadius:40}} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width:75,height:75,backgroundColor:"#fff",
                    marginLeft:20,borderRadius:10,alignItems:"center",justifyContent:"center" }}
                    onPress={() => s2(true)}>
                    <Text style={{ color:"#000",fontSize:30,fontFamily:fam }}>Aa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width:75,height:75,backgroundColor:"#fff",
                    marginLeft:20,borderRadius:10,alignItems:"center",justifyContent:"center" }}
                    onPress={() => s3(true)}>
                    <Text style={{ color:"#000",fontSize:30,fontFamily:"aveny"}}>{size}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width:75,height:75,backgroundColor:bc,
                    marginLeft:20,borderRadius:10,alignItems:"center",justifyContent:"center" }}
                    onPress={() => s4(true)}>
                    <View style={{ width:60,height:60,backgroundColor:"#fff",borderRadius:40,borderWidth:1}} />
                </TouchableOpacity>
            </View>

            <Text style={{ marginTop:130,alignSelf:"center",fontSize:12,fontFamily:"choco",color:"silver"}}>
                Add a funny meme text before your video</Text>
            
            <Modal visible={m1} transparent={true} onRequestClose={() => s1(false)} >
                <View style={{ backgroundColor: "rgba(0,0,0,0.8)"}}>
                <TouchableOpacity style={{ width:50,height:50,backgroundColor:"rgba(0,0,0,0.8)" }}
                    onPress={() => s1(false)}>
                    <AntDesign name="left" size={20} color="#fff" style={{ marginLeft:10,marginTop:15 }} />
                </TouchableOpacity></View>
                <View style={{ flex:1 ,backgroundColor: "rgba(0,0,0,0.8)" }}>
                    <ColorPicker style={{ flex:1,marginTop:-100 }} onColorSelected={c=>{sFc(c); s1(false)}} />
                    <View style={{ height: 50 }}></View>
                </View>
            </Modal>        
            <Modal visible={m2} transparent={true} onRequestClose={() => s2(false)} >
                <View style={{ backgroundColor: "rgba(0,0,0,0.8)"}}>
                <TouchableOpacity style={{ width:50,height:50,backgroundColor:"rgba(0,0,0,0.8)" }}
                    onPress={() => s2(false)}>
                    <AntDesign name="left" size={20} color="#fff" style={{ marginLeft:10,marginTop:15 }} />
                </TouchableOpacity></View>
                <View style={{ flex: 1,backgroundColor:"rgba(0,0,0,0.8)",alignItems:"center",justifyContent:"center"}}>
                    <TouchableOpacity onPress={() => {setFam("aveny");s2(false)}} style={{ padding: 18,marginTop:-30}}>
                        <Text style={{ fontFamily:"aveny",color:"#fff",fontSize:30}}>Meme Font</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => {setFam("avenyM");s2(false)}} style={{ padding: 18}}>
                        <Text style={{ fontFamily:"avenyM",color:"#fff",fontSize:30}}>Meme Font</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => {setFam("helv");s2(false)}} style={{ padding: 18}}>
                        <Text style={{ fontFamily:"helv",color:"#fff",fontSize:30}}>Meme Font</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => {setFam("helvb");s2(false)}} style={{ padding: 18}}>
                        <Text style={{ fontFamily:"helvb",color:"#fff",fontSize:30}}>Meme Font</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => {setFam("anton");s2(false)}} style={{ padding: 18}}>
                        <Text style={{ fontFamily:"anton",color:"#fff",fontSize:30}}>Meme Font</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => {setFam("mont");s2(false)}} style={{ padding: 18}}>
                        <Text style={{ fontFamily:"mont",color:"#fff",fontSize:30}}>Meme Font</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => {setFam("ail");s2(false)}} style={{ padding: 18}}>
                        <Text style={{ fontFamily:"ail",color:"#fff",fontSize:30}}>Meme Font</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => {setFam("csans");s2(false)}} style={{ padding: 18}}>
                        <Text style={{ fontFamily:"csans",color:"#fff",fontSize:30}}>Meme Font</Text></TouchableOpacity>
                
                </View>
            </Modal>
            <Modal visible={m3} transparent={true} onRequestClose={() => s3(false)} >
                <View style={{ backgroundColor: "rgba(0,0,0,0.8)"}}>
                <TouchableOpacity style={{ width:50,height:50,backgroundColor:"rgba(0,0,0,0.8)" }}
                    onPress={() => s3(false)}>
                    <AntDesign name="left" size={20} color="#fff" style={{ marginLeft:10,marginTop:15 }} />
                </TouchableOpacity></View>
                <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0,0,0,0.8)"}}>
                    <TouchableOpacity onPress={()=>{Ssize(10);s3(false)}}>
                        <Text style={{color:"#fff",fontSize:40,fontFamily:fam,padding:10}}>10</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Ssize(20);s3(false)}}>
                        <Text style={{color:"#fff",fontSize:40,fontFamily:fam,padding:10}}>20</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Ssize(30);s3(false)}}>
                        <Text style={{color:"#fff",fontSize:40,fontFamily:fam,padding:10}}>30</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Ssize(40);s3(false)}}>
                        <Text style={{color:"#fff",fontSize:40,fontFamily:fam,padding:10}}>40</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Ssize(50);s3(false)}}>
                        <Text style={{color:"#fff",fontSize:40,fontFamily:fam,padding:10}}>50</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Ssize(60);s3(false)}}>
                        <Text style={{color:"#fff",fontSize:40,fontFamily:fam,padding:10}}>60</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Ssize(70);s3(false)}}>
                        <Text style={{color:"#fff",fontSize:40,fontFamily:fam,padding:10}}>70</Text></TouchableOpacity>
                        
                </View>
            </Modal>
            <Modal visible={m4} transparent={true} onRequestClose={() => s4(false)} >
                <View style={{ backgroundColor: "rgba(0,0,0,0.8)"}}>
                <TouchableOpacity style={{ width:50,height:50,backgroundColor:"rgba(0,0,0,0.8)" }}
                    onPress={() => s4(false)}>
                    <AntDesign name="left" size={20} color="#fff" style={{ marginLeft:10,marginTop:15 }} />
                </TouchableOpacity></View>
                <View style={{ flex:1 ,backgroundColor: "rgba(0,0,0,0.8)" }}>
                    <ColorPicker style={{ flex:1,marginTop:-100 }} onColorSelected={c=>{Sbc(c); s4(false)}} />
                    <View style={{ height: 50 }}></View>
                </View>
            </Modal>
        </View>
    )
}
