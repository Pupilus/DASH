import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

export default class CommentItem extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.info}>
					<View style={styles.profile}>
						<Image source={{ uri: this.props.item.avatar }} style={styles.profilePicture} />
						<Text style={styles.profileName}>{this.props.item.name}</Text>
					</View>
					<Text style={styles.date}>2018-04-20</Text>
				</View>
				<Text style={styles.comment}>{this.props.item.title}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		padding: 5,
		marginBottom: 10,
		backgroundColor: '#ffffff',
		borderBottomWidth: 1,
		borderColor: 'lightgray',
	},

	info: {
		flex: 1,
		flexDirection: 'row',

		borderColor: 'lightgray',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	profile: {
		flex: 1,
		flexDirection: 'row',
	},
	profilePicture: {
		width: 15,
		height: 15,
		borderRadius: 10,
	},
	profileName: {
		fontSize: 12,
		paddingLeft: 5,
		color: '#555',
	},
	date: {
		fontSize: 12,
		color: '#555',
	},
	comment: {
		paddingVertical: 10,
	},
});
