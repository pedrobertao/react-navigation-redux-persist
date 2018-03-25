import { NavigationActions } from 'react-navigation';
export const LOGIN_START = "LOGIN_START";
export const LOGOUT_START = "LOGOUT_START";


export const loginStart = (navigation, user) => {

    const resetAction = NavigationActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName: 'UserProfile' })],
    });
    navigation.dispatch(resetAction);
    return {
        type: LOGIN_START,
        user
    }
}

export const logoutStart = (navigation) => {

    const resetAction = NavigationActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName: 'Login' })],
    });
    navigation.dispatch(resetAction);
    return {
        type: LOGOUT_START,
    }
}