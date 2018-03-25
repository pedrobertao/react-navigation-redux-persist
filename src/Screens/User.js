import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import * as actions from '../Store/Actions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        width: 200,
        height: 60,
        backgroundColor: 'rgba(200,200,200,0.5)'
    }
});


class Logout extends Component {

    logoutAction = () => {
        this.props.startLogout(this.props.navigation);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Welcome back {this.props.login.user}</Text>
                <Text style={{ width: 200 }}> This scene is at the second nested StackNavigator </Text>
                <Text style={{ width: 200 }}> To test the redux-persist you can close and open the app and it will return to this page </Text>
                <TouchableHighlight style={styles.button} onPress={this.logoutAction}>
                    <Text> Log out </Text>
                </TouchableHighlight>

            </View>
        )
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        startLogout: (navigation) => dispatch(actions.logoutStart(navigation))
    }
}

mapStateToProps = (state) => {
    return {
        navigationState: state.nav,
        login: state.login
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Logout);