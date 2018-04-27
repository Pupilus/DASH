import React, { Component } from 'react';
import { StyleSheet, Text, View, YellowBox, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';

//Components
import HomeComponent from '../components/tabComponents/HomeComponent';
import InfoComponent from '../components/tabComponents/InfoComponent';
import CloudComponent from '../components/tabComponents/CloudComponent';
import SettingsComponent from '../components/tabComponents/SettingsComponent';
import MyStackNavi from './MyStackNavigator';

import PostingDetail from '../components/mainBoard/PostingDetail';

//ScreenNames
import { Home, Info, Cloud, Settings, Super } from '../screenNames';

let routeConfigs = {
	Super: {
		screen: MyStackNavi,
		navigationOptions: {
			tabBarIcon: (
				<Image
					source={require('../icons/party-icon.png')}
					style={{ width: 26, height: 26, tintColor: '#964f8e' }}
				/>
			),
		},
	},
	Cloud: {
		screen: CloudComponent,
	},

	Home: {
		screen: HomeComponent,
	},

	Info: {
		screen: InfoComponent,
	},

	Settings: {
		screen: SettingsComponent,
	},
};

let tabNavigatorConfig = {
	tabBarPosition: 'bottom',
	animationEnabled: true,
	swipeEnabled: true,
	tabBarOptions: {
		activeTintColor: 'perple',
		labelStyle: {
			fontSize: 10,
			color: 'gray',
		},
		style: {
			backgroundColor: 'white',
			height: 50,
		},
		showIcon: true,
		showLabel: false,
	},
};

const MyTabNavi = TabNavigator(routeConfigs, tabNavigatorConfig);

export default MyTabNavi;
