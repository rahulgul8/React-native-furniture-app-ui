import React, { Component } from 'react';
import { View, Text } from 'react-native';
import IconButton from './IconButton';
import RadioButton from './RadioButton';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default class AddressItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        };
    }

    render() {
        let { name, city, pincode, addressLine1, addressLine2, state } = this.props.address;
        return (
            <RadioButton isChecked={this.props.isChecked} onPress={() => this.props.onPress()}>
                <Text style={{ fontFamily: 'Regular', fontWeight: 'bold' }}>{name}</Text>
                <Text>{addressLine1}</Text>
                <Text>{addressLine2}</Text>
                <Text>{`${city}, ${state} ${pincode}`}</Text>
                {this.props.isChecked &&
                    <View style={{ marginTop: 15 }}>
                        <IconButton style={{ marginRight: 20, marginVertical: 5 }} onPress={this.props.onSubmit}>
                            <FontAwesome5 name="address-card" size={24} color="white" />
                            <Text style={{ color: 'white' }}>  Use this Address</Text>
                        </IconButton>
                        <IconButton style={{ backgroundColor: 'white', borderWidth: 1, marginRight: 20 }}>
                            <FontAwesome name="edit" size={24} color="black" />
                            <Text>  Edit address</Text>
                        </IconButton>
                    </View>}
            </RadioButton >
        );
    }
}
