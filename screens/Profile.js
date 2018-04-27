import React, { Component } from 'react';
import { StyleSheet, View, Platform, StatusBar, Text, Image } from 'react-native';
import User from '../component/profile/user';
import TopNavBar from '../component/profile/topNavBar';
import ButtonGroup from '../component/profile/buttonGroup';
// import BottomNavBar from '../component/profile/bottomNavBar';

export default class Profile extends Component {
	componentWillMount() {}

	render() {
		return (
			<View style={styles.container}>
				<TopNavBar />
				<User />
				<View style={{ height: 20 }} />
				<ButtonGroup />
				<View style={{ flex: 2 }} />
				{/* <BottomNavBar /> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#ccc',
		...Platform.select({
			android: {
				marginTop: StatusBar.currentHeight,
			},
		}),
	},
});
