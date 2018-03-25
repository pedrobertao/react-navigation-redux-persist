import LoginNavigation from '../../Navigation/LoginNavigation'


const initialState = LoginNavigation.router.getStateForAction(LoginNavigation.router.getActionForPathAndParams('Login'));

const navigationReducer = (state = initialState, action) => {
    const nextState = LoginNavigation.router.getStateForAction(action, state);
    return nextState || state;
};

export default navigationReducer;
