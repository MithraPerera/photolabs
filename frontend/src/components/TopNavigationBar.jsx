import React from "react";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ topics, isFavPhotoExist, fetchPhotosByTopic }) => {
	return (
		<div className='top-nav-bar'>
			<span className='top-nav-bar__logo'>PhotoLabs</span>
			<div className='top-nav-bar'>
				<TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic} />
			</div>
			<FavBadge isFavPhotoExist={isFavPhotoExist} />
		</div>
	);
};

export default TopNavigation;
