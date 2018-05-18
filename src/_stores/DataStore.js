import {observable, action, computed} from 'mobx'
import {retrieveItem, storeItem} from '../_services/storageService'

export default class AssetsStore {
	@observable parsedData = []
	@observable noData = false

	@observable time = '09:00'
	@observable title = ''
	@observable description

	@action
	saveAsset(navigation) {
		// if (this.props.navigation.state.params.item.title) {
		// 	updateItem(this.state.category, this.state, this.props.navigation)
		// } else {
		let itemData = {
			description: this.description,
			title: this.title,
			time: this.time,
			// date: new Date().toISOString().slice(0, 10),
		}
		this.parsedData.unshift(itemData)
		storeItem('AssetData', itemData, navigation)
		// }
	}
	@action
	loadData() {
		retrieveItem('AssetData').then(data => {
			if (data !== null) {
				this.parsedData = data.reverse()
			} else {
				this.noData = true
			}
		})
	}
}