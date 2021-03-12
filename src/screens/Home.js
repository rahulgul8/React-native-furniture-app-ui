import React from 'react'
import { View, Text, Image } from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/Ionicons'
import Card from '../common/Card'
import New from '../common/New'
import Best from '../common/Best'
import CardSection from '../common/CardSection';
import { products } from './mockData'
import { images, COLORS, FONTS } from '../../constants';

export default class Home extends React.Component {


    renderHeader = () => {
        return (<View style={{ flexDirection: "row", width: "100%", marginTop: 40, alignItems: "center" }}>
            <View style={{ width: "50%" }}>
                <Text style={{ fontFamily: "Bold", fontSize: 22 }}>Suzhi</Text>
            </View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
                <Image source={require('../images/bag-2.png')} style={{ width: 16, height: 20 }} />
            </View>
        </View>);
    }

    searchBar = () => {
        return (<View style={{ flexDirection: "row", alignItems: "center", width: "100%", marginTop: 30 }}>
            <View style={{ flexDirection: "row", alignItems: "center", elevation: 2, width: "85%", backgroundColor: "#FFF", paddingHorizontal: 20, height: 35, borderRadius: 10, marginLeft: 1 }}>
                <Icon name="ios-search" size={22} color="#4f4a4a" />
                <TextInput placeholder="Search..." style={{ fontFamily: "Medium", paddingHorizontal: 10, fontSize: 12 }} />
            </View>

            <View style={{ alignItems: "center", elevation: 2, width: "15%", backgroundColor: "#FFF", marginLeft: 5, height: 35, borderRadius: 10, marginLeft: 1, justifyContent: "center" }}>
                <Image source={require('../images/sort.png')} style={{ width: 18, height: 25 }} />
            </View>
        </View>)
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#fff", paddingHorizontal: 20 }} >
                {this.renderHeader()}
                {this.searchBar()}
                <CardSection title="Modern" subtitle="Good Quality items">
                    {products.map(d => <Card data={d} key={d.id} navigation={this.props.navigation} />)}
                </CardSection>

                <CardSection title="New Arrivals" subtitle="Good Quality items">
                    {products.map(d => <New data={d} key={d.id} />)}
                </CardSection>

                <CardSection title="Best Sellers">
                    {products.map(d => <Card data={d} key={d.id} navigation={this.props.navigation} />)}
                </CardSection>
            </ScrollView>
        );
    }
}