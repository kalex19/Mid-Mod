import React from 'react';
import Card from '../Card/Card';

const Container = ({ ideas, deleteIdea }) => {
	const cards = ideas.map(idea => {
		return (
			<Card
				deleteIdea={deleteIdea}
				name={idea.name}
				id={idea.id}
				date={idea.date}
				time={idea.time}
				number={idea.number}
				key={idea.id}
			/>
		);
	});
	return <div>{cards}</div>;
};

export default Container;
