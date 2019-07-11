import React, { Component } from 'react';
import './Form.css';

export class Form extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			date: '',
			time: '',
			number: 0
		};
	}

	submitReservation = e => {
		e.preventDefault();
		const newReservation = {
			...this.state,
			id: Date.now()
		};
		this.props.addReservation(newReservation);
		this.props.postReservation(newReservation);
		this.clearInputs();
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	clearInputs = () => {
		this.setState({
			name: '',
			date: '',
			time: ''
		});
	};

	render() {
		return (
			<div>
				<input
					type="text"
					name="name"
					value={this.state.name}
					placeholder="Your Name"
					className="form-input"
					onChange={this.handleChange}
				/>
				<input
					type="text"
					name="date"
					value={this.state.date}
					placeholder="Enter reservation date as MM/DD"
					className="form-input"
					onChange={this.handleChange}
				/>
				<input
					type="text"
					name="time"
					value={this.state.time}
					placeholder="Enter reservation time as 00:00"
					className="form-input"
					onChange={this.handleChange}
				/>
				<button className="submitBtn" onClick={this.submitReservation}>
					Submit Reservation
				</button>
			</div>
		);
	}
}

export default Form;
