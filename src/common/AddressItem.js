import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RadioButton from './RadioButton';

export default class AddressItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
    }

    render() {
        let { name, city, pincode, addressLine1, addressLine2, state } = this.props.address;
        return (
            <RadioButton selected={this.state.selected} onPress={() => this.setState({ selected: !this.state.selected })}>
                <Text style={{ fontFamily: 'Regular', fontWeight: 'bold' }}>{name}</Text>
                <Text>{addressLine1}</Text>
                <Text>{addressLine2}</Text>
                <Text>{`${city}, ${state} ${pincode}`}</Text>
            </RadioButton>
        );
    }
}
