import { LOGIN_START, LOGOUT_START } from '../Actions/login'

const initialState = {
    user: null,
    isLoggedIn: false,

}

const loginReducer = (state = initialState, action) => {
    let updatedState;

    switch (action.type) {
        case LOGIN_START:
            updatedState = { ...initialState };
            updatedState.user = action.user;
            updatedState.isLoggedIn = true;
            return updatedState;

        case LOGOUT_START:
            updatedState = { ...initialState };
            updatedState.user = null;
            updatedState.isLoggedIn = false;

            return updatedState;

        default:
            return state;
    }
}

export default loginReducer;