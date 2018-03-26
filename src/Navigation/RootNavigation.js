import React, { Component } from 'react';
import { SwitchNavigator, addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import LoginNavigation from './LoginNavigation';
import MainNavigation from './MainNavigation';


const RootNavigation = SwitchNavigator({
    Login: { screen: LoginNavigation },
    Main: { screen: MainNavigation }
})


export default RootNavigation;
