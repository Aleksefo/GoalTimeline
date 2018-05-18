import React from 'react'
import {AsyncStorage} from 'react-native'

export const retrieveItem = async category => {
	try {
		return await AsyncStorage.getItem(category).then(data => {
			console.log('loadSavedData of ', category, data)
			let parsedData = JSON.parse(data)
			return parsedData
		})
	} catch (error) {
		console.log('loadSavedData error ' + error)
	}
}
export const storeItem = async (category, data, navigation) => {
	try {
		console.log('Saving storeItem ', category, data, navigation)
		return await AsyncStorage.getItem(category).then(keys => {
			keys = keys === null ? [] : JSON.parse(keys)
			keys.push(data)
			AsyncStorage.setItem(category, JSON.stringify(keys)).then(() => {
				handleNavigate(category, data, navigation, keys)
			})
		})
	} catch (error) {
		console.log('CSVData saving error ' + error)
	}
}

const handleNavigate = (category, data, navigation) => {
	// if (['notes', 'contacts'].includes(category)) {
	// 	console.log('Notes or saved', category, data)
	// 	navigation.navigate(category.replace(/\b\w/g, l => l.toUpperCase())) //goals to Goals
	// } else
	// if (category === 'AssetData') {
		console.log('AssetData saved', data)
		navigation.navigate('Dashboard') //todo disable animation
		// }
		// else if (['myDay1', 'myDay2', 'myDay3'].includes(category)) {
		// 	console.log('MyDay saved', category, data)
		// 	navigation.navigate('MyDay') //todo disable animation
	// } else {
	// 	console.log('Default saved', category, data)
	// 	navigation.navigate('Section', {
			// list: keys,
			// title: strings[category],
			// category: data.category,
		// })
	// }
}

export const clearItems = async () => {
	AsyncStorage.clear()
}