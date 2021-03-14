import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SwiperComponent from '../common/SwiperComponent'
import Stars from 'react-native-stars';
import { ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import BackHeader from '../common/BackHeader';
import { COLORS } from '../../constants';





export default class Detail extends React.Component {

    colorBox = () => {
        return (<View style={{ marginTop: 150 }}>
            <View style={{ backgroundColor: "#3f3a42", ...styles.colorBox }}></View>
            <View style={{ backgroundColor: "#707070", ...styles.colorBox }}></View>
            <View style={{ backgroundColor: "#b3b4b9", ...styles.colorBox }}></View>
        </View>)
    }

    reviews = () => {
        return (<View style={{ width: "35%" }}>
            <Text style={{ fontFamily: "Bold", fontSize: 9, color: "#4f4a4a" }}>Customers Rating</Text>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
                <Stars default={4} count={5} half={true} starSize={20} fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />} emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                    halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} />}
                />
                <Text style={{ fontSize: 8, fontFamily: "Bold", marginHorizontal: 5, paddingTop: 4, color: "#b3aeae" }}>
                    84 Reviews
            </Text>
            </View>
        </View>)
    }

    others = () => {
        return (<ScrollView style={{ marginTop: 40 }} horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.more}>
                <Image source={require('../images/12.png')} style={{ height: 80, width: 80 }} />
            </View>
            <View style={styles.more}>
                <Image source={require('../images/13.png')} style={{ height: 80, width: 80 }} />
            </View>
            <View style={styles.more}>
                <Image source={require('../images/14.png')} style={{ height: 80, width: 80 }} />
            </View>
            <View style={styles.more}>
                <Image source={require('../images/15.png')} style={{ height: 80, width: 80 }} />
            </View>
        </ScrollView>);
    }

    render() {
        const { name, price, description, image } = this.props.navigation.state.params.data;
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#fff", paddingHorizontal: 20 }} >
                <BackHeader navigation={this.props.navigation} title="Details" />
                <View style={{ flexDirection: "row", height: 340, width: "100%" }}>
                    {/* {this.colorBox()} */}
                    <SwiperComponent images={[image]} />
                </View>
                <View style={{ width: "100%", alignItems: "flex-end" }}>
                    <Image source={require('../images/save.png')} style={{ marginTop: -45, width: 15, height: 20 }} />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", width: 15, marginTop: 20, width: "100%" }}>
                    <View style={{ width: "65%" }}>
                        <Text style={{ fontFamily: "Bold", fontSize: 18, color: "#4f4a4a" }}>{name}</Text>
                    </View>
                    {this.reviews()}
                </View>
                <Text style={{ fontFamily: "Bold", fontSize: 20, color: COLORS.black, marginTop: 10 }}> ₹ {price}</Text>
                <Text style={{ fontFamily: "Medium", fontSize: 14, lineHeight: 20, color: "#b3aeae", marginTop: 20 }}>
                    {description}
                </Text>
                {/* {this.others()} */}
                <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('ChooseAddress', { data: this.props.navigation.state.params.data })}>
                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Feather name="shopping-bag" size={24} color="white" />
                        <Text style={{ fontSize: 20, color: "#FFF", fontFamily: "Bold", marginHorizontal: 15 }}>
                            Buy now
                    </Text>
                    </View>
                </TouchableHighlight>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    myStarStyle: {
        color: "#000",
        backgroundColor: 'transparent',
        textShadowColor: "black",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2
    },
    myEmptyStarStyle: {
        color: "white"
    },
    colorBox: {
        height: 25,
        width: 25,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#FFF",
        elevation: 5
    },
    more: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f6fb",
        height: 80,
        width: 80,
        borderRadius: 25,
        marginRight: 20
    },
    button: {
        marginTop: 20,
        backgroundColor: "#000",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        padding: 12,
        marginBottom: 15
    }
});