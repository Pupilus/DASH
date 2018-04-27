import React from 'react';

//Screen Name
import { MainScreen, DetailScreen, ThirdScreen } from '../screenNames';

//Components
import MainComponent from '../components/MainComponent';
import DetailComponent from '../components/DetailComponent';
import ThirdComponent from '../components/ThirdComponent';
import FlatListView from '../screens/FlatListView';

import { StackNavigator } from 'react-navigation';
import PostingDetail from '../components/mainBoard/PostingDetail';

const MyStackNavi = StackNavigator({
	MainScreen: {
		screen: FlatListView,
	},
	PostingDetail: {
		screen: PostingDetail,
		navigationOptions: {
			tabBarVisible: false,
		},
	},
	DetailScreen: {
		screen: DetailComponent,
	},
	ThirdScreen: {
		screen: ThirdComponent,
		navigationOptions: {
			headerTitle: 'Third',
		},
	},
});

export default MyStackNavi;
