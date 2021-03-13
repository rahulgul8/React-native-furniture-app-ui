import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

export default function RadioButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ flexDirection: 'row' }}>
                <View style={[{
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: '#000',
                    alignItems: 'center',
                    justifyContent: 'center',
                }, props.style]}>
                    {
                        props.selected ?
                            <View style={{
                                height: 12,
                                width: 12,
                                borderRadius: 6,
                                backgroundColor: '#000',
                            }} />
                            : null
                    }
                </View>
                <View style={{ marginLeft: 20 }}>{props.children}</View>
            </View>
        </TouchableOpacity>
    );
}