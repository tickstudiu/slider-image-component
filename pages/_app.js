import React from 'react';
import App, { Container } from 'next/app';

// import css style from bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MyApp extends App {

	render() {
		const { Component, pageProps } = this.props

		return (
			<Container>
				<Component {...pageProps} />
			</Container>
		)
	}
}