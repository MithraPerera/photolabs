import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({
	photoList,
	favourites,
	setFavourites,
	setDisplayModal,
	setSelectedPhotoId,
}) => {
	// Function to be passed to PhotoListItem to display the modal by passing in the selected photo id
	const displayModal = (id) => {
		setSelectedPhotoId(id); // set the state to the selected photo id
		setDisplayModal(true); // set the state of the modal to true to display it
	};

	return (
		<ul className='photo-list'>
			{photoList.map((photo) => (
				<PhotoListItem
					key={photo.id}
					id={photo.id}
					imageSource={photo.urls.regular}
					profile={photo.user.profile}
					username={photo.user.name}
					city={photo.location.city}
					country={photo.location.country}
					favourites={favourites}
					setFavourites={setFavourites}
					displayModal={displayModal}
				/>
			))}
		</ul>
	);
};

export default PhotoList;
