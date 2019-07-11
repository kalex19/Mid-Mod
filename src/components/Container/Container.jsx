import React from 'react';
import Card from '../Card/Card';

const Container = ({ reservations, deleteReservation }) => {
	const cards = reservations.map(res => {
		return (
			<Card
				deleteReservation={deleteReservation}
				name={res.name}
				id={res.id}
				date={res.date}
				time={res.time}
				number={res.number}
				key={res.id}
			/>
		);
	});
	return <div>{cards}</div>;
};

export default Container;
