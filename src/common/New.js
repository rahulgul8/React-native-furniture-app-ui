import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 60,
        width: 240,
        backgroundColor: "#fff",
        elevation: 2,
        padding: 6,
        marginVertical: 5,
        marginRight: 20,
        marginLeft: 2,
        borderRadius: 10
    }
})

export default class New extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('Detail', { data: this.props.data })}>
                <View>
                    <Image source={this.props.data.image} style={{ height: 50, width: 60, borderRadius: 10 }} />
                </View>

                <View style={{ width: "65%", justifyContent: "flex-end", paddingHorizontal: 10, height: "100%" }}>
                    <Text numberOfLines={2} style={{ fontSize: 8, fontFamily: "Medium", }}>
                        {this.props.data.name.trim()}
                    </Text>
                    <Text style={{ fontSize: 11, fontFamily: "Bold", }}>
                        ₹ {this.props.data.price}
                    </Text>
                </View>
                <View style={{ width: "5%", justifyContent: "flex-end", height: "100%" }}>
                    <Image source={require('../images/add.png')} style={{ height: 17, width: 17 }} />
                </View>

            </TouchableOpacity>
        )
    }
}