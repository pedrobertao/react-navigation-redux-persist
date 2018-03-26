import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import LoginNavigation from './LoginNavigation';
import MainNavigation from './MainNavigation';
import RootNavigation from './RootNavigation';

class AppWithState extends Component {
    render() {
        const { navigationState, dispatch } = this.props;
        const addListener = createReduxBoundAddListener("root");

        return <RootNavigation />

    }
}

const mapStateToProps = (state) => {
    return {
        navigationState: state.nav,
        login: state.login
    }
}

export default connect(mapStateToProps)(AppWithState);
