import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'
import { images, COLORS, FONTS } from '../../constants';

function IconButton(props) {
    let style = props.style ? { ...styles.button, ...props.style } : styles.button;
    return (<TouchableHighlight onPress={props.onPress}>
        <View style={style}>
            {props.children}
        </View>
    </TouchableHighlight>)
}


const styles = StyleSheet.create({
    button: {
        display: 'flex',
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        padding: 12,
        marginBottom: 15,
        backgroundColor: "#000",
    }
})

export default IconButton;