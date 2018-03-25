import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import User from '../Screens/User';
import UserInfo from '../Screens/UserInfo';

const MainNavigation = StackNavigator({
    User: { screen: User },
    UserInfo: { screen: UserInfo },
}, { initialRouteName: 'User', headerMode: 'none' });


export default MainNavigation;