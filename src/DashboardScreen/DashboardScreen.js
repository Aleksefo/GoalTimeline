import React, { Component } from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Timeline from 'react-native-timeline-listview'
class DashboardScreen extends Component {
	constructor(){
		super()
		this.data = [
			{time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
			{time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
			{time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
			{time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
			{time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
		]
	}
  
	render() {
		const {} = styles
		return (
			<Timeline
				data={this.data}
			/>
		)
	}
}

const styles  = StyleSheet.create({
	styleTop: {
	},
})

export default DashboardScreen