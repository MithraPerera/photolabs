import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
	displayModal,
	setDisplayModal,
	setSelectedPhotoId,
	getClickedPhotoInfo,
	favourites,
	setFavourites,
}) => {
	// OnClick handler function - close the modal
	const closeModal = () => {
		setDisplayModal(false); // close the modal
		setSelectedPhotoId(0); // reset the selected photoid to 0 which is null
	};

	const getClickedPhoto = { ...getClickedPhotoInfo() };

	// Return True or False if the PhotoList Photo is part of the favourited list of photos
	const isFavourited = favourites.includes(getClickedPhoto.id);

	// OnClick Handler function to add the photo id to the favourited list if it is not already included in it. If it is already included, it is removed from the favourited list.
	const toggleSelect = () => {
		const FavArray = isFavourited
			? favourites.filter((item) => item !== getClickedPhoto.id)
			: [...favourites, getClickedPhoto.id];

		setFavourites(FavArray);
	};

	// Get the object of similar photos from the data in the form of a similar_photos object of photo objects
	const similarPhotos = getClickedPhoto?.similar_photos || [];

	// Using an array of keys, used the map method to create an array of photo objects
	const similarPhotosArray = similarPhotos
		? Object.keys(similarPhotos).map((key) => similarPhotos[key])
		: [];

	return (
		<div>
			{displayModal ? (
				<div className='photo-details-modal'>
					<button className='photo-details-modal__close-button'>
						<img src={closeSymbol} alt='close symbol' onClick={closeModal} />
					</button>
					<div className='photo-details-modal__images'>
						<div className='photo-details-modal__image-container'>
							<div>
								<PhotoFavButton
									selected={isFavourited}
									onClick={toggleSelect}
								/>
							</div>
							<img
								className='photo-details-modal__image'
								src={getClickedPhoto.urls.full}
								alt='photo-image'
							/>
						</div>
						<h1 className='photo-details-modal__header'>Similar Photos</h1>
						<PhotoList
							className='photo-details-modal--images'
							photoList={similarPhotosArray}
							favourites={favourites}
							setFavourites={setFavourites}
							setDisplayModal={setDisplayModal}
							setSelectedPhotoId={setSelectedPhotoId}
						/>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default PhotoDetailsModal;
