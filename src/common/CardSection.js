import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Title from './Title'

export default class CardSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Title title={this.props.title} subtitle={this.props.subtitle} />
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    {this.props.children}
                </ScrollView>
            </View>
        );
    }
}
