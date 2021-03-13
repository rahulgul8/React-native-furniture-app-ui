import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'
import { images, COLORS, FONTS } from '../../constants';

function BackHeader(props) {
    return (<View style={{ flexDirection: "row", width: "100%", marginTop: 60, marginBottom: 20, justifyContent: 'space-between', }}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image source={require('../images/back.png')} style={{ width: 15, height: 15 }} />
        </TouchableOpacity>
        {props.title && <Text style={{ fontFamily: 'Bold' }}>{props.title}</Text>}
        <View style={{ alignItems: "flex-end" }}>
            <Image source={require('../images/bag-2.png')} style={{ width: 16, height: 20 }} />
        </View>
    </View>);
}

export default BackHeader;