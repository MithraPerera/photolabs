import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
	const topicData = props.topicData;
	return (
		<div className='top-nav-bar__topic-list'>
			{topicData.map((singleTopic) => (
				<TopicListItem {...singleTopic} key={singleTopic.id} />
			))}
		</div>
	);
};

export default TopicList;
