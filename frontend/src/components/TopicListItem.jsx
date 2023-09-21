import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ clickedId, label, fetchPhotosByTopic }) => {
	const topicHandler = (id) => {
		return fetchPhotosByTopic(id); // function with the topic id
	};
	return (
		<div className='topic-list__item' onClick={() => topicHandler(clickedId)}>
			<p>{label}</p>
		</div>
	);
};

export default TopicListItem;
