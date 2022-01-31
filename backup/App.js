import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Loading from './screens/Loading';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Auth from './screens/Auth';
import Home from './screens/Home';
import { LinearGradient } from 'expo-linear-gradient';
import Firebase from './fire';

const fetchFonts = () => {
    return Font.loadAsync({
        "roof": require("./assets/layout_fonts/roof.runners-bold.ttf"),
        "aveny": require("./assets/layout_fonts/AvenyTRegular.otf"),
        "avenyM": require("./assets/layout_fonts/AvenyTMedium.otf"),
        "ostrich": require("./assets/layout_fonts/OstrichSans-Heavy.otf"),
        "helv": require("./assets/layout_fonts/HelveticaNeueLTStd.ttf"),
        "helvb": require("./assets/layout_fonts/HelveticaNeueBd.ttf"),
        "type": require("./assets/layout_fonts/CourierPrime.ttf"),
        "frgl": require("./assets/layout_fonts/FreigSanProLig.otf"),
        "frgm": require("./assets/layout_fonts/FreigSanProMed.otf"),
        "frgb": require("./assets/layout_fonts/FreigSanProBold.otf"),
        "anton": require("./assets/meme_fonts/Anton.ttf"),
        "mont": require("./assets/meme_fonts/Montserrat-Medium.otf"),
        "ail": require("./assets/meme_fonts/Aileron-Heavy.otf"),
        "csans": require("./assets/meme_fonts/LDFComicSans.ttf"),
        "choco": require("./assets/layout_fonts/Chococooky.ttf"),
        "chocob": require("./assets/layout_fonts/Chococooky-Bold.ttf"),
    })
}

const SCREEN_HEIGHT = Dimensions.get("window").height;

function App({ navigation }) {

    const [appLoaded, setAppLoaded] = React.useState(false)
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        Firebase.auth().onAuthStateChanged(user => navigation.navigate(user ? "Home" : "Auth"))
    },[])

    if(!appLoaded) {
        return (
            <AppLoading startAsync={fetchFonts} onFinish={() => setAppLoaded(true)}/>
        )
    }

    return (
        <View style={{ flex: 1, alignItems: "center", backgroundColor: "#7fffd4" }}> 

            <LinearGradient
                colors={['#ffd700', 'transparent']}
                style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 600 }}/>     

            <View style={{ borderRadius: 40, borderWidth: 10, borderColor: "#000", alignItems: "center",
                  justifyContent: "center", height: 150, width: 150, marginTop: 250 }}>
                <Text style={{ fontSize: 50, fontFamily: "roof", color: "#000" }}>#y</Text>
            </View>
            
            <Text style={{ fontSize: 35, fontFamily: "roof", color: "#000", marginTop: 200,
                    /*textShadowColor: 'rgba(0, 0, 0, 0.7)',
                    textShadowOffset: {width: -1, height: 1},
                    textShadowRadius: 10*/  }}>#ash-y</Text>

        </View>
    )
}

export default createAppContainer(
    createSwitchNavigator(
        {
            App: App,
            Auth: Auth,
            Home: Home
        },
        {
            initialRouteName: "App"
        }
    )
)