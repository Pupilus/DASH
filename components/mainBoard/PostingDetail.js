import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, FlatList, TextInput } from 'react-native';
import { randomUsers } from '../mainBoard/util';
import faker from 'faker';
import CommentItem from './CommentItem';
import Button from 'react-native-button';

export default class PostingDetail extends Component {
	//navigation options
	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;

		let headerStyle = { backgroundColor: '#964f8e' };
		let headerTitleStyle = { color: 'yellow' };
		let headerBackTitle = 'Back';
		return { headerStyle, headerTitleStyle };
	};
	constructor(props) {
		super(props);
		this.state = {
			data: randomUsers(15),
		};
	}
	render() {
		let postingData = this.props.navigation.state.params;
		return (
			<View style={{ flex: 1 }}>
				<ScrollView style={styles.container}>
					<Text style={styles.title}>{postingData.title}</Text>
					<View style={styles.info}>
						<View style={styles.profile}>
							<Image source={{ uri: faker.image.avatar() }} style={styles.profilePicture} />
							<Text style={styles.profileName}>{faker.name.firstName()}</Text>
						</View>
						<Text style={styles.date}>2018-04-20</Text>
					</View>
					<Text style={styles.context}>{postingData.context}</Text>
					<View style={styles.interaction}>
						<Image source={require('../../icons/heart-fill-icon.png')} style={{ tintColor: 'pink' }} />
						<Text>{postingData.likes}</Text>
					</View>

					<View style={{ height: 20, backgroundColor: '#efefef' }} />

					<Text style={styles.commentLabel}>Comments</Text>
					{this.state.data != '' ? (
						<FlatList
							data={this.state.data}
							renderItem={({ item, index }) => {
								return <CommentItem item={item} index={index} />;
							}}
							keyExtractor={(item, index) => index.toString()}
							style={{ borderTopWidth: 1, borderTopColor: 'lightgray' }}
						/>
					) : (
						<Text>no comment </Text>
					)}
				</ScrollView>
				<View style={styles.commentInput}>
					<TextInput
						style={styles.comment}
						placeholder="comment"
						multiline={true}
						numberOfLines={2}
						underlineColorAndroid={'white'}
						maxHeight={60}
					/>
					<Button style={styles.button}>
						<Text>Ok</Text>
					</Button>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#ffffff',
	},
	title: {
		fontSize: 18,
		padding: 5,
	},
	info: {
		flexDirection: 'row',
		padding: 5,
		borderBottomWidth: 1,

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
	context: {
		padding: 10,
		paddingVertical: 30,
	},
	interaction: {
		flexDirection: 'row',
		padding: 5,

		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	commentLabel: {
		padding: 5,
		paddingVertical: 20,
	},

	commentInput: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'lightgray',
		borderBottomWidth: 1,
		padding: 5,
		height: 50,
	},
	comment: {
		flex: 1,
		padding: 5,
	},
	button: {},
});
