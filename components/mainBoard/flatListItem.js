import React, { Component } from 'react';
import { StyleSheet, View, Platform, StatusBar, Text, FlatList, Image, Button, TouchableHighlight } from 'react-native';
import { PostingDetail } from '../../screenNames';

//component for flatlist item.
export default class FlatListItem extends Component {
	render() {
		const { navigation } = this.props;
		return (
			<TouchableHighlight
				onPress={() => {
					// this.props.navigate(DetailScreen);
					navigation.navigate(PostingDetail, this.props.item);
				}}
			>
				<View style={styles.flatListItem}>
					{/* profile & alarm */}
					<View style={styles.header}>
						{/* profile */}
						<View style={styles.profile}>
							<Image source={{ uri: this.props.item.avatar }} style={styles.profilePicture} />
							<Text style={styles.profileName}>{this.props.item.name}</Text>
						</View>

						{/* alarm */}
						<Image source={require('../../icons/star.png')} style={styles.alarm} />
					</View>

					<View>
						{/* title */}
						<Text style={styles.title} numberOfLines={1}>
							{this.props.item.title}
						</Text>

						{/* context */}
						<Text style={styles.context} numberOfLines={2}>
							{this.props.item.context}
						</Text>
					</View>

					<View style={styles.footer}>
						<Text style={{ flex: 1 }}>{this.props.item.date}</Text>
						<Text>{this.props.item.clicks}/</Text>
						<Text>{this.props.item.likes}/</Text>
						<Text>{this.props.item.comments}</Text>
					</View>
				</View>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	flatListItem: {
		flex: 1,
		flexDirection: 'column',
		padding: 8,
		backgroundColor: '#ffffff',
		borderWidth: 0.5,
		borderBottomWidth: 1.5,
		borderRightWidth: 1.5,
		borderColor: '#ccc',
		margin: 3,
		borderRadius: 3,
	},
	header: {
		flex: 1,
		flexDirection: 'row',
		marginBottom: 10,
	},
	profile: {
		flex: 1,
		flexDirection: 'row',
	},
	profilePicture: {
		width: 20,
		height: 20,
		borderRadius: 10,
	},
	profileName: {
		fontSize: 14,
		paddingLeft: 5,
	},
	alarm: {
		width: 20,
		height: 20,
	},
	title: {
		fontSize: 18,
		marginBottom: 10,
	},
	context: {
		fontSize: 14,
		color: '#555555',
	},
	footer: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 10,
	},
});
