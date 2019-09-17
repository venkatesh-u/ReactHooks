import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from './screens/Home';
import Screen2 from './screens/Screen2';

const routes = createStackNavigator({

    Home: {
        screen:Home,
        navigationOptions:{
            title:'Home'
        }
    },
    Screen2: {
        screen:Screen2,
        navigationOptions:{
            title:'Screen2'
        }
    }

})

const Container = createAppContainer(routes);

export default Container;