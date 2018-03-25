import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, BackHandler, TextInput} from 'react-native';
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
    buttonSignup:{
        alignItems:'center',
        justifyContent:'center',
        margin: 20,
        width: 150,
        height: 60,
        backgroundColor:'rgba(200,200,200,0.5)'
    },
    buttonLogin:{
        alignItems:'center',
        justifyContent:'center',
        width: 150,
        marginTop: 5,
        height: 60,
        backgroundColor:'rgba(200,200,200,0.5)'
    },
    input:{
        padding: 5,
        width: 150,
        height: 60,
    }
});


class Login extends Component {
    
    state = {
        user: 'Jeff'
    }

    loginAction = () => {
        this.props.startLogin(this.props.navigation,this.state.user);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> I'm on Login Page </Text>

                <TextInput
                        style={styles.input}
                        onChangeText={(user) => this.setState({user})}
                        value={this.state.user}
                />
                <TouchableHighlight style={styles.buttonLogin} onPress={this.loginAction}>
                <Text> Log me in </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonSignup} onPress={() => { this.props.navigation.navigate('SignUp') }}>
                    <Text> Test Navigate </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        startLogin: (navigation, user) => dispatch(actions.loginStart(navigation, user))
    }
}


export default connect(null, mapDispatchToProps)(Login);