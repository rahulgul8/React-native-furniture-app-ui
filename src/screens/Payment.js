import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import BackHeader from '../common/BackHeader';

export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#fff", paddingHorizontal: 20 }} >
                <BackHeader navigation={this.props.navigation} title="Payment Details" />
            </ScrollView>
        );
    }
}
