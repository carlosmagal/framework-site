import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Header from './components/Header/index'
import Router from './router'

import './App.css'
function App() {

	const theme = createMuiTheme({
        palette: {primary: {main: '#FFFFFF'}, secondary:{main:'#FFFFFF'}}
    })

	return (
		<BrowserRouter>
        	<ThemeProvider theme={theme}>
				<Header/>
				<Router />
			</ThemeProvider>    
        </BrowserRouter>
	)
}

export default App;
