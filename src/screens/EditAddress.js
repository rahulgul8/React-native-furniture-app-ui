import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native';
import { COLORS } from '../../constants';
import BackHeader from '../common/BackHeader';
import IconButton from '../common/IconButton';
import { MaterialIcons } from '@expo/vector-icons';

export default class EditAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "#fff", paddingHorizontal: 20 }} >
                <BackHeader navigation={this.props.navigation} title="Add a new Address" />
                <View>
                    <TextInput style={styles.input} placeholder="Full Name"
                        maxLength={20} keyboardType="default" placeholderTextColor={COLORS.darkGray} />
                    <TextInput style={styles.input} placeholder="Mobile number"
                        maxLength={10} keyboardType="numeric" placeholderTextColor={COLORS.darkGray} />
                    <TextInput style={styles.input} placeholder="PIN code"
                        maxLength={6} keyboardType="numeric" placeholderTextColor={COLORS.darkGray} />
                    <TextInput style={styles.input} placeholder="Flat, House no., Building, Company, Apartment"
                        maxLength={20} placeholderTextColor={COLORS.darkGray} />
                    <TextInput style={styles.input} placeholder="Area, Colony, Street, Village"
                        maxLength={20} placeholderTextColor={COLORS.darkGray} />
                    <TextInput style={styles.input} placeholder="Landmark e.g. near Hospital"
                        maxLength={20} placeholderTextColor={COLORS.darkGray} />
                    <TextInput style={styles.input} placeholder="Town/City"
                        maxLength={20} placeholderTextColor={COLORS.darkGray} />
                </View>
                <IconButton>
                    <MaterialIcons name="done" size={24} color="white" />
                    <Text style={{ color: 'white', fontFamily: 'Bold' }}> Submit</Text>
                </IconButton>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        alignSelf: 'stretch',
        borderWidth: 1,
        padding: 5,
        paddingLeft: 15,
        borderRadius: 5,
        borderColor: COLORS.darkGray,
        marginBottom: 10
    }
});