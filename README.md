# react-navigation-redux-persist
Simple app Demo that combines React Navigation, Redux Persist and Redux to simulate a Login Flow

The structure of this is app: 

Top Level: SwitchNavigator that includes [Main Navigator , Login Navigator] 
Second Level: Two separateds Stack Navigators that are Login Navigator or Main Navigator

The navigation state is saved in the redux state and also in the AsyncStorage using Redux-Persist.
