import React, { Component } from 'react';
import { DetailScreen, ThirdScreen, Home } from '../../screenNames';
import Button from 'react-native-button';
import { Text, View, Image } from 'react-native';
const backgroundColor = '#964f8e';

export default class InfoComponent extends Component {
	static navigationOptions = ({ navigation }) => {
		let tabBarLabel = 'Info';
		let tabBarIcon = () => (
			<Image
				source={require('../../icons/info-icon.png')}
				style={{ width: 26, height: 26, tintColor: backgroundColor }}
			/>
		);
		return { tabBarLabel, tabBarIcon };
	};

	render() {
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: backgroundColor,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>This is Info Screen</Text>
				<Button
					containerStyle={{
						padding: 10,
						margin: 20,
						width: 200,
						height: 45,
						borderRadius: 10,
						backgroundColor: 'darkviolet',
					}}
					style={{ fontSize: 18, color: 'white' }}
					onPress={() => {
						console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`);
						this.props.navigation.navigate(Home);
					}}
				>
					Back to Home
				</Button>
			</View>
		);
	}
}
