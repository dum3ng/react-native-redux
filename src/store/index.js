import {createStore,applyMiddleware} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import createLogger from 'redux-logger'
import reducers from '../reducer'
import {AsyncStorage} from 'react-native'


let configureStore = (initialState)=>{
	// let createMyStore = applyMiddleware(createLogger())(createStore)
	// createMyStore = autoRehydrate()(createMyStore)

	// let store = createMyStore(reducers,initialState)
	// persistStore(store,{storage:AsyncStorage})

	// return store
	return  createStore(reducers,initialState)
}

export default configureStore

