import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Button, TouchableHighlight, Image, ImageBackground } from 'react-native';
import { images, COLORS, FONTS } from '../../constants';
import IconButton from '../common/IconButton';
import { AntDesign } from '@expo/vector-icons';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <Image source={images.logo} style={styles.logo}></Image>
                    <Text style={{ textAlign: 'center', ...FONTS.h1, color: COLORS.black, fontWeight: 'bold' }}>SUZHI</Text>
                    <Text style={styles.label}>For All Your Telecom Needs</Text>
                    {/* <ImageBackground source={images.bottom} style={{
                        height: 300,
                        width: 300,
                        opacity: 0.7,
                        position: 'absolute',
                        bottom: -150,
                        left: -50,

                    }} >
                    </ImageBackground> */}
                </View>

                <View style={styles.login}>
                    <Text style={{ textAlign: 'center', ...FONTS.h2, color: COLORS.white, fontWeight: 'bold' }}>
                        Welcome!
                    </Text>
                    <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate("Home")}>
                        <View style={styles.icon}>
                            <AntDesign name="google" size={24} color="#900" />
                            <Text style={styles.text}>Login with Google</Text>
                        </View>
                    </TouchableHighlight>
                    <Text style={{ textAlign: 'center', fontSize: 12, color: COLORS.gray }}>
                        * By logging in, you agree to the terms and conditions
                    </Text>
                </View>
            </SafeAreaView >
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    button: {
        color: COLORS.white,
        textAlign: 'center',
        backgroundColor: COLORS.black,
        paddingVertical: 15,
        marginHorizontal: 70,
        borderRadius: 10
    },
    label: {
        ...FONTS.h3,
        color: COLORS.darkGray,
        textAlign: 'center',
        paddingVertical: 10
    },
    icon: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row'

    },
    text: {
        color: COLORS.white,
        ...FONTS.h3,
        paddingHorizontal: 10
    },
    login: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        backgroundColor: COLORS.background,
        flex: 0.6,
        borderRadius: 35,
        justifyContent: 'space-evenly',
        elevation: 50,
        marginHorizontal: 10,
        marginBottom: 10
    }
})