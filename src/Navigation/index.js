import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import LoginNavigation from './LoginNavigation';
import MainNavigation from './MainNavigation';

class RootNavigation extends Component {
    render() {
        const { navigationState, dispatch } = this.props;
        const addListener = createReduxBoundAddListener("root");

        return <LoginNavigation navigation={addNavigationHelpers({
            dispatch, state: navigationState, addListener
        })}
        />

    }
}

const mapStateToProps = (state) => {
    return {
        navigationState: state.nav,
        login: state.login
    }
}

export default connect(mapStateToProps)(RootNavigation);
