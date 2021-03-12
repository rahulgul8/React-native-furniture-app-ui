import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Button, TouchableHighlight, Image } from 'react-native';
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
                <View>
                    <Image source={images.logo} style={styles.logo}></Image>
                    <Text style={{ textAlign: 'center', ...FONTS.h1, color: COLORS.white, fontWeight: 'bold' }}>SUZHI</Text>
                    <Text style={styles.label}>For All Your Telecom Needs</Text>
                </View>

                <View style={{ alignSelf: 'stretch' }}>
                    <Text style={{ textAlign: 'center', ...FONTS.h1, color: COLORS.white, fontWeight: 'bold', marginBottom: 50 }}>Hello there! Welcome</Text>
                    <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate("Home")}>
                        <View style={styles.icon}>
                            <Icon name="google" size={30} color="#900">
                            </Icon>
                            <Text style={styles.text}>Login with Google</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: COLORS.primary
    },
    button: {
        color: COLORS.white,
        ...FONTS.body2,
        alignSelf: 'stretch',
        textAlign: 'center',
        backgroundColor: COLORS.black,
        marginHorizontal: 30,
        marginVertical: 10,
        paddingVertical: 15,
        borderRadius: 10
    },
    label: {
        ...FONTS.h3,
        color: COLORS.white,
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
    logo: {

    }
})