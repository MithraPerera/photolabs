import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
	id,
	imageSource,
	profile,
	username,
	city,
	country,
	favourites,
	setFavourites,
	displayModal,
}) => {
	// Return True or False if the PhotoList Photo is part of the favourited list of photos
	const isFavourited = favourites.includes(id);

	// OnClick Handler function to add the photo id to the favourited list if it is not already included in it. If it is already included, it is removed from the favourited list.
	const toggleSelect = () => {
		const FavArray = isFavourited
			? favourites.filter((item) => item !== id)
			: [...favourites, id];

		setFavourites(FavArray);
	};

	// OnClick handler function to pass the id of the photo that is selected to the PhotoDetailsModal
	const imageSelect = () => {
		displayModal(id);
	};

	return (
		<div className='photo-list__item'>
			<PhotoFavButton selected={isFavourited} onClick={toggleSelect} />
			<div onClick={imageSelect}>
				<img src={imageSource} className='photo-list__image' />
			</div>
			<div className='photo-list__user-details'>
				<img src={profile} className='photo-list__user-profile' />
				<div className='photo-list__user-info'>
					<span>{username}</span>
					<div className='photo-list__user-location'>
						<span>
							{city}, {country}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PhotoListItem;
