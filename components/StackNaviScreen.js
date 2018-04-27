import React, { Component } from 'react';
import { Image } from 'react-native';
import MyStackNavi from '../navigators/MyStackNavigator';

const backgroundColor = '#800';

export default class StackNaviScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		let tabBarLabel = 'Super';
		let tabBarIcon = () => (
			<Image
				source={require('../icons/party-icon.png')}
				style={{ width: 26, height: 26, tintColor: backgroundColor }}
			/>
		);
		let tabBarVisible = true;
		return { tabBarLabel, tabBarIcon, tabBarVisible };
	};
	render() {
		return <MyStackNavi />;
	}
}
