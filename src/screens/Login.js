import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Button, TouchableHighlight, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { images, COLORS, FONTS } from '../../constants';
import IconButton from '../common/IconButton';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ alignItems: 'center', marginBottom: 25 }}>
                    <Image source={images.logo} style={styles.logo}></Image>
                    <Text style={styles.title}> Suzhi </Text>
                    <Text style={styles.label}>For All Your Telecom Needs</Text>
                </View>
                <View style={{ alignItems: 'center', padding: 20, marginBottom: 20 }}>
                    <Text style={{ textAlign: 'center', ...FONTS.h2, fontWeight: 'bold', paddingBottom: 40 }}>
                        Login to your Account
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Home")}>
                            <AntDesign name="google" size={40} color="#DB4437" />
                        </TouchableOpacity>
                        <View
                            style={{
                                height: 70,
                                width: 2,
                                backgroundColor: COLORS.gray,
                                marginVertical: 25,
                            }}
                        />
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Home")}>
                            <FontAwesome name="facebook" size={40} color="#4267B2" />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ textAlign: 'center', fontSize: 12, color: COLORS.gray }}>
                    * By logging in, you agree to the terms and conditions
                    </Text>
            </SafeAreaView >
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    button: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: COLORS.black,
        marginHorizontal: 20,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        ...FONTS.h3,
        color: COLORS.darkGray,
        textAlign: 'center',
        paddingVertical: 5
    },
    logo: {
        height: 120,
        width: 120,
        marginTop: 10,
    },
    title: {
        fontFamily: 'Title', fontSize: 55, marginVertical: 10,
        color: '#464444',
        textShadowColor: '#444444',
        textShadowOffset: { width: -2, height: 1 },
        textShadowRadius: 10,
    }
})