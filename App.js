import React, { Component } from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';

import MyStackNavi from './navigators/MyStackNavigator';
import MyTabNavi from './navigators/MyTabNavigator';
import PostingDetail from './components/mainBoard/PostingDetail';

export default class App extends Component {
	constructor(props) {
		super(props);

		YellowBox.ignoreWarnings([
			'Warning: componentWillMount is deprecated',
			'Warning: componentWillReceiveProps is deprecated',
		]);
	}
	render() {
		return <MyTabNavi />;
		// return <PostingDetail />;
	}
}
