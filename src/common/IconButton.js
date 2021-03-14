import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'
import { images, COLORS, FONTS } from '../../constants';

function IconButton(props) {
    let style = props.style ? { ...styles.button, ...props.style } : styles.button;
    let Parent = props.opacity ? TouchableOpacity : TouchableHighlight;
    return (<Parent onPress={props.onPress}>
        <View style={style}>
            {props.children}
        </View>
    </Parent>)
}


const styles = StyleSheet.create({
    button: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        padding: 12,
        marginVertical: 15,
        backgroundColor: "#000",
    }
})

export default IconButton;