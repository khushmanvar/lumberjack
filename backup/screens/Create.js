import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, ScrollView,
        FlatList, Animated, PanResponder, Button, Alert, Picker, ImageBackground, TextInput } from 'react-native';
import * as Permissions from 'expo-permissions';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import FastImage from 'react-native-fast-image';

export default class CreateChild extends React.Component {

    state = { imgHook: null, selectedItem: [] };
    
    fadeAnim = new Animated.Value(0);

    posts2 = [
        //{id: "1", image: require("../assets/tempelates/m1.jpg")},{id: "2", image: require("../assets/tempelates/m2.jpg")},{id: "3", image: require("../assets/tempelates/m3.jpg")},{id: "4", image: require("../assets/tempelates/m4.jpg")},{id: "5", image: require("../assets/tempelates/m5.jpg")},{id: "6", image: require("../assets/tempelates/m6.jpg")},{id: "7", image: require("../assets/tempelates/m7.jpg")},{id: "8", image: require("../assets/tempelates/m8.jpg")},{id: "9", image: require("../assets/tempelates/m9.jpg")},{id: "10", image: require("../assets/tempelates/m10.jpg")},{id: "11", image: require("../assets/tempelates/m11.jpg")},{id: "12", image: require("../assets/tempelates/m12.jpg")},{id: "13", image: require("../assets/tempelates/m13.jpg")},{id: "14", image: require("../assets/tempelates/m14.jpg")},{id: "15", image: require("../assets/tempelates/m15.jpg")},{id: "16", image: require("../assets/tempelates/m16.jpg")},{id: "17", image: require("../assets/tempelates/m17.jpg")},{id: "18", image: require("../assets/tempelates/m18.jpg")},{id: "19", image: require("../assets/tempelates/m19.jpg")},{id: "20", image: require("../assets/tempelates/m20.jpg")},{id: "21", image: require("../assets/tempelates/m21.jpg")},{id: "22", image: require("../assets/tempelates/m22.jpg")},{id: "23", image: require("../assets/tempelates/m23.jpg")},{id: "24", image: require("../assets/tempelates/m24.jpg")},{id: "25", image: require("../assets/tempelates/m25.jpg")},{id: "26", image: require("../assets/tempelates/m26.jpg")},{id: "27", image: require("../assets/tempelates/m27.jpg")},{id: "28", image: require("../assets/tempelates/m28.jpg")},{id: "29", image: require("../assets/tempelates/m29.jpg")},{id: "30", image: require("../assets/tempelates/m30.jpg")},{id: "31", image: require("../assets/tempelates/m31.jpg")},{id: "32", image: require("../assets/tempelates/m32.jpg")},{id: "33", image: require("../assets/tempelates/m33.jpg")},{id: "34", image: require("../assets/tempelates/m34.jpg")},{id: "35", image: require("../assets/tempelates/m35.jpg")},{id: "36", image: require("../assets/tempelates/m36.jpg")},{id: "37", image: require("../assets/tempelates/m37.jpg")},{id: "38", image: require("../assets/tempelates/m38.jpg")},{id: "39", image: require("../assets/tempelates/m39.jpg")},{id: "40", image: require("../assets/tempelates/m40.jpg")},{id: "41", image: require("../assets/tempelates/m41.jpg")},{id: "42", image: require("../assets/tempelates/m42.jpg")},{id: "43", image: require("../assets/tempelates/m43.jpg")},{id: "44", image: require("../assets/tempelates/m44.jpg")},{id: "45", image: require("../assets/tempelates/m45.jpg")},{id: "46", image: require("../assets/tempelates/m46.jpg")},{id: "47", image: require("../assets/tempelates/m47.jpg")},{id: "48", image: require("../assets/tempelates/m48.jpg")},{id: "49", image: require("../assets/tempelates/m49.jpg")},{id: "50", image: require("../assets/tempelates/m50.jpg")},
        //{id: "51", image: require("../assets/tempelates/m51.jpg")},{id: "52", image: require("../assets/tempelates/m52.jpg")},{id: "53", image: require("../assets/tempelates/m53.jpg")},{id: "54", image: require("../assets/tempelates/m54.jpg")},{id: "55", image: require("../assets/tempelates/m55.jpg")},{id: "56", image: require("../assets/tempelates/m56.jpg")},{id: "57", image: require("../assets/tempelates/m57.jpg")},{id: "58", image: require("../assets/tempelates/m58.jpg")},{id: "59", image: require("../assets/tempelates/m59.jpg")},{id: "60", image: require("../assets/tempelates/m60.jpg")},{id: "61", image: require("../assets/tempelates/m61.jpg")},{id: "62", image: require("../assets/tempelates/m62.jpg")},{id: "63", image: require("../assets/tempelates/m63.jpg")},{id: "64", image: require("../assets/tempelates/m64.jpg")},{id: "65", image: require("../assets/tempelates/m65.jpg")},{id: "66", image: require("../assets/tempelates/m66.jpg")},{id: "67", image: require("../assets/tempelates/m67.jpg")},{id: "68", image: require("../assets/tempelates/m68.jpg")},{id: "69", image: require("../assets/tempelates/m69.jpg")},{id: "70", image: require("../assets/tempelates/m70.jpg")},{id: "71", image: require("../assets/tempelates/m71.jpg")},{id: "72", image: require("../assets/tempelates/m72.jpg")},{id: "73", image: require("../assets/tempelates/m73.jpg")},{id: "74", image: require("../assets/tempelates/m74.jpg")},{id: "75", image: require("../assets/tempelates/m75.jpg")},{id: "76", image: require("../assets/tempelates/m76.jpg")},{id: "77", image: require("../assets/tempelates/m77.jpg")},{id: "78", image: require("../assets/tempelates/m78.jpg")},{id: "79", image: require("../assets/tempelates/m79.jpg")},{id: "80", image: require("../assets/tempelates/m80.jpg")},
        //{id: "81", image: require("../assets/tempelates/m81.jpg")},{id: "82", image: require("../assets/tempelates/m82.jpg")},{id: "83", image: require("../assets/tempelates/m83.jpg")},{id: "84", image: require("../assets/tempelates/m84.jpg")},{id: "85", image: require("../assets/tempelates/m85.jpg")},{id: "86", image: require("../assets/tempelates/m86.jpg")},{id: "87", image: require("../assets/tempelates/m87.jpg")},{id: "88", image: require("../assets/tempelates/m88.jpg")},{id: "89", image: require("../assets/tempelates/m89.jpg")},{id: "90", image: require("../assets/tempelates/m90.jpg")},{id: "91", image: require("../assets/tempelates/m91.jpg")},{id: "92", image: require("../assets/tempelates/m92.jpg")},{id: "93", image: require("../assets/tempelates/m93.jpg")},{id: "94", image: require("../assets/tempelates/m94.jpg")},{id: "95", image: require("../assets/tempelates/m95.jpg")},{id: "96", image: require("../assets/tempelates/m96.jpg")},{id: "97", image: require("../assets/tempelates/m97.jpg")},{id: "98", image: require("../assets/tempelates/m98.jpg")},{id: "99", image: require("../assets/tempelates/m99.jpg")},{id: "100", image: require("../assets/tempelates/m100.jpg")},
        //{id: "101", image: require("../assets/tempelates/m101.jpg")},{id: "102", image: require("../assets/tempelates/m102.jpg")},{id: "103", image: require("../assets/tempelates/m103.jpg")},{id: "104", image: require("../assets/tempelates/m104.jpg")},{id: "105", image: require("../assets/tempelates/m105.jpg")},{id: "106", image: require("../assets/tempelates/m106.jpg")},{id: "107", image: require("../assets/tempelates/m107.jpg")},{id: "108", image: require("../assets/tempelates/m108.jpg")},{id: "109", image: require("../assets/tempelates/m109.jpg")},{id: "110", image: require("../assets/tempelates/m110.jpg")},{id: "111", image: require("../assets/tempelates/m111.jpg")},{id: "112", image: require("../assets/tempelates/m112.jpg")},{id: "113", image: require("../assets/tempelates/m113.jpg")},{id: "114", image: require("../assets/tempelates/m114.jpg")},{id: "115", image: require("../assets/tempelates/m115.jpg")},{id: "116", image: require("../assets/tempelates/m116.jpg")},{id: "117", image: require("../assets/tempelates/m117.jpg")},{id: "118", image: require("../assets/tempelates/m118.jpg")},{id: "119", image: require("../assets/tempelates/m119.jpg")},{id: "120", image: require("../assets/tempelates/m120.jpg")},{id: "121", image: require("../assets/tempelates/m121.jpg")},{id: "122", image: require("../assets/tempelates/m122.jpg")},{id: "123", image: require("../assets/tempelates/m123.jpg")},{id: "124", image: require("../assets/tempelates/m124.jpg")},{id: "125", image: require("../assets/tempelates/m125.jpg")},{id: "126", image: require("../assets/tempelates/m126.jpg")},{id: "127", image: require("../assets/tempelates/m127.jpg")},{id: "128", image: require("../assets/tempelates/m128.jpg")},{id: "129", image: require("../assets/tempelates/m129.jpg")},{id: "130", image: require("../assets/tempelates/m130.jpg")},{id: "131", image: require("../assets/tempelates/m131.jpg")},{id: "132", image: require("../assets/tempelates/m132.jpg")},{id: "133", image: require("../assets/tempelates/m133.jpg")},{id: "134", image: require("../assets/tempelates/m134.jpg")},{id: "135", image: require("../assets/tempelates/m135.jpg")},{id: "136", image: require("../assets/tempelates/m136.jpg")},{id: "137", image: require("../assets/tempelates/m137.jpg")},{id: "138", image: require("../assets/tempelates/m138.jpg")},{id: "139", image: require("../assets/tempelates/m139.jpg")},{id: "140", image: require("../assets/tempelates/m140.jpg")},{id: "141", image: require("../assets/tempelates/m141.jpg")},{id: "142", image: require("../assets/tempelates/m142.jpg")},{id: "143", image: require("../assets/tempelates/m143.jpg")},{id: "144", image: require("../assets/tempelates/m144.jpg")},{id: "145", image: require("../assets/tempelates/m145.jpg")},{id: "146", image: require("../assets/tempelates/m146.jpg")},{id: "147", image: require("../assets/tempelates/m147.jpg")},{id: "148", image: require("../assets/tempelates/m148.jpg")},{id: "149", image: require("../assets/tempelates/m149.jpg")},{id: "150", image: require("../assets/tempelates/m150.jpg")},{id: "151", image: require("../assets/tempelates/m151.jpg")},{id: "152", image: require("../assets/tempelates/m152.jpg")},{id: "153", image: require("../assets/tempelates/m153.jpg")},{id: "154", image: require("../assets/tempelates/m154.jpg")},{id: "155", image: require("../assets/tempelates/m155.jpg")},{id: "156", image: require("../assets/tempelates/m156.jpg")},{id: "157", image: require("../assets/tempelates/m157.jpg")},{id: "158", image: require("../assets/tempelates/m158.jpg")},{id: "159", image: require("../assets/tempelates/m159.jpg")},{id: "160", image: require("../assets/tempelates/m160.jpg")},{id: "161", image: require("../assets/tempelates/m161.jpg")},{id: "162", image: require("../assets/tempelates/m162.jpg")},{id: "163", image: require("../assets/tempelates/m163.jpg")},{id: "164", image: require("../assets/tempelates/m164.jpg")},{id: "165", image: require("../assets/tempelates/m165.jpg")},{id: "166", image: require("../assets/tempelates/m166.jpg")},{id: "167", image: require("../assets/tempelates/m167.jpg")},{id: "168", image: require("../assets/tempelates/m168.jpg")},{id: "169", image: require("../assets/tempelates/m169.jpg")},{id: "170", image: require("../assets/tempelates/m170.jpg")},{id: "171", image: require("../assets/tempelates/m171.jpg")},{id: "172", image: require("../assets/tempelates/m172.jpg")},{id: "173", image: require("../assets/tempelates/m173.jpg")},{id: "174", image: require("../assets/tempelates/m174.jpg")},{id: "175", image: require("../assets/tempelates/m175.jpg")},{id: "176", image: require("../assets/tempelates/m176.jpg")},{id: "177", image: require("../assets/tempelates/m177.jpg")},{id: "178", image: require("../assets/tempelates/m178.jpg")},{id: "179", image: require("../assets/tempelates/m179.jpg")},{id: "180", image: require("../assets/tempelates/m180.jpg")},{id: "181", image: require("../assets/tempelates/m181.jpg")},{id: "182", image: require("../assets/tempelates/m182.jpg")},{id: "183", image: require("../assets/tempelates/m183.jpg")},{id: "184", image: require("../assets/tempelates/m184.jpg")},{id: "185", image: require("../assets/tempelates/m185.jpg")},{id: "186", image: require("../assets/tempelates/m186.jpg")},{id: "187", image: require("../assets/tempelates/m187.jpg")},{id: "188", image: require("../assets/tempelates/m188.jpg")},{id: "189", image: require("../assets/tempelates/m189.jpg")},{id: "190", image: require("../assets/tempelates/m190.jpg")},{id: "191", image: require("../assets/tempelates/m191.jpg")},{id: "192", image: require("../assets/tempelates/m192.jpg")},{id: "193", image: require("../assets/tempelates/m193.jpg")},{id: "194", image: require("../assets/tempelates/m194.jpg")},{id: "195", image: require("../assets/tempelates/m195.jpg")},{id: "196", image: require("../assets/tempelates/m196.jpg")},{id: "197", image: require("../assets/tempelates/m197.jpg")},{id: "198", image: require("../assets/tempelates/m198.jpg")},{id: "199", image: require("../assets/tempelates/m199.jpg")},{id: "200", image: require("../assets/tempelates/m200.jpg")},
        {id: "1",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm1.jpg?alt=media"},{id: "2",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm2.jpg?alt=media"},{id: "3",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm3.jpg?alt=media"},{id: "4",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm4.jpg?alt=media"},{id: "5",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm5.jpg?alt=media"},{id: "6",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm6.jpg?alt=media"},{id: "7",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm7.jpg?alt=media"},{id: "8",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm8.jpg?alt=media"},{id: "9",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm9.jpg?alt=media"},{id: "10",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm10.jpg?alt=media"},{id: "11",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm11.jpg?alt=media"},{id: "12",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm12.jpg?alt=media"},{id: "13",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm13.jpg?alt=media"},{id: "14",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm14.jpg?alt=media"},{id: "15",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm15.jpg?alt=media"},{id: "16",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm16.jpg?alt=media"},{id: "17",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm17.jpg?alt=media"},{id: "18",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm18.jpg?alt=media"},{id: "19",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm19.jpg?alt=media"},{id: "20",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm20.jpg?alt=media"},{id: "21",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm21.jpg?alt=media"},{id: "22",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm22.jpg?alt=media"},{id: "23",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm23.jpg?alt=media"},{id: "24",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm24.jpg?alt=media"},{id: "25",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm25.jpg?alt=media"},{id: "26",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm26.jpg?alt=media"},{id: "27",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm27.jpg?alt=media"},{id: "28",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm28.jpg?alt=media"},{id: "29",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm29.jpg?alt=media"},{id: "30",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm30.jpg?alt=media"},{id: "31",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm31.jpg?alt=media"},{id: "32",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm32.jpg?alt=media"},{id: "33",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm33.jpg?alt=media"},{id: "34",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm34.jpg?alt=media"},{id: "35",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm35.jpg?alt=media"},{id: "36",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm36.jpg?alt=media"},{id: "37",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm37.jpg?alt=media"},{id: "38",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm38.jpg?alt=media"},{id: "39",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm39.jpg?alt=media"},{id: "40",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm40.jpg?alt=media"},{id: "41",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm41.jpg?alt=media"},{id: "42",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm42.jpg?alt=media"},{id: "43",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm43.jpg?alt=media"},{id: "44",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm44.jpg?alt=media"},{id: "45",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm45.jpg?alt=media"},{id: "46",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm46.jpg?alt=media"},{id: "47",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm47.jpg?alt=media"},{id: "48",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm48.jpg?alt=media"},{id: "49",u:"https://firebasestorage.googleapis.com/v0/b/meme-b98ea.appspot.com/o/templ%2Fm49.jpg?alt=media"},
    ];
  
