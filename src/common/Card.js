import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Couches extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')} style={styles.container}>
                <Image source={this.props.data.image} style={{ width: 170, height: 110, borderRadius: 10 }} />
                <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                    <Text numberOfLines={1} style={{ fontFamily: "Bold", color: "#4f4a4a", fontSize: 12 }}>
                        {this.props.data.name}
                    </Text>
                    <View style={{ height: 4, width: 4, borderRadius: 4, backgroundColor: "red", marginHorizontal: 4 }}>
                    </View>
                    <Text style={{ color: "red", fontSize: 9, fontFamily: "Bold" }}>
                        {this.props.data.highlight}
                    </Text>
                </View>
                <Text numberOfLines={2}  style={{ fontSize: 9, color: "#4f4a4a", fontFamily: "Regular" }}>
                    {this.props.data.description.trim()}
                </Text>
                <View style={{ flexDirection: "row", marginTop: 5, alignItems: "center", width: "100%" }}>
                    <View style={{ width: "80%" }}>
                        <Text style={{ fontSize: 15, fontFamily: "Bold" }}>{this.props.data.price} ₹</Text>
                    </View>
                    <View style={{ width: "20%" }}>
                        <Image source={require('../images/add.png')} style={{ alignSelf: "flex-end", width: 25, height: 25 }} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        backgroundColor: "#FFF",
        height: 250,
        width: 200,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5
    }
})