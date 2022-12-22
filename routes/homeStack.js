import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Review from '../screens/review';
import { globalStyles } from '../styles/global';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "GameZone",
    },
  },
  Review: {
    screen: Review,
    navigationOptions: {
      title: "Review",
    },
  },
};

const stackNavOptions = {
  defaultNavigationOptions: {
    headerStyle: globalStyles.header,
  },
};

const HomeStack = createStackNavigator(screens, stackNavOptions);

export default createAppContainer(HomeStack);