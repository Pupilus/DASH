import React, { Component } from 'react';
import { StyleSheet, View, Platform, StatusBar, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import { randomUsers } from '../components/mainBoard/util';
import faker from 'faker';
import { ScrollView, TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import PostingBox from '../components/mainBoard/postingBox';
import FlatListItem from '../components/mainBoard/flatListItem';
import { Button } from 'react-native-button';

const URI = 'http://54.215.253.103';
// const URI = 'http://localhost:8000';

class NewPostingButton extends Component {
	render() {
		return (
			<Text style={styles.newPostingButton} onPress={this.props.handler}>
				Write a new posting.
			</Text>
		);
	}
}

export default class MyFlatList extends Component {
	//navigation options
	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		let headerTitle = 'Main';
		let headerStyle = { backgroundColor: '#964f8e' };
		let headerTitleStyle = { color: 'yellow' };
		let headerBackTitle = 'Back';
		// let headerRight = (
		// 	<Button
		// 		containerStyle={{
		// 			margin: 10,
		// 			// padding: 10,
		// 			borderRadius: 10,
		// 			// backgroundColor: 'darkviolet',
		// 			justifyContent: 'center',
		// 		}}
		// 		style={{ fontSize: 15, color: 'dodgerblue' }}
		// 		onPress={() => {
		// 			params.onsave();
		// 		}}
		// 	>
		// 		Save
		// 	</Button>
		// );

		return { headerTitle, headerTitleStyle, headerBackTitle, headerStyle };
	};
	constructor(props) {
		super(props);

		this.state = {
			data: randomUsers(20),
			isShowInput: false,
			isLoading: true,
		};

		this.handler = this.visiblePostingBox.bind(this);
	}

	visiblePostingBox(e) {
		e.preventDefault();
		this.setState({
			isShowInput: true,
		});
	}

	resetPostingBox() {
		this.refs.postingBox.reset();
	}

	addNewPost(newData) {
		const { responseData } = this.state;

		responseData.unshift(newData);

		this.setState({ responseData: responseData.slice(0) });
	}

	handleCreate = data => {
		fetch(URI + '/boards', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: data.title,
				context: data.context,
			}),
		})
			.then(response => response.json())
			.then(responseJson => {
				console.log(responseJson);
				this.addNewPost(responseJson);
				this.resetPostingBox();
			});
	};

	componentDidMount() {
		return fetch(URI + '/boards', { method: 'GET' })
			.then(response => response.json())
			.then(responseJson => {
				this.setState({
					isLoading: false,
					responseData: responseJson.boards,
				});
			})
			.catch(error => {
				console.error(error);
			});
	}

	render() {
		const { navigation } = this.props;
		if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' }}>
					<ActivityIndicator size="large" />
				</View>
			);
		}
		return (
			<ScrollView>
				{/* posting box */}
				<View style={{ backgroundColor: '#eeeeee', padding: 2 }}>
					{this.state.isShowInput ? (
						<PostingBox onCreate={this.handleCreate} ref={'postingBox'} />
					) : (
						<NewPostingButton handler={this.handler} />
					)}
				</View>
				{/* posting list */}
				<FlatList
					data={this.state.responseData}
					renderItem={({ item, index, naviagation }) => {
						return <FlatListItem item={item} index={index} navigation={navigation} />;
					}}
					keyExtractor={(item, index) => index.toString()}
				/>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	flatListItem: {
		color: 'white',
		padding: 10,
		fontSize: 12,
	},

	title: {
		color: 'black',
		fontSize: 15,
	},

	newPostingButton: {
		borderWidth: 1,
		borderColor: 'gray',
		margin: 3,
		marginBottom: 0,
		padding: 3,
		backgroundColor: '#ffffff',
		fontSize: 18,
		color: 'lightgray',
	},
	inputGroup: {
		borderWidth: 1,
		margin: 5,
		borderColor: 'gray',
		backgroundColor: '#dddddd',
	},
	title: {
		borderColor: 'gray',
		borderBottomWidth: 1,
		marginBottom: 0,
		padding: 3,
		backgroundColor: '#ffffff',
		fontSize: 18,
	},

	context: {
		borderColor: 'gray',
		height: 100,
		borderBottomWidth: 1,
		marginTop: 0,
		padding: 3,
		backgroundColor: '#ffffff',
		fontSize: 14,
		textAlignVertical: 'top',
	},

	button: {
		flex: 1,
		flexDirection: 'row',
		alignSelf: 'flex-end',
		backgroundColor: '#eaa',
		margin: 1,
		borderWidth: 0.5,

		padding: 10,
	},
});
