import React from "react";

import "../styles/PhotoDetailsModal.scss";
import "../styles/PhotoListItem.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({
	displayModal,
	favourites,
	openModal,
	getClickedPhotoInfo,
	toggleFavourite,
	closeModal,
	isFavourited,
}) => {
	const getClickedPhoto = { ...getClickedPhotoInfo() };

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
						<img
							src={closeSymbol}
							alt='close symbol'
							onClick={() => closeModal()}
						/>
					</button>
					<div className='photo-details-modal__images'>
						<div className='photo-details-modal__image-container'>
							<div>
								<PhotoFavButton
									selected={isFavourited(getClickedPhoto.id)}
									onClick={() => toggleFavourite(getClickedPhoto.id)}
								/>
							</div>
							<img
								className='photo-details-modal__image'
								src={getClickedPhoto.urls.full}
								alt='photo-image'
							/>
							<div className='photo-list__user-details'>
								<img
									className='photo-list__user-profile'
									src={getClickedPhoto.user.profile}
								/>
								<div className='photo-list__user-info'>
									<span>{getClickedPhoto.user.name}</span>
									<br />
									<span className='photo-list__user-location'>{`${getClickedPhoto.location.city}, ${getClickedPhoto.location.country}`}</span>
								</div>
							</div>
						</div>
						<p className='photo-details-modal__header divider'>
							Related Photos
						</p>
						<PhotoList
							className='photo-details-modal--images'
							photoList={similarPhotosArray}
							favourites={favourites}
							toggleFavourite={toggleFavourite}
							openModal={openModal}
							isFavourited={isFavourited}
						/>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default PhotoDetailsModal;
