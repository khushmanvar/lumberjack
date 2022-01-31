import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FastImage from 'react-native-fast-image';

export default function Screen1({ navigation }) {

    const DATA = [
        {id:"1"},{id:"2"},{id:"3"},{id:"4"},{id:"5"},{id:"6"},{id:"7"},{id:"8"},{id:"9"},{id:"10"},{id:"11"},{id:"12"},{id:"13"},{id:"14"},{id:"15"},{id:"16"},{id:"17"},{id:"18"},{id:"19"},{id:"20"},{id:"21"},{id:"22"},{id:"23"},{id:"24"},{id:"25"},{id:"26"},{id:"27"},{id:"28"},{id:"29"},{id:"30"}];
    
    const data1 = [{id:"31"},{id:"32"},{id:"33"},{id:"34"},{id:"35"},{id:"36"},{id:"37"},{id:"38"},{id:"39"},{id:"40"}];
    const data2 = [{id:"41"},{id:"42"},{id:"43"},{id:"44"},{id:"45"},{id:"46"},{id:"47"},{id:"48"},{id:"49"},{id:"50"}];
    const data3 = [{id:"51"},{id:"52"},{id:"53"},{id:"54"},{id:"55"},{id:"56"},{id:"57"},{id:"58"},{id:"59"},{id:"60"}];
    
    const [data, setData] = React.useState(DATA);
    const [count, setCount] = React.useState(1);

    class Item extends React.PureComponent {
        render() {
            return (
                <TouchableOpacity onPress={() => navigation.navigate("VideoMemeScreen2")}>
                    <FastImage style={{ width: 129, height: 200, backgroundColor: "#f2f2f1", margin: 3, 
                        marginLeft: 0,marginTop: 0.7 }}
                        source={{
                            uri: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
                            priority: FastImage.priority.high }}>

                        <SimpleLineIcons name="control-play" size={14} color="#fff" 
                            style={{ marginLeft: 10, marginTop: 170 }} />
                        <Text style={{ color: "#fff", marginLeft: 28, marginTop: -24 }}>12s</Text>
                        <Text style={{ color: "#fff", marginLeft: 10, marginTop: -190, color: "#fff" }}>Dhak Dhak</Text>
                    </FastImage>
                </TouchableOpacity>
            )}}

    const _renderItem = (item) => {
        return (
            <Item id={item.id}/>)};

    const _onEndReach = () => {
        const oC = count; const nC = oC + 1; setCount(nC);
        if(count == 1) {const oD = data; const nD = oD.concat(data1); setData(nD);}
        else if(count == 2) {const oD = data; const nD = oD.concat(data2); setData(nD);}
        else if(count == 3) {const oD = data; const nD = oD.concat(data3); setData(nD);}
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#25272a" }}>

            <FlatList
                style={{ marginTop: 0 }}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => _renderItem(item)}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                onEndReached={() => _onEndReach()}
                onEndReachedThreshold={0.7}
                ListHeaderComponent={() => {
                    return (
                        <View style={{ height: 200, backgroundColor: "rgba(52,52,52,0.5)",
                                borderBottomWidth: 1,alignItems:"center",justifyContent:"center"  }}>

                                <Text style={{ color: "#fff",fontSize: 25, fontFamily:"aveny" }}>
                                    Video Tempelates</Text>
                            </View>
                    )
                }}
                stickyHeaderIndices={[0]}/>

        </View>
    )
}