
import  React from 'react'
import {Component} from 'react'
import {
	View,
	Text,
	StyleSheet
} from 'react-native'
import {Provider} from 'react-redux'
import configureStore from './store'

let store = configureStore()

class App extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    
    render(){
     return (
        <Provider store = {store}>

        </Provider>
        )   
    }
}
var styles = StyleSheet.create(
{
    
})
export default App