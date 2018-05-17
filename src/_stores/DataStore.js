import {observable, action, computed} from 'mobx'
// import {retrieveItem, storeItem} from '../_services/storageService'

export default class AssetsStore {
	@observable parsedData
	@observable noData = false

	@observable takenImage
	@observable type = 1
	@observable subType = 1
	@observable title = ''
	@observable description

	// @action
	// saveAsset(navigation) {
	// 	// if (this.props.navigation.state.params.item.title) {
	// 	// 	updateItem(this.state.category, this.state, this.props.navigation)
	// 	// } else {
	// 	let itemData = {
	// 		description: this.description,
	// 		title: this.title,
	// 		takenImage: this.takenImage,
	// 		type: this.type,
	// 		subType: this.subType,
	// 		date: new Date().toISOString().slice(0, 10),
	// 	}
	// 	this.parsedData.unshift(itemData)
	// 	storeItem('AssetData', itemData, navigation)
	// 	this.type = 1
	// 	// }
	// }
	// @action
	// loadData() {
	// 	retrieveItem('AssetData').then(data => {
	// 		if (data !== undefined) {
	// 			this.parsedData = data.reverse()
	// 		} else {
	// 			this.noData = true
	// 		}
	// 	})
	// }
}