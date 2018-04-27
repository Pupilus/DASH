import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class ButtonGroup extends Component {
	render() {
		return (
			<View style={styles.buttonGroup}>
				<View style={{ flex: 1, flexDirection: 'row' }}>
					<Button name="내계정" />
					<Button name="친구" />
					<Button name="강의평가" />
					<Button name="학점계산기" />
				</View>
				<View style={{ flex: 1, flexDirection: 'row' }}>
					<Button name="쪽지함" />
					<Button name="공지사항" />
					<Button name="도움말" />
					<Button name="앱 설정" />
				</View>
			</View>
		);
	}
}

class Button extends Component {
	render() {
		return (
			<View style={styles.button}>
				<Image source={require('../../icons/logo-white.png')} style={{ width: 25, height: 25 }} />
				<Text style={styles.buttonText}>{this.props.name}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	buttonGroup: {
		height: 200,
		backgroundColor: '#77f',
		flexDirection: 'column',
	},

	button: {
		flex: 1,
		borderWidth: 0.3,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 15,
		marginTop: 5,
	},
});
