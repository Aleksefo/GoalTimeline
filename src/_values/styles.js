import {Dimensions, StyleSheet} from 'react-native'


export const colors = {
	primary: '#7f0080',
	accent: '#ECC829',
	inactive: '#cacaca',
	danger: '#D2473C',
	lightText: '#fdfdfe'
	// iconSize: 24
}
export let wid = Dimensions.get('screen').width
export let hei = Dimensions.get('screen').height

export const styled = StyleSheet.create({
	iconS: {fontSize: hei * 0.05, color: colors.white},
})