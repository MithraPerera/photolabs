import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photoList, toggleFavourite, openModal, isFavourited }) => {
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
					toggleFavourite={toggleFavourite}
					openModal={openModal}
					isFavourited={isFavourited}
				/>
			))}
		</ul>
	);
};

export default PhotoList;
