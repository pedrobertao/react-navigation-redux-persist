import RootNavigation from '../../Navigation/RootNavigation'


const initialState = null;

  
const navigationReducer = (state = initialState, action) => {
    const nextState = RootNavigation.router.getStateForAction(action, state);
    return nextState || state;
};

export default navigationReducer;
