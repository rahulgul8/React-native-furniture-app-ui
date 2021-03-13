import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import BackHeader from '../common/BackHeader';
import IconButton from '../common/IconButton';
import { MaterialIcons } from '@expo/vector-icons';

export default class ReviewOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#fff", paddingHorizontal: 20 }} >
                <BackHeader navigation={this.props.navigation} title="Review Order" />
                <IconButton>
                    <MaterialIcons name="payment" size={24} color="white" />
                    <Text style={{ fontSize: 20, color: "#FFF", fontFamily: "Bold", marginHorizontal: 15 }}>
                        Make Payment
                    </Text>
                </IconButton>
            </ScrollView>
        );
    }
}
