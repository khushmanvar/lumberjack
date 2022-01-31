import React from 'react';
import { View, FlatList, TouchableOpacity, Dimensions, Image, Text } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import FastImage from 'react-native-fast-image';
import { AppLoading } from 'expo';
import Firebase from '../fire';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export default function VideoScreen({ navigation }) {
    
    const DATA = [
      {id:"1"},{id:"2"},{id:"3"},{id:"4"},{id:"5"},{id:"6"},{id:"7"},{id:"8"},{id:"9"},{id:"10"},{id:"11"},{id:"12"},{id:"13"},{id:"14"},{id:"15"},{id:"16"},{id:"17"},{id:"18"},{id:"19"},{id:"20"},{id:"21"},{id:"22"},{id:"23"},{id:"24"},{id:"25"},{id:"26"},{id:"27"},{id:"28"},{id:"29"},{id:"30"},{id:"31"},{id:"32"},{id:"33"},{id:"34"},{id:"35"},{id:"36"},{id:"37"},{id:"38"},{id:"39"},{id:"40"},{id:"41"},{id:"42"},{id:"43"},{id:"44"},{id:"45"},{id:"46"},{id:"47"},{id:"48"},{id:"49"},{id:"50"},{id:"51"},{id:"52"},{id:"53"},{id:"54"},{id:"55"},{id:"56"},{id:"57"},{id:"58"},{id:"59"},{id:"60"},{id:"61"},{id:"62"},{id:"63"},{id:"64"},{id:"65"},{id:"66"},{id:"67"},{id:"68"},{id:"69"},{id:"70"},{id:"71"},{id:"72"},{id:"73"},{id:"74"},{id:"75"},{id:"76"},{id:"77"},{id:"78"},{id:"79"},{id:"80"},{id:"81"},{id:"82"},{id:"83"},{id:"84"},{id:"85"},{id:"86"},{id:"87"},{id:"88"},{id:"89"},{id:"90"},{id:"91"},{id:"92"},{id:"93"},{id:"94"},{id:"95"},{id:"96"},{id:"97"},{id:"98"},{id:"99"},{id:"100"}
    ];
    const[u1,s1]=React.useState("");const[u2,s2]=React.useState("");const[u3,s3]=React.useState("");const[u4,s4]=React.useState("");const[u5,s5]=React.useState("");const[u6,s6]=React.useState("");const[u7,s7]=React.useState("");const[u8,s8]=React.useState("");const[u9,s9]=React.useState("");const[u10,s10]=React.useState("");const[u11,s11]=React.useState("");const[u12,s12]=React.useState("");const[u13,s13]=React.useState("");const[u14,s14]=React.useState("");const[u15,s15]=React.useState("");const[u16,s16]=React.useState("");const[u17,s17]=React.useState("");const[u18,s18]=React.useState("");const[u19,s19]=React.useState("");const[u20,s20]=React.useState("");const[u21,s21]=React.useState("");const[u22,s22]=React.useState("");const[u23,s23]=React.useState("");const[u24,s24]=React.useState("");const[u25,s25]=React.useState("");const[u26,s26]=React.useState("");const[u27,s27]=React.useState("");const[u28,s28]=React.useState("");const[u29,s29]=React.useState("");const[u30,s30]=React.useState("");const[u31,s31]=React.useState("");const[u32,s32]=React.useState("");const[u33,s33]=React.useState("");const[u34,s34]=React.useState("");const[u35,s35]=React.useState("");const[u36,s36]=React.useState("");const[u37,s37]=React.useState("");const[u38,s38]=React.useState("");const[u39,s39]=React.useState("");const[u40,s40]=React.useState("");const[u41,s41]=React.useState("");const[u42,s42]=React.useState("");const[u43,s43]=React.useState("");const[u44,s44]=React.useState("");const[u45,s45]=React.useState("");const[u46,s46]=React.useState("");const[u47,s47]=React.useState("");const[u48,s48]=React.useState("");const[u49,s49]=React.useState("");const[u50,s50]=React.useState("");
    const[u51,s51]=React.useState("none");const[u52,s52]=React.useState("none");const[u53,s53]=React.useState("none");const[u54,s54]=React.useState("none");const[u55,s55]=React.useState("none");const[u56,s56]=React.useState("none");const[u57,s57]=React.useState("none");const[u58,s58]=React.useState("none");const[u59,s59]=React.useState("none");const[u60,s60]=React.useState("none");const[u61,s61]=React.useState("none");const[u62,s62]=React.useState("none");const[u63,s63]=React.useState("none");const[u64,s64]=React.useState("none");const[u65,s65]=React.useState("none");const[u66,s66]=React.useState("none");const[u67,s67]=React.useState("none");const[u68,s68]=React.useState("none");const[u69,s69]=React.useState("none");const[u70,s70]=React.useState("none");const[u71,s71]=React.useState("none");const[u72,s72]=React.useState("none");const[u73,s73]=React.useState("none");const[u74,s74]=React.useState("none");const[u75,s75]=React.useState("none");const[u76,s76]=React.useState("none");const[u77,s77]=React.useState("none");const[u78,s78]=React.useState("none");const[u79,s79]=React.useState("none");const[u80,s80]=React.useState("none");const[u81,s81]=React.useState("none");const[u82,s82]=React.useState("none");const[u83,s83]=React.useState("none");const[u84,s84]=React.useState("none");const[u85,s85]=React.useState("none");const[u86,s86]=React.useState("none");const[u87,s87]=React.useState("none");const[u88,s88]=React.useState("none");const[u89,s89]=React.useState("none");const[u90,s90]=React.useState("none");const[u91,s91]=React.useState("none");const[u92,s92]=React.useState("none");const[u93,s93]=React.useState("none");const[u94,s94]=React.useState("none");const[u95,s95]=React.useState("none");const[u96,s96]=React.useState("none");const[u97,s97]=React.useState("none");const[u98,s98]=React.useState("none");const[u99,s99]=React.useState("none");const[u100,s100]=React.useState("none");
    const uArray = [null,u1,u2,u3,u4,u5,u6,u7,u8,u9,u10,u11,u12,u13,u14,u15,u16,u17,u18,u19,u20,u21,u22,u23,u24,u25,u26,u27,u28,u29,u30,u31,u32,u33,u34,u35,u36,u37,u38,u39,u40,u41,u42,u43,u44,u45,u46,u47,u48,u49,u50,u51,u52,u53,u54,u55,u56,u57,u58,u59,u60,u61,u62,u63,u64,u65,u66,u67,u68,u69,u70,u71,u72,u73,u74,u75,u76,u77,u78,u79,u80,u81,u82,u83,u84,u85,u86,u87,u88,u89,u90,u91,u92,u93,u94,u95,u96,u97,u98,u99,u100];
    const [apploaded, setAppLoaded] = React.useState(false);

    const renderItem = (item) => {return (<>
          <View>
            <View style={{ width: WIDTH, height: 50, backgroundColor: "#000", flexDirection: "row",alignItems:"center" }}>
              <TouchableOpacity style={{ width:40, height:40, marginLeft: 5,
                    alignItems:"center", justifyContent:"center" }}
                    onPress={() => navigation.goBack()}>
                  <AntDesign name="arrowleft" size={27} color="#fff"/>
              </TouchableOpacity>
              
            </View>
            <FastImage style={{ width: WIDTH, height: HEIGHT-( 50 ), resizeMode: "contain" }} 
                source={{ uri: uArray[parseInt(item.id)] }} resizeMode={FastImage.resizeMode.contain} />
          </View>
         </>) };
    
    const setUrl = () => {
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m1.jpg").getDownloadURL().then((u) => s1(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m2.jpg").getDownloadURL().then((u) => s2(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m3.jpg").getDownloadURL().then((u) => s3(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m4.jpg").getDownloadURL().then((u) => s4(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m5.jpg").getDownloadURL().then((u) => s5(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m6.jpg").getDownloadURL().then((u) => s6(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m7.jpg").getDownloadURL().then((u) => s7(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m8.jpg").getDownloadURL().then((u) => s8(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m9.jpg").getDownloadURL().then((u) => s9(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m10.jpg").getDownloadURL().then((u) => s10(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m11.jpg").getDownloadURL().then((u) => s11(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m12.jpg").getDownloadURL().then((u) => s12(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m13.jpg").getDownloadURL().then((u) => s13(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m14.jpg").getDownloadURL().then((u) => s14(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m15.jpg").getDownloadURL().then((u) => s15(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m16.jpg").getDownloadURL().then((u) => s16(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m17.jpg").getDownloadURL().then((u) => s17(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m18.jpg").getDownloadURL().then((u) => s18(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m19.jpg").getDownloadURL().then((u) => s19(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m20.jpg").getDownloadURL().then((u) => s20(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m21.jpg").getDownloadURL().then((u) => s21(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m22.jpg").getDownloadURL().then((u) => s22(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m23.jpg").getDownloadURL().then((u) => s23(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m24.jpg").getDownloadURL().then((u) => s24(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m25.jpg").getDownloadURL().then((u) => s25(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m26.jpg").getDownloadURL().then((u) => s26(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m27.jpg").getDownloadURL().then((u) => s27(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m28.jpg").getDownloadURL().then((u) => s28(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m29.jpg").getDownloadURL().then((u) => s29(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m30.jpg").getDownloadURL().then((u) => s30(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m31.jpg").getDownloadURL().then((u) => s31(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m32.jpg").getDownloadURL().then((u) => s32(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m33.jpg").getDownloadURL().then((u) => s33(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m34.jpg").getDownloadURL().then((u) => s34(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m35.jpg").getDownloadURL().then((u) => s35(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m36.jpg").getDownloadURL().then((u) => s36(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m37.jpg").getDownloadURL().then((u) => s37(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m38.jpg").getDownloadURL().then((u) => s38(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m39.jpg").getDownloadURL().then((u) => s39(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m40.jpg").getDownloadURL().then((u) => s40(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m41.jpg").getDownloadURL().then((u) => s41(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m42.jpg").getDownloadURL().then((u) => s42(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m43.jpg").getDownloadURL().then((u) => s43(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m44.jpg").getDownloadURL().then((u) => s44(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m45.jpg").getDownloadURL().then((u) => s45(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m46.jpg").getDownloadURL().then((u) => s46(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m47.jpg").getDownloadURL().then((u) => s47(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m48.jpg").getDownloadURL().then((u) => s48(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m49.jpg").getDownloadURL().then((u) => s49(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m50.jpg").getDownloadURL().then((u) => s50(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m51.jpg").getDownloadURL().then((u) => s51(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m52.jpg").getDownloadURL().then((u) => s52(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m53.jpg").getDownloadURL().then((u) => s53(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m54.jpg").getDownloadURL().then((u) => s54(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m55.jpg").getDownloadURL().then((u) => s55(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m56.jpg").getDownloadURL().then((u) => s56(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m57.jpg").getDownloadURL().then((u) => s57(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m58.jpg").getDownloadURL().then((u) => s58(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m59.jpg").getDownloadURL().then((u) => s59(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m60.jpg").getDownloadURL().then((u) => s60(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m61.jpg").getDownloadURL().then((u) => s61(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m62.jpg").getDownloadURL().then((u) => s62(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m63.jpg").getDownloadURL().then((u) => s63(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m64.jpg").getDownloadURL().then((u) => s64(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m65.jpg").getDownloadURL().then((u) => s65(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m66.jpg").getDownloadURL().then((u) => s66(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m67.jpg").getDownloadURL().then((u) => s67(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m68.jpg").getDownloadURL().then((u) => s68(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m69.jpg").getDownloadURL().then((u) => s69(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m70.jpg").getDownloadURL().then((u) => s70(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m71.jpg").getDownloadURL().then((u) => s71(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m72.jpg").getDownloadURL().then((u) => s72(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m73.jpg").getDownloadURL().then((u) => s73(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m74.jpg").getDownloadURL().then((u) => s74(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m75.jpg").getDownloadURL().then((u) => s75(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m76.jpg").getDownloadURL().then((u) => s76(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m77.jpg").getDownloadURL().then((u) => s77(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m78.jpg").getDownloadURL().then((u) => s78(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m79.jpg").getDownloadURL().then((u) => s79(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m80.jpg").getDownloadURL().then((u) => s80(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m81.jpg").getDownloadURL().then((u) => s81(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m82.jpg").getDownloadURL().then((u) => s82(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m83.jpg").getDownloadURL().then((u) => s83(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m84.jpg").getDownloadURL().then((u) => s84(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m85.jpg").getDownloadURL().then((u) => s85(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m86.jpg").getDownloadURL().then((u) => s86(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m87.jpg").getDownloadURL().then((u) => s87(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m88.jpg").getDownloadURL().then((u) => s88(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m89.jpg").getDownloadURL().then((u) => s89(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m90.jpg").getDownloadURL().then((u) => s90(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m91.jpg").getDownloadURL().then((u) => s91(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m92.jpg").getDownloadURL().then((u) => s92(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m93.jpg").getDownloadURL().then((u) => s93(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m94.jpg").getDownloadURL().then((u) => s94(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m95.jpg").getDownloadURL().then((u) => s95(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m96.jpg").getDownloadURL().then((u) => s96(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m97.jpg").getDownloadURL().then((u) => s97(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m98.jpg").getDownloadURL().then((u) => s98(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m99.jpg").getDownloadURL().then((u) => s99(u));
Firebase.storage().refFromURL("gs://meme-b98ea.appspot.com/posts/m100.jpg").getDownloadURL().then((u) => s100(u));
    }
    console.log(u1);

    if(!apploaded) {
      return (
        <AppLoading startAsync={setUrl()} onFinish={setAppLoaded(true)} /> )}
    console.log(apploaded);
    
    return (
  
        <View style={{ backgroundColor: "#000" }}>
          
          <FlatList
            layout="default"
            data={DATA}
            vertical={true}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={(item) => item.id}
            pagingEnabled={true}
            snapToAlignment={"start"}
            snapToInterval={HEIGHT}
            decelerationRate={0.8}
            />
        </View>

      )
    };

  /*pagingEnabled={true}
            snapToAlignment={"start"}
            snapToInterval={HEIGHT}
            decelerationRate={0.8}*/
  