import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
	const imageSource = props.urls.regular;
	const profilePic = props.user.profile;
	const username = props.user.username;
	const city = props.location.city;
	const country = props.location.country;
	/* Insert React */
	return (
		<div className='photo-list__item'>
			<PhotoFavButton />
			<div>
				<img src={imageSource} className='photo-list__image' />
			</div>
			<div className='photo-list__user-details'>
				<img src={profilePic} className='photo-list__user-profile' />
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