    fadeIn = () => {  Animated.timing(this.fadeAnim, {toValue: 1, duration: 10, useNativeDriver: true }).start()};

    fadeOut = () => { Animated.timing(this.fadeAnim, {toValue: 0, duration: 10, useNativeDriver: true }).start();
                this.setState({ selectedItem: [] })};
    
    renderPost = (post) => {
        return(
            <View style={{ backgroundColor: this.state.selectedItem.includes(post.id) ? "#00ffff" : "#2f2e2e",
                    borderRadius: 3 }}>
                <TouchableOpacity onPress={() => {
                    this.state.selectedItem.push(post.id)
                    console.log(this.state.selectedItem)
                    this.fadeIn()
                    this.setState({ imgHook: post.id })
                    }} activeOpacity={1} disabled={this.state.selectedItem.length === 4 ? true : false }>
                    <FastImage source={{ uri: post.u }} style={{ width: 120, height: 120, resizeMode: "stretch",
                    marginTop: 4, marginBottom: 4, margin: 4 }}/>
                </TouchableOpacity>
            </View>
        )
    }
    render() {  
    return (
        <View style={{ backgroundColor: "#2f2e2e", flex: 1 }}>
            <View style={{ flex: 0.95 }}>
                <FlatList
                    style={{ margin: 3, backgroundColor: "#2f2e2e", marginBottom: -50, marginTop: -150 }}
                    data={this.posts2}
                    extraData={this.state.selectedItem}
                    renderItem={({ item }) => this.renderPost(item)}
                    keyExtractor={item => item.id}
                    numColumns={3}
                    ListHeaderComponent={
                        <View style={{ height: 390, backgroundColor: "rgba(52,52,52,0.5)",
                            borderBottomWidth: 1 }}>

                            <Animated.View 
                                style={{ backgroundColor: "rgba(52,52,52,0)",
                                    opacity: this.fadeAnim, flexDirection: "row", marginTop: 165 }}>
                                
                                <Text style={{ marginLeft: 20, fontSize: 20, 
                                      color: "#00ffff", fontFamily: "frgm", width: 140 }}>
                                  {this.state.selectedItem.length}/4 selected
                                </Text>

                                <TouchableOpacity onPress={this.fadeOut} activeOpacity={1}
                                    style={{ marginTop: 4,
                                        marginLeft: 136, width: 30, }} >
                                    <AntDesign name="close" size={35} color="#00ffff"/>
                                </TouchableOpacity>

                                <TouchableOpacity  activeOpacity={1}
                                    onPress={() => this.props.navigation.navigate("CreateMeme", {
                                        imgIndex: this.state.selectedItem
                                    })}
                                    style={{ paddingTop: 5, width: 35,
                                    marginLeft: 20 }} >
                                    <AntDesign name="arrowright" size={35} color="#00ffff"/>
                                </TouchableOpacity>

                            </Animated.View>

                            <Text style={{ color: "#fff", marginTop: 40,
                            alignSelf: "center",fontSize: 30, fontFamily: "aveny" }}>Tempelates</Text>
                        </View>
                    }
                    stickyHeaderIndices={[0]}
                    />
            </View>
            <View style={{ flex: 0.05, backgroundColor: "rgba(52,52,52,0.7)", alignItems: "center",
                justifyContent: "center" }}>
                <Text style={{ fontSize: 15, color: "#fff" }}>tempelates</Text>
            </View>

        </View>
    )
  }
};