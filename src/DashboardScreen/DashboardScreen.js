import React, {Component} from 'react'
import {View, StyleSheet, Text, TouchableOpacity, StatusBar, FlatList} from 'react-native'
import Timeline from 'react-native-timeline-listview'
import {colors, hei, wid} from '../_values/styles'
import strings from '../_values/strings'
import {observer, inject} from 'mobx-react'
import {clearItems} from '../_services/storageService'
import {Button} from 'native-base'
import myRay from '../_values/TEST'

@inject('dataStore')
@observer
export default class DashboardScreen extends Component {
	constructor(props) {
		super(props)
		this.data = props.dataStore.parsedData
	}

	static navigationOptions = ({navigation}) => {
		return {
			headerRight: (
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Edit'
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
		console.log('Mobx', this.props.dataStore.parsedData)
		console.log('original', myRay)


		return (
			<View>
				<StatusBar backgroundColor={colors.primary} barStyle="light-content"/>
				{this.props.dataStore.noData ? (
					<Text>{strings.noData}</Text>
				) : (
					<View style={{height: hei * 0.3}}>
						<Timeline
							data={this.props.dataStore.parsedData}
							// data={this.data}
							// data={myRay}
							options={{
								removeClippedSubviews: false
							}}
							timeContainerStyle={{minWidth:72}}
						/>
					</View>)}
				{!this.props.dataStore.noData &&
				(
					<View style={{height: hei * 0.3, backgroundColor: 'pink'}}>
						<FlatList
							// data={myRay}
							data={this.props.dataStore.parsedData}
							keyExtractor={(item, index) => index}
							ItemSeparatorComponent={() => <View style={styles.separator}/>}
							renderItem={({item}) =>
								<View style={{flexDirection: 'row'}}>
									<Text>{`${item.title}  `}</Text>
									<Text>{item.description}</Text>
								</View>}
						/>
					</View>)}

				<Button onPress={() => this.props.dataStore.parsedData.unshift({
						description: 'Clid',
						title: 'Clickd',
						time: '5:00',
						// date: new Date().toISOString().slice(0, 10),
					})}>
					<Text style={{color: colors.lightText, marginRight: wid * 0.05}}>Save</Text>
				</Button>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	styleTop: {},
})
