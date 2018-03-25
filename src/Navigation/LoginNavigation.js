import React from 'react';
import { StackNavigator, NavigationActions } from 'react-navigation';
import MainNavigation from './MainNavigation';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';


const LoginNavigator = StackNavigator({
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    UserProfile: { screen: MainNavigation }
}, {
        initialRouteName: 'Login',
    });

export default LoginNavigator;