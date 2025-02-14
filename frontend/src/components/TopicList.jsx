import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, fetchPhotosByTopic }) => {
	return (
		<div className='top-nav-bar__topic-list'>
			{topics.map((topic) => (
				<TopicListItem
					key={topic.id}
					label={topic.title}
					fetchPhotosByTopic={fetchPhotosByTopic}
					clickedId={topic.id}
				/>
			))}
		</div>
	);
};

export default TopicList;
