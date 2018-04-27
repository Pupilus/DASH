import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

export default class BottomNavBar extends Component {
	render() {
		return (
			<View style={styles.bottomNavBar}>
				<Tab name="게시판" />
				<Tab name="222" />
				<Tab name="333" />
				<Tab name="444" />
				<Tab name="555" />
			</View>
		);
	}
}

class Tab extends Component {
	render() {
		return (
			<View style={styles.tab}>
				<Image source={require('../../icons/logo-white.png')} style={{ width: 20, height: 20 }} />
				<Text style={styles.tabText}>{this.props.name}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	bottomNavBar: {
		height: 60,
		backgroundColor: '#fff',
		flexDirection: 'row',
	},
	tab: {
		flex: 1,
		borderWidth: 0.3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	tabText: {
		fontSize: 10,
		marginTop: 5,
	},
});
