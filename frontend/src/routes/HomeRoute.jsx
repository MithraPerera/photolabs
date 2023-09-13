import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = ({ photos, topics }) => {
	const [favourites, setFavourites] = useState([]);

	const isFavPhotoExist = favourites.length > 0 ? true : false;

	return (
		<div className='home-route'>
			<TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist} />
			<PhotoList
				photoList={photos}
				favourites={favourites}
				setFavourites={setFavourites}
			/>
		</div>
	);
};

export default HomeRoute;
