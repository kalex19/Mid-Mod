import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Container from '../Container/Container';

export class App extends Component {
	constructor() {
		super();
		this.state = {
			reservations: []
		};
	}

	componentDidMount() {
		fetch('http://localhost:3001/api/v1/reservations').then(response => response.json()).then(reservations =>
			this.setState({
				reservations
			})
		);
	}

	deleteReservation = id => {
		fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
			method: 'DELETE'
		}).then(() =>
			this.setState({
				reservations: this.state.reservations.filter(res => res.id !== id)
			})
		);
	};

	addReservation = newReservation => {
		fetch('http://localhost:3001/api/v1/reservations', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newReservation)
		})
			.then(response => response.json())
			.then(reservation => this.setState({ reservations: [ ...this.state.reservations, reservation ] }))
			.catch(error => console.log(error));
	};

	render() {
		return (
			<div className="App">
				<h1 className="app-title">Turing Cafe Reservations</h1>
				<div className="resy-form">
					<Form addReservation={this.addReservation} postReservation={this.postReservation} />
				</div>
				<div className="resy-container">
					<Container deleteReservation={this.deleteReservation} reservations={this.state.reservations} />
				</div>
			</div>
		);
	}
}

export default App;
