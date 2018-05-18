import React, {Component} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import MainNavigator from './_navigation/MainNavigator'
import {Provider} from 'mobx-react'
import stores from './_stores'

type Props = {};
export default class App extends Component<Props> {
	render() {
		return (
			<Provider {...stores}>
				<MainNavigator/>
			</Provider>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
