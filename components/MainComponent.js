import React, { Component } from 'react';
import { DetailScreen, ThirdScreen } from '../screenNames';
import Button from 'react-native-button';
import { Text, View, ActivityIndicator } from 'react-native';

export default class MainComponent extends Component {
	//navigation options
	static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state;
		let headerTitle = 'Main';
		let headerTitleStyle = { color: 'red' };
		let headerBackTitle = 'Back';
		let headerRight = (
			<Button
				containerStyle={{
					margin: 10,
					// padding: 10,
					borderRadius: 10,
					// backgroundColor: 'darkviolet',
					justifyContent: 'center',
				}}
				style={{ fontSize: 15, color: 'dodgerblue' }}
				onPress={() => {
					params.onsave();
				}}
			>
				Save
			</Button>
		);

		return { headerTitle, headerTitleStyle, headerRight, headerBackTitle };
	};

	_onsave() {
		if (this.props.navigation.state.params.isSaving == true) {
			return;
		}
		this.props.navigation.setParams({ isSaving: true });

		setTimeout(() => {
			console.log('Is Saving...');
			this.props.navigation.setParams({ isSaving: false });
		}, 1000);
	}

	componentDidMount() {
		this.props.navigation.setParams({ onsave: this._onsave.bind(this), isSaving: false });
	}

	render() {
		const { navigation } = this.props;
		let dataSendToDetail = {
			name: 'Star Wars',
			releaseYear: 1977,
		};

		let mainView =
			navigation.state.params && this.props.navigation.state.params.isSaving == true ? (
				<ActivityIndicator />
			) : (
				<View
					style={{
						flex: 1,
						backgroundColor: 'dodgerblue',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>This is Main Screen</Text>
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
							// this.props.navigate(DetailScreen);
							navigation.navigate(DetailScreen, dataSendToDetail);
						}}
					>
						Navigate to Detail
					</Button>
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
							navigation.navigate(ThirdScreen);
						}}
					>
						Navigate to Third
					</Button>
				</View>
			);

		return mainView;
	}
}
