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
	toggleFavourite,
	openModal,
	isFavourited,
}) => {
	return (
		<div className='photo-list__item'>
			<PhotoFavButton
				selected={isFavourited(id)}
				onClick={() => toggleFavourite(id)}
			/>
			<div onClick={() => openModal(id)}>
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
