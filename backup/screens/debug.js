import React from 'react';
import {Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {LogLevel, RNFFmpegConfig, RNFFmpeg, RNFFprobe} from 'react-native-ffmpeg';
import RNFS from 'react-native-fs';
import {VideoUtil} from './VideoUtil';
import {TestUtil} from './Test';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
const FS = require("../node_modules/expo-file-system");

async function executeFFmpeg(command) {
    await RNFFmpeg.execute(command).then(result => console.log("FFmpeg process exited with rc " + result.rc));
}

async function executeFFmpegWithArguments(commandArguments) {
    await RNFFmpeg.executeWithArguments(commandArguments).then(data => {
        console.log("FFmpeg process exited with rc " + data.rc);
    });
}

async function executeFFmpegCancel() {
    await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
    await RNFFmpeg.cancel();
    console.log("FFmpeg operation cancelled");
}

async function executeFFprobe(command) {
    await RNFFprobe.execute(command).then(result => console.log("FFprobe process exited with rc " + result.rc));
}

async function executeFFprobeWithArguments(commandArguments) {
    await RNFFprobe.executeWithArguments(commandArguments).then(data => {
        console.log("FFprobe process exited with rc " + data.rc);
    });
}

class CommandScreen extends React.Component {

    state = {
        command: '',
        commandOutput: ''
    };

    render() {
        return (
            <View style={commandScreenStyles.screenStyle}>
                <View style={commandScreenStyles.headerViewStyle}>
                    <Text
                        style={commandScreenStyles.headerTextStyle}>
                        ReactNativeFFmpegTest
                    </Text>
                </View>
                <View style={commandScreenStyles.commandTextViewStyle}>
                    <TextInput
                        style={commandScreenStyles.commandTextInputStyle}
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholder="Enter command"
                        underlineColorAndroid="transparent"
                        onChangeText={(command) => this.setState({command})}
                        value={this.state.command}
                    />
                </View>
                <View style={commandScreenStyles.runViewStyle}>
                    <TouchableOpacity
                        style={commandScreenStyles.runButtonStyle}
                        onPress={this.runFFmpeg}>
                        <Text style={commandScreenStyles.buttonTextStyle}>RUN FFMPEG</Text>
                    </TouchableOpacity>
                </View>
                <View style={commandScreenStyles.runViewStyle}>
                    <TouchableOpacity
                        style={commandScreenStyles.runButtonStyle}
                        onPress={this.runFFprobe}>
                        <Text style={commandScreenStyles.buttonTextStyle}>RUN FFPROBE</Text>
                    </TouchableOpacity>
                </View>
                <View style={commandScreenStyles.commandOutputViewStyle}>
                    <ScrollView style={commandScreenStyles.commandOutputScrollViewStyle}>
                        <Text style={commandScreenStyles.commandOutputTextStyle}>{this.state.commandOutput}</Text>
                    </ScrollView>
                </View>
            </View>
        );
    };

    logCallback = (logData) => {
        this.setState({commandOutput: this.state.commandOutput + logData.log});
    };

    setLogLevel() {
        console.log("Setting log level to AV_LOG_INFO.");

        RNFFmpegConfig.setLogLevel(LogLevel.AV_LOG_INFO);
    }

    printExternalLibraries() {
        console.log("Printing external libraries.");

        RNFFmpegConfig.getPackageName().then(result => {
            console.log("Package name: " + result.packageName);
        });

        RNFFmpegConfig.getExternalLibraries().then(result => {
            console.log("External libraries: " + result);
        });
    }

    printLastCommandResult() {
        console.log("Printing last command result.");

        RNFFmpegConfig.getLastReturnCode().then(result => {
            console.log("Last return code: " + result.lastRc);
        });

        RNFFmpegConfig.getLastCommandOutput().then(result => {
            console.log("Last command output: " + result.lastCommandOutput);
        });
    }

    registerNewFFmpegPipe() {
        console.log("Creating new FFmpeg pipe.");

        RNFFmpegConfig.registerNewFFmpegPipe().then(result => {
            console.log("Pipe path is " + result.pipe);
        });
    }

    setCustomFontDirectory() {
        console.log("Registering cache directory as font directory.");

        RNFFmpegConfig.setFontDirectory(FS.cacheDirectory, {
            my_easy_font_name: "my complex font name",
            my_font_name_2: "my complex font name"
        });
    }

    setFontconfigConfguration() {
        console.log("Registering cache directory as fontconfig directory.");

        RNFFmpegConfig.setFontconfigConfigurationPath(FS.cacheDirectory);
    }

    runWithArguments = () => {
        RNFFmpegConfig.enableLogCallback(this.logCallback);

        // CLEAR COMMAND OUTPUT FIRST
        this.setState({commandOutput: ''});

        console.log("Testing COMMAND with ARGUMENTS.");

        console.log("FFmpeg process started with arguments");

        executeFFmpegWithArguments(["-v", "debug", "-version"]);
    };

    runFFmpeg = () => {

        this.printExternalLibraries();
        this.printLastCommandResult();

        RNFFmpegConfig.enableLogCallback(this.logCallback);

        this.setLogLevel();

        // CLEAR COMMAND OUTPUT FIRST
        this.setState({commandOutput: ''});

        this.setFontconfigConfguration();
        this.setCustomFontDirectory();
        this.registerNewFFmpegPipe();

        console.log('Testing parseArguments.');

        TestUtil.testParseArguments();

        console.log("Testing COMMAND.");

        console.log("FFmpeg process started with command.");
        console.log(this.state.command);

        if ((this.state.command !== undefined) && (this.state.command.length > 0)) {
            executeFFmpeg(this.state.command);
        }
    };

    runFFprobe = () => {

        this.printExternalLibraries();
        this.printLastCommandResult();

        RNFFmpegConfig.enableLogCallback(this.logCallback);

        this.setLogLevel();

        // CLEAR COMMAND OUTPUT FIRST
        this.setState({commandOutput: ''});

        this.setFontconfigConfguration();
        this.setCustomFontDirectory();
        this.registerNewFFmpegPipe();

        console.log('Testing parseArguments.');

        TestUtil.testParseArguments();

        console.log("Testing COMMAND.");

        console.log("FFmpeg process started with command.");
        console.log(this.state.command);

        if ((this.state.command !== undefined) && (this.state.command.length > 0)) {
            executeFFprobe(this.state.command);
        }
    };

}

class VideoScreen extends React.Component {
   
    state = {
        videoCodec: 'mpeg4',encodeOutput: '',
        image1: 'file:/data/user/0/com.hashy/cache/ImagePicker/d28fbc17-1347-4730-8fa5-6f42d478844d.jpg',
        image2: 'file:/data/user/0/com.hashy/cache/ImagePicker/590212c7-b1ea-4a09-9831-2ec514fbf2fd.jpg',
        image3: 'file:/data/user/0/com.hashy/cache/ImagePicker/dcf3dd54-b2b4-4c71-913f-4f2e941ea95a.jpg"',
        video:  'file:///data/user/0/com.hashy/cache/ImagePicker/cc68036f-22d9-41de-bc11-7e6606548e49.mp4'
    };

    componentDidMount() {
        Permissions.askAsync(Permissions.CAMERA_ROLL);
    }

    render() {
        return (
            <View style={videoScreenStyles.screenStyle}>
                <View style={videoScreenStyles.headerViewStyle}>
                    <Text
                        style={videoScreenStyles.headerTextStyle}>
                        ReactNativeFFmpegTest
                    </Text>
                </View>
                <View style={videoScreenStyles.videoCodecTextViewStyle}>
                    <TextInput
                        style={videoScreenStyles.videoCodecTextInputStyle}
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholder="video codec"
                        underlineColorAndroid="transparent"
                        onChangeText={(videoCodec) => this.setState({videoCodec})}
                        value={this.state.videoCodec}
                    />
                </View>
                <View style={videoScreenStyles.createViewStyle}>
                    <TouchableOpacity
                        style={videoScreenStyles.createButtonStyle}
                        onPress={this.createVideo}>
                        <Text style={videoScreenStyles.buttonTextStyle}>CREATE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={videoScreenStyles.createButtonStyle}
                        onPress={async() => {
                            try {
                                let result = await ImagePicker.launchImageLibraryAsync({
                                  mediaTypes: ImagePicker.MediaTypeOptions.All,
                                  allowsEditing: false
                                });
                                if (!result.cancelled) {
                                  this.setState({ image1: result.uri })}
                          
                                console.log(result)} catch (E) { console.log(E) }
                        }}>
                        <Text style={videoScreenStyles.buttonTextStyle}>Image 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={videoScreenStyles.createButtonStyle}
                        onPress={async() => {
                            try {
                              let result = await ImagePicker.launchImageLibraryAsync({
                                mediaTypes: ImagePicker.MediaTypeOptions.All,
                                allowsEditing: false
                              });
                              if (!result.cancelled) {
                                this.setState({ image2: result.uri });
                              }
                        
                              console.log(result);
                            } catch (E) {
                              console.log(E);
                            }
                          }}>
                        <Text style={videoScreenStyles.buttonTextStyle}>Image 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={videoScreenStyles.createButtonStyle}
                        onPress={async() => {
                            try {
                              let result = await ImagePicker.launchImageLibraryAsync({
                                mediaTypes: ImagePicker.MediaTypeOptions.All,
                                allowsEditing: false
                              });
                              if (!result.cancelled) {
                                this.setState({ image3: result.uri });
                              }
                        
                              console.log(result);
                            } catch (E) {
                              console.log(E);
                            }
                          }}>
                        <Text style={videoScreenStyles.buttonTextStyle}>Image 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={videoScreenStyles.createButtonStyle}
                        onPress={async() => {
                            try {
                              let result = await ImagePicker.launchImageLibraryAsync({
                                mediaTypes: ImagePicker.MediaTypeOptions.All,
                                allowsEditing: false
                              });
                              if (!result.cancelled) {
                                this.setState({ video: result.uri });
                              }
                        
                              console.log(result);
                            } catch (E) {
                              console.log(E);
                            }
                          }}>
                        <Text style={videoScreenStyles.buttonTextStyle}>Video</Text>
                    </TouchableOpacity>
                </View>
                <View style={commandScreenStyles.commandOutputViewStyle}>
                    <ScrollView style={commandScreenStyles.commandOutputScrollViewStyle}>
                        <Text style={commandScreenStyles.commandOutputTextStyle}>{this.state.encodeOutput}</Text>
                    </ScrollView>
                </View>
            </View>
        );
    }

    logCallback = (logData) => {
        this.setState({encodeOutput: this.state.encodeOutput + logData.log});
    };

    statisticsCallback = (statisticsData) => {
        console.log('Statistics; frame: ' + statisticsData.videoFrameNumber.toFixed(1) + ', fps: ' + statisticsData.videoFps.toFixed(1) + ', quality: ' + statisticsData.videoQuality.toFixed(1) +
            ', size: ' + statisticsData.size + ', time: ' + statisticsData.time);
    };

    printLastCommandResult() {
        console.log("Printing last command result.");

        RNFFmpegConfig.getLastReturnCode().then(result => {
            console.log("Last return code: " + result.lastRc);
        });

        RNFFmpegConfig.getLastCommandOutput().then(result => {
            console.log("Last command output: \"" + result.lastCommandOutput + "\"");
        });
    }

    getLastReceivedStatistics = () => {
        RNFFmpegConfig.getLastReceivedStatistics().then(stats => console.log('Stats: ' + JSON.stringify(stats)));
    };

    getMediaInformation = () => {
        RNFFprobe.getMediaInformation(this.state.video).then(info => {
            console.log('\n');
            console.log('Result: ' + JSON.stringify(info));
            console.log('Media Information');
            console.log('Path: ' + info.path);
            console.log('Format: ' + info.format);
            console.log('Duration: ' + info.duration);
            console.log('Start time: ' + info.startTime);
            console.log('Bitrate: ' + info.bitrate);
            if (info.streams) {
                for (var i = 0; i < info.streams.length; i++) {
                    console.log('Stream id: ' + info.streams[i].index);
                    console.log('Stream type: ' + info.streams[i].type);
                    console.log('Stream codec: ' + info.streams[i].codec);
                    console.log('Stream full codec: ' + info.streams[i].fullCodec);
                    console.log('Stream format: ' + info.streams[i].format);
                    console.log('Stream full format: ' + info.streams[i].fullFormat);
                    console.log('Stream width: ' + info.streams[i].width);
                    console.log('Stream height: ' + info.streams[i].height);
                    console.log('Stream bitrate: ' + info.streams[i].bitrate);
                    console.log('Stream sample rate: ' + info.streams[i].sampleRate);
                    console.log('Stream sample format: ' + info.streams[i].sampleFormat);
                    console.log('Stream channel layout: ' + info.streams[i].channelLayout);
                    console.log('Stream sar: ' + info.streams[i].sampleAspectRatio);
                    console.log('Stream dar: ' + info.streams[i].displayAspectRatio);
                    console.log('Stream average frame rate: ' + info.streams[i].averageFrameRate);
                    console.log('Stream real frame rate: ' + info.streams[i].realFrameRate);
                    console.log('Stream time base: ' + info.streams[i].timeBase);
                    console.log('Stream codec time base: ' + info.streams[i].codecTimeBase);

                    if (info.streams[i].metadata) {
                        console.log('Stream metadata encoder: ' + info.streams[i].metadata.encoder);
                        console.log('Stream metadata rotate: ' + info.streams[i].metadata.rotate);
                        console.log('Stream metadata creation time: ' + info.streams[i].metadata.creation_time);
                        console.log('Stream metadata handler name: ' + info.streams[i].metadata.handler_name);
                    }

                    if (info.streams[i].sidedata) {
                        console.log('Stream side data displaymatrix: ' + info.streams[i].sidedata.displaymatrix);
                    }
                }
            }
            console.log('\n');
        });
    };

    createVideo = () => {
        RNFFmpegConfig.enableLogCallback(this.logCallback);
        RNFFmpegConfig.enableStatisticsCallback(this.statisticsCallback);

        console.log("Testing VIDEO.");

        console.log("FFmpeg process started with arguments");
        let command = VideoUtil.generateEncodeVideoScript(this.state.image1, this.state.image2, this.state.image3, this.state.video, this.state.videoCodec, '');
        console.log(command);

        executeFFmpeg(command).then(rc => {
            this.getMediaInformation();
        });

        executeFFmpegCancel();

    };

}

const TabNavigator = createBottomTabNavigator(
    {
        COMMAND: CommandScreen,
        VIDEO: VideoScreen,
    },
    {
        tabBarOptions: {
            activeTintColor: 'dodgerblue',
            inactiveTintColor: 'gray',
            showIcon: false,
            labelStyle: {
                fontSize: 12,
                fontWeight: 'bold',
                flex: 1,
                textAlign: 'center',
                marginBottom: 12
            }
        },
    }
);

const AppNavigator = createAppContainer(TabNavigator);

export default class Main extends React.Component {
    render() {
        return (
            <AppNavigator/>
        );
    }
}

const commandScreenStyles = StyleSheet.create({
    screenStyle: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginTop: Platform.select({ios: 20, android: 0})
    },
    headerViewStyle: {
        paddingTop: 16,
        paddingBottom: 10,
        backgroundColor: '#F46842'
    },
    headerTextStyle: {
        alignSelf: "center",
        height: 32,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        borderColor: 'lightgray',
        borderRadius: 5,
        borderWidth: 0
    },
    commandTextViewStyle: {
        paddingTop: 40,
        paddingBottom: 40,
        paddingRight: 20,
        paddingLeft: 20
    },
    commandTextInputStyle: {
        height: 36,
        fontSize: 12,
        borderColor: '#3498db',
        borderRadius: 5,
        borderWidth: 1
    },
    runViewStyle: {
        alignSelf: "center",
        paddingBottom: 20
    },
    runButtonStyle: {
        justifyContent: 'center',
        width: 120,
        height: 38,
        backgroundColor: '#2ecc71',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    buttonTextStyle: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff'
    },
    commandOutputViewStyle: {
        padding: 20
    },
    commandOutputScrollViewStyle: {
        padding: 4,
        backgroundColor: '#f1c40f',
        borderColor: '#f39c12',
        borderRadius: 5,
        borderWidth: 1,
        height: 200,
        maxHeight: 200
    },
    commandOutputTextStyle: {
        color: 'black'
    }
});

const videoScreenStyles = StyleSheet.create({
    screenStyle: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginTop: Platform.select({ios: 20, android: 0})
    },
    headerViewStyle: {
        paddingTop: 16,
        paddingBottom: 10,
        backgroundColor: '#F46842'
    },
    headerTextStyle: {
        alignSelf: "center",
        height: 32,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        borderColor: 'lightgray',
        borderRadius: 5,
        borderWidth: 0
    },
    videoCodecTextViewStyle: {
        paddingTop: 40,
        paddingBottom: 40,
        width: 100,
        alignSelf: "center"
    },
    videoCodecTextInputStyle: {
        height: 36,
        fontSize: 12,
        borderColor: '#3498db',
        borderRadius: 5,
        borderWidth: 1,
        textAlign: 'center'
    },
    createViewStyle: {
        alignSelf: "center",
        paddingBottom: 20
    },
    createButtonStyle: {
        justifyContent: 'center',
        width: 100,
        height: 38,
        backgroundColor: '#2ecc71',
        borderRadius: 5
    },
    buttonTextStyle: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff'
    }
});