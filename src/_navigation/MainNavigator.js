import DashboardScreen from '../DashboardScreen/DashboardScreen'
import {createDrawerNavigator, createStackNavigator} from 'react-navigation'
import {colors, hei} from '../_values/styles'
import strings from '../_values/strings'
import GoalDetailsScreen from '../GoalDetailsScreen/GoalDetailsScreen'
import GoalEditScreen from '../GoalEditScreen/GoalEditScreen'

const MainStack = createStackNavigator(
	{
		Dashboard: {screen: DashboardScreen, navigationOptions: {headerTitle: strings.dashboard}},
		Edit: {screen: GoalEditScreen, navigationOptions: {headerTitle: strings.edit}},
		Details: {screen: GoalDetailsScreen, navigationOptions: {headerTitle: strings.details}},
	},
	{
		initialRouteName: 'Dashboard',
		navigationOptions: ({navigation}) => ({
			// headerRight: (
			// 	<Ionicons
			// 		// style={styles.capture}
			// 		name="ios-help-circle-outline"
			// 		size={hei * 0.05}
			// 		color={colors.accent}
			// 		onPress={() => alert('Some long text about this screen')}
			// 	/>
			// ),
			// headerLeft: (
			// 	<Ionicons
			// 		// style={styles.capture}
			// 		name="ios-menu-outline"
			// 		size={hei * 0.05}
			// 		color={colors.accent}
			// 		onPress={() => navigation.openDrawer()}
			// 	/>
			// ),
			headerStyle: {
				backgroundColor: colors.primary,
				height: hei * 0.07,
			},
			headerTitleStyle: {
				// flex: 1,
				// textAlign: 'center',
				// alignSelf: 'center',
				color: colors.lightText,
				// alignItems: 'center',
				// justifyContent: 'center',
			},
		}),
		// lazy: false,
	},
)

export default Drawer = createDrawerNavigator(
	{
		MainStack: {screen: MainStack},
	},
	{
		// drawerWidth: wid * 0.6,
		drawerPosition: 'left',
		// contentComponent: props => <CustomDrawer {...props} />,
		// initialRouteName: 'Dashboard',
	},
)