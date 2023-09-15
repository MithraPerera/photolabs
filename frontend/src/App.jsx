import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
	const {
		state,
		getClickedPhotoInfo,
		isFavourited,
		openModal,
		closeModal,
		toggleFavourite,
	} = useApplicationData();

	return (
		<div className='App'>
			<HomeRoute
				photos={state.photos}
				topics={state.topics}
				favourites={state.favourites}
				openModal={openModal}
				toggleFavourite={toggleFavourite}
				isFavourited={isFavourited}
			/>
			<PhotoDetailsModal
				displayModal={state.displayModal}
				favourites={state.favourites}
				openModal={openModal}
				getClickedPhotoInfo={getClickedPhotoInfo}
				toggleFavourite={toggleFavourite}
				closeModal={closeModal}
				isFavourited={isFavourited}
			/>
		</div>
	);
};

export default App;
