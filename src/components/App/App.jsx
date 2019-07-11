import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Container from '../Container/Container';

class App extends Component {
	constructor() {
		super();
		this.state = {
			ideas: []
		};
	}

	componentDidMount() {
		fetch('').then(response => response.json()).then(ideas =>
			this.setState({
				ideas
			})
		);
	}

	addIdea = newIdea => {
		this.setState({
			ideas: [ ...this.state.ideas, newIdea ]
		});
	};

	deleteIdea = id => {
		const filteredIdeas = ideas.filter(idea => idea.id != id);
		this.setState({
			ideas: filteredIdeas
		});
	};

	render() {
		return (
			<div className="App">
				<h1 className="app-title">Turing Cafe Reservations</h1>
				<div className="resy-form">
					<Form addIdea={this.addIdea} />
				</div>
				<div className="resy-container">
					<Container deleteIdea={this.deleteIdea} ideas={this.state.ideas} />
				</div>
			</div>
		);
	}
}

export default App;
