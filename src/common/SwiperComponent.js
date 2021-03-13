import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF"
    },
    dotStyle: {
        backgroundColor: "#000",
        borderColor: "#000",
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10
    },
    activeDotStyle: {
        borderColor: "#000",
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10
    }
})

export default class SwiperComponent extends React.Component {
    render() {
        if (this.props.images) {
            return (
                <Swiper style={styles.wrapper} dotStyle={styles.dotStyle} activeDotColor="#FFF" activeDotStyle={styles.activeDotStyle}>
                    {this.props.images.map((d, index) => (<View style={styles.slide} key={index}>
                        <Image source={d} style={{ height: 300, width: 300 }} />
                    </View>))}
                </Swiper>
            )
        }
        return null
    }
}