import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Login from '../screens/Login';
import Payment from '../screens/Payment';
import ChooseAddress from '../screens/ChooseAddress'

import { AppLoading } from 'expo'
import ReviewOrder from '../screens/ReviewOrder';
import EditAddress from '../screens/EditAddress';

const stackNavigatorOptions = {
    headerShown: false
}

const AppNavigator = createStackNavigator({
    Login: { screen: Login },
    Home: { screen: Home },
    Detail: { screen: Detail },
    ChooseAddress: { screen: ChooseAddress },
    ReviewOrder: { screen: ReviewOrder },
    Payment: { screen: Payment },
    EditAddress: { screen: EditAddress }
},
    {
        defaultNavigationOptions: stackNavigatorOptions
    }
)
export default createAppContainer(AppNavigator);