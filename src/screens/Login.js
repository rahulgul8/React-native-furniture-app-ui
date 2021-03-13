import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Button, TouchableHighlight, Image, ImageBackground } from 'react-native';
import { images, COLORS, FONTS } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1, }}>
                    <Image source={images.logo} style={styles.logo}></Image>
                    <Text style={{ textAlign: 'center', ...FONTS.h1, color: COLORS.black, fontWeight: 'bold' }}>SUZHI</Text>
                    <Text style={styles.label}>For All Your Telecom Needs</Text>
                    <ImageBackground source={images.bottom} style={{
                        height: 300,
                        width: 300,
                        opacity: 0.7,
                        position: 'absolute',
                        bottom: -150,
                        left: -50,

                    }} >
                    </ImageBackground>
                </View>

                <View style={styles.login}>
                    <Text style={{ textAlign: 'center', ...FONTS.h1, color: COLORS.darkGray, fontWeight: 'bold' }}>
                        Welcome!
                    </Text>
                    <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate("Home")}>
                        <View style={styles.icon}>
                            <Icon name="google" size={30} color="#900">
                            </Icon>
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
        backgroundColor: COLORS.background
    },
    button: {
        color: COLORS.white,
        ...FONTS.body2,
        textAlign: 'center',
        backgroundColor: COLORS.black,
        marginHorizontal: 30,
        paddingVertical: 15,
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
        ...FONTS.h2,
        paddingHorizontal: 10
    },
    login: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        backgroundColor: 'white',
        flex: 0.6,
        borderTopEndRadius: 35,
        borderTopStartRadius: 35,
        justifyContent: 'space-evenly',
        elevation: 50
    }
})