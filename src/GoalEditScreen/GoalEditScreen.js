import React, { Component } from 'react'
import {View, StyleSheet, Text,Keyboard} from 'react-native'
import {Button, Container, Content, Form, Icon, Input, Item, Textarea} from 'native-base'
import strings from '../_values/strings'
import {colors, hei, styled, wid} from '../_values/styles'
import {observer, inject} from 'mobx-react'

@inject('dataStore')
@observer
export default class GoalEditScreen extends Component {
	constructor(props) {
		super(props)
		// this.state = props.navigation.state.params.item
		this.onSave = this.onSave.bind(this)
	}
	static navigationOptions = ({navigation}) => {
		const {params = {}} = navigation.state
		return {
			// title: navigation.state.params.title ,
			headerRight: (
				<Button transparent onPress={() => params.handleThis()}>
					<Text style={{color: colors.lightText, marginRight: wid*0.05}}>Save</Text>
					{/*<Icon type="Ionicons" name="ios-checkmark-circle-outline"  style={styled.iconS} />*/}
				</Button>
			),
		}
	}
	componentDidMount() {
		this.props.navigation.setParams({
			handleThis: this.onSave,
		})
		// this.createDate()
	}
	onSave() {
		Keyboard.dismiss()
		// if (this.props.navigation.state.params.item.title) {
			// updateItem(this.state.category, this.state, this.props.navigation)
		// } else {
			// storeItem(this.state.category, this.state, this.props.navigation)
		// }
		// console.log(this.state.category, this.state, this.props.navigation)
		let titleLength = this.props.dataStore.title
		titleLength.length >0 ? this.props.dataStore.saveAsset(this.props.navigation) : alert('Please enter the title.')

	}
	// createDate() {
	// 	console.log('Date is', Date.now())
	// 	this.props.navigation.state.params.item.date
	// 		? this.setState({date: this.props.navigation.state.params.item.date})
	// 		: this.setState({date: Date.now()})
	// }
	render() {
		// const {} = styles
		return (
			<Container>
				<Content padder>
					<Form>
						<Item>
							<Input
								placeholder={strings.title}
								value={this.props.dataStore.title}
								onChangeText={text => this.props.dataStore.title = text}
							/>
						</Item>
						<Textarea
							// rowSpan={5}
							// bordered
							style={{height: hei * 0.7}}
							placeholder={strings.description}
							value={this.props.dataStore.description}
							onChangeText={text => this.props.dataStore.description = text}
						/>
					</Form>
				</Content>
			</Container>
		)
	}
}

const styles  = StyleSheet.create({
	styleTop: {
	},
})
