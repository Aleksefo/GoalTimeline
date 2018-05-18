import React, {Component} from 'react'
import {View, StyleSheet, Text, TouchableOpacity, StatusBar, FlatList} from 'react-native'
import Timeline from 'react-native-timeline-listview'
import {colors, hei, wid} from '../_values/styles'
import strings from '../_values/strings'
import {observer, inject} from 'mobx-react'
import {clearItems} from '../_services/storageService'

@inject('dataStore')
@observer
export default class DashboardScreen extends Component {
	constructor() {
		super()
		this.data = [
			{time: '5', title: 'Event 1', description: 'Event 1 Description'},
			{time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
			{time: '11', title: 'Event 3', description: 'Event 3 Description'},
			{time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
			{time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
		]
	}

	static navigationOptions = ({navigation}) => {
		return {
			headerRight: (
				<TouchableOpacity
					onPress={() =>
					{navigation.navigate('Edit'
							, {
								item: {
									title: '',
									descr: '',
									// category: navigation.state.params.category,
								},
							}
						)

					}
					}>
					<Text style={{color: colors.lightText, marginRight: wid * 0.05}}>Add</Text>
					{/*<Icon type="Ionicons" name="ios-add-outline" style={styled.iconS} />*/}
				</TouchableOpacity>
			),
		}
	}

	componentWillMount() {
		// clearItems()
		this.props.dataStore.loadData()

	}

	render() {
		console.log('App rendered')
		testData = this.props.dataStore.parsedData
		console.log(`dataStore is `, this.data)
		return (
			<View>
				<StatusBar backgroundColor={colors.primary} barStyle="light-content"/>
				{this.props.dataStore.noData ? (
					<Text>{strings.noData}</Text>
				) : (
					<View style={{height: hei*0.5}}>
						<Timeline
							// data={this.props.dataStore.parsedData}
							data={this.data}
						/>
					</View>)}
				<FlatList
					// data={this.props.dataStore.parsedData}
					data={this.props.dataStore.parsedData}
					keyExtractor={(item, index) => index}
					ItemSeparatorComponent={() => <View style={styles.separator} />}
					renderItem={({item}) => <Text>{item.title}</Text>}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	styleTop: {},
})
