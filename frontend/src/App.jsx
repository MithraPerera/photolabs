import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
	const [displayModal, setDisplayModal] = useState(false);
	const [clickedPhotoId, setSelectedPhotoId] = useState(0);
	const [favourites, setFavourites] = useState([]);

	const getClickedPhotoInfo = () => {
		return photos.find((photo) => photo.id === clickedPhotoId);
	};

	return (
		<div className='App'>
			<HomeRoute
				photos={photos}
				topics={topics}
				setDisplayModal={setDisplayModal}
				setSelectedPhotoId={setSelectedPhotoId}
				favourites={favourites}
				setFavourites={setFavourites}
			/>
			<PhotoDetailsModal
				displayModal={displayModal}
				setDisplayModal={setDisplayModal}
				setSelectedPhotoId={setSelectedPhotoId}
				getClickedPhotoInfo={getClickedPhotoInfo}
				favourites={favourites}
				setFavourites={setFavourites}
			/>
		</div>
	);
};

export default App;
