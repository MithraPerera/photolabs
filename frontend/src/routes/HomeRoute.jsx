import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
	return (
		<div className='home-route'>
			<TopNavigationBar topicData={props.topicData} />
			<PhotoList photoData={props.photoData} />
		</div>
	);
};

export default HomeRoute;
