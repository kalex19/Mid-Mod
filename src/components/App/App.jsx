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

	addReservation = newReservation => {
		this.setState({
			reservations: [ ...this.state.reservations, newReservation ]
		});
	};

	deleteReservation = id => {
		const { reservations } = this.state;
		const filteredReservation = reservations.filter(res => res.id !== id);
		this.setState({
			reservations: filteredReservation
		});
	};

	postReservation = ({ newReservation }) => {
		console.log(newReservation);
		fetch('http://localhost:3001/api/v1/reservations', {
			method: 'POST',
			body: JSON.stringify({
				newReservation
			}),
			headers: {
				'content-type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(reservation => this.setState([ ...this.state.reservations, reservation ]))
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
