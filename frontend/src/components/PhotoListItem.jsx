import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
	const imageSource = props.imageSource;
	const profilePic = props.profile;
	const username = props.username;
	const city = props.location.city;
	const country = props.location.country;
	/* Insert React */
	return (
		<div className='.photo-list__item'>
			<img src={imageSource} />
			<img src={profilePic} />
			<p>{username}</p>
			<p>
				{city}, {country}
			</p>
		</div>
	);
};

export default PhotoListItem;
