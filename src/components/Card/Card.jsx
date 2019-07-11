import React from 'react';
import './Card.css';

export default function Card({ name, id, date, time, number, deleteIdea }){
	return (
		<div>
			<h1>`${name}'/s Reservation</h1>
			<p>{date}</p>
			<p>{time}</p>
			<p>{number}</p>
			<button onClick={() => deleteIdea(id)}>Cancel Reservation</button>
		</div>
	);
}
