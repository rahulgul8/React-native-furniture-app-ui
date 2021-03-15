import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, FlatList } from 'react-native';
import { COLORS } from '../../constants';
import BackHeader from '../common/BackHeader';
import { images } from '../../constants'
import { cards } from './mockData';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
        borderColor: COLORS.gray,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10
    }
});
function Card(props) {
    return (<View style={{ marginTop: 30 }}>
        <Text style={{ paddingLeft: 5 }}>{props.title}</Text>
        <View style={props.style ? { ...styles.card, ...props.style } : styles.card}>{props.children}</View>
    </View>);
}
export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let { data, address } = this.props.navigation.state.params;
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#fff", paddingHorizontal: 20 }} >
                <BackHeader navigation={this.props.navigation} title="Select Payment Options" />
                <View style={{ marginTop: 20, paddingBottom: 30 }}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 10 }}>
                        <Text>Amount Payable</Text><Text style={{ color: COLORS.black, fontFamily: "Bold" }}>{`₹ ${data.price}`}</Text>
                    </View>
                    <Card title="Quick Pay" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10 }}>
                        <View style={{ borderWidth: 1, borderRadius: 50, width: 65, height: 65, justifyContent: 'center' }}>
                            <Image source={images.upi} style={{ width: 60, height: 30 }} ></Image>
                        </View>
                        <Text style={{ color: 'blue', fontFamily: 'Medium' }}>Select App &#x3009;</Text>
                    </Card>
                    <Card title="My Cards" style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
                        {cards.map((card, index) => {
                            let boderBottom = index == cards.length - 1 ? {} : { borderBottomWidth: 1, paddingBottom: 15, borderColor: COLORS.gray };
                            return (<View key={card.id}
                                style={{
                                    flexDirection: 'row', alignItems: 'center',
                                    margin: 10,
                                    ...boderBottom
                                }}>
                                <View style={{ borderWidth: 1, borderRadius: 50, width: 70, height: 70, padding: 2, justifyContent: 'center', marginRight: 25 }}>
                                    <Image source={images.visa} style={{ width: 60, height: 30 }} ></Image>
                                </View>
                                <View>
                                    <Text style={{ fontFamily: 'Bold', marginBottom: 5 }}>{`${card.bank} ${card.cardType}`}</Text>
                                    <Text>{`${card.cardNumber}`}</Text>
                                </View>
                            </View>)
                        })}
                    </Card>
                    <Card title="Cash On Delivery" style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10 }}>
                        <View style={{ borderWidth: 1, borderRadius: 50, width: 65, height: 65, justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
                            <MaterialCommunityIcons name="cash" size={50} color="green" />
                        </View>
                        <Text style={{ fontFamily: 'Bold' }}>Cash on Delivery</Text>
                    </Card>
                </View>
            </ScrollView >
        );
    }
}
