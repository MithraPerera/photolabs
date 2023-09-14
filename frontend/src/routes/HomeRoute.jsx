import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = ({
	photos,
	topics,
	setDisplayModal,
	setSelectedPhotoId,
	favourites,
	setFavourites,
}) => {
	// const [favourites, setFavourites] = useState([]);

	const isFavPhotoExist = favourites.length > 0 ? true : false;

	return (
		<div className='home-route'>
			<TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist} />
			<PhotoList
				photoList={photos}
				favourites={favourites}
				setFavourites={setFavourites}
				setDisplayModal={setDisplayModal}
				setSelectedPhotoId={setSelectedPhotoId}
			/>
		</div>
	);
};

export default HomeRoute;
