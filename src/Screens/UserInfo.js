import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const UserInfo = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{ width: 150 }}> This scene is at the First Stack Navigator for example it could be a SignUp page </Text>
        </View>
    )
}

export default UserInfo;