import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';
import { Home } from '../Pages';

const Router = createStackNavigator({
    Home:{
        screen:Home,
    }
})

export default createStackNavigator(Router)