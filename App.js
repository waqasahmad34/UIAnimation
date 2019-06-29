import React, { Component } from 'react';
import Container from './src/screens/Container/Container';
export default class App extends Component {
	render() {
		console.disableYellowBox = true;
		return <Container />;
	}
}
