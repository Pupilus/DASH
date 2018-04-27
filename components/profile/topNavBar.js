import React, {Component} from "react";
import {View, Text, StyleSheet} from 'react-native';

export default class TopNavBar extends Component {
    render() {
        return (
            <View style={styles.topNavBar}>
                <Text style={styles.topNavText}> 더보기 </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topNavBar: {
        height: 60,
        backgroundColor: "#f77",
        justifyContent: "center",
        alignItems: "center"

    },


    topNavText: {
        color: "#000",
        fontSize: 20
    }

});