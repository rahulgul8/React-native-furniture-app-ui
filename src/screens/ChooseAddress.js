import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import BackHeader from '../common/BackHeader';
import IconButton from '../common/IconButton';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { addresses } from './mockData';
import AddressItem from '../common/AddressItem';
import { COLORS } from '../../constants';

export default class ChooseAddress extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: COLORS.black,
                    marginVertical: 15
                }}
            />
        );
    };

    header = () => {
        return (<View style={{ marginBottom: 20 }}>
            <BackHeader navigation={this.props.navigation} title="Choose an Address" />
            {/* <Text style={{ fontFamily: 'Bold', textAlign: 'center' }}>Choose an Address to deliver your order</Text> */}
        </View>)
    }


    footer = () => {
        return (<IconButton style={{}}>
            <FontAwesome5 style={{ marginHorizontal: 10 }} name="address-card" size={20} color="white" />
            <Text style={{ color: 'white' }}>Add a new Address</Text>
        </IconButton>)
    }


    render() {
        return (<FlatList
            style={{ backgroundColor: "#fff", paddingHorizontal: 20 }}
            renderItem={({ item }) => <AddressItem address={item} />}
            data={addresses} keyExtractor={item => `${item.id}`}
            ListHeaderComponent={this.header()}
            ListFooterComponent={this.footer()}
            ItemSeparatorComponent={this.renderSeparator}
        />
        );
    }
}
