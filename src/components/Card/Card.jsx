import React from 'react';
import './Card.css';

export default function Card({ name, id, date, time, number, deleteReservation }){
	return (
		<div className="card">
			<h1>{name}'s Reservation</h1>
			<p>Date: {date}</p>
			<p>Time: {time}</p>
			<p>{number}</p>
			<button className="deleteBtn" onClick={() => deleteReservation(id)}>
				Cancel Reservation
			</button>
		</div>
	);
}
