import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = ({
	photos,
	topics,
	favourites,
	openModal,
	toggleFavourite,
	isFavourited,
	fetchPhotosByTopic,
}) => {
	const isFavPhotoExist = favourites.length > 0 ? true : false;

	return (
		<div className='home-route'>
			<TopNavigationBar
				topics={topics}
				isFavPhotoExist={isFavPhotoExist}
				fetchPhotosByTopic={fetchPhotosByTopic}
			/>
			<PhotoList
				photoList={photos}
				toggleFavourite={toggleFavourite}
				openModal={openModal}
				isFavourited={isFavourited}
			/>
		</div>
	);
};

export default HomeRoute;
