import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native';

export default class PostingBox extends Component {
	state = {
		title: '',
		context: '',
		isLoading: false,
	};
	onSave = () => {
		this.props.onCreate(this.state);
		this.setState({ isLoading: true });
	};

	reset() {
		this.setState({
			title: '',
			context: '',
			isLoading: false,
		});
	}

	render() {
		return (
			<View style={styles.inputGroup}>
				<TextInput
					style={styles.title}
					placeholder="Title"
					value={this.state.title}
					onChangeText={title => this.setState({ title })}
					autoFocus={true}
					underlineColorAndroid={'white'}
				/>
				<TextInput
					style={styles.context}
					placeholder="text"
					value={this.state.context}
					onChangeText={context => this.setState({ context })}
					multiline={true}
				/>
				<TouchableOpacity onPress={this.onSave} style={styles.button}>
					<Text>save</Text>
				</TouchableOpacity>

				{this.state.isLoading && (
					<View style={styles.loading}>
						<ActivityIndicator />
					</View>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
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
	loading: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F5FCFF55',
	},
});
