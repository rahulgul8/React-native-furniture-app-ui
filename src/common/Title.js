import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flexDirection: "row", marginVertical: 20, alignItems: "center" }}>
                <Text style={{ fontFamily: "Bold", color: "#4f4a4a", fontSize: 20 }}>
                    {this.props.title}
                </Text>
                <View style={{ height: 5, width: 5, borderRadius: 5, backgroundColor: "#4f4a4a", marginHorizontal: 4 }}></View>
                <Text style={{ fontFamily: "Bold", fontSize: 10, color: "#4f4a4a" }}>
                    {this.props.subtitle}
                </Text>
            </View>
        );
    }
}
