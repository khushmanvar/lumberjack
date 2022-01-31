import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
const WIDTH = Dimensions.get("window").width;

const AnimatedBottomSheet = ({ translateY, gestureHandler }) => (
    <>
    
    <TapGestureHandler {...gestureHandler}>
        <Animated.View style={{...StyleSheet.absoluteFill, backgroundColor: "rgba(0,0,0,0.5)", zIndex: -1 }}>

        </Animated.View>
    </TapGestureHandler>
    <Animated.View style={{...styles.bottomSheet, transform: [{
        translateY: translateY
    }] }}>
        <Text>AnimatedBottomSheet</Text>
    </Animated.View>
    </>
);

export default AnimatedBottomSheet;

const styles = StyleSheet.create({
    bottomSheet: {
        position: "absolute",
        width: WIDTH -20,
        bottom: 0,
        height: 300,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center"
    }
})