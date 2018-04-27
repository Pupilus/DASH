import React, { Component } from 'react';
import { StyleSheet, View, Platform, StatusBar, Text, Image } from 'react-native';

export default class User extends Component {
	render() {
		return (
			<View style={styles.user}>
				<View style={{ height: 150, flexDirection: 'row' }}>
					<View style={{ width: 100, justifyContent: 'center', alignItems: 'center' }}>
						<Image source={require('../../icons/avatar.png')} style={{ width: 80, height: 80 }} />
					</View>
					<View style={{ flex: 1, justifyContent: 'center', paddingLeft: 10 }}>
						<Text style={{ fontSize: 25 }}>닉네임</Text>
						<Text style={{ color: '#aaa' }}>이름/아이디</Text>
						<Text style={{ color: '#aaa' }}>학교이름</Text>
					</View>
				</View>

				<View style={{ height: 50, flexDirection: 'row' }}>
					<View
						style={{
							flex: 1,
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							borderWidth: 0.5,
							borderColor: 'gray',
						}}
					>
						<Image source={require('../../icons/list.png')} style={{ width: 20, height: 20 }} />
						<Text style={{ marginLeft: 5 }}>내가 쓴 글</Text>
					</View>

					<View
						style={{
							flex: 1,
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							borderWidth: 0.5,
							borderLeftWidth: 0,
							borderRightWidth: 0,
							borderColor: 'gray',
						}}
					>
						<Image source={require('../../icons/chat.png')} style={{ width: 25, height: 20 }} />
						<Text style={{ marginLeft: 5 }}>댓글 단 글</Text>
					</View>

					<View
						style={{
							flex: 1,
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							borderWidth: 0.5,
							borderColor: 'gray',
						}}
					>
						<Image source={require('../../icons/star.png')} style={{ width: 25, height: 25 }} />
						<Text style={{ marginLeft: 5 }}>스크랩</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	user: {
		height: 200,
		backgroundColor: '#fff',
	},
});
