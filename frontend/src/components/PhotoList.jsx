import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
	const photoData = props.photoData;
	return (
		<ul className='photo-list'>
			{photoData.map((singlePhoto) => (
				<PhotoListItem {...singlePhoto} key={singlePhoto.id} />
			))}
		</ul>
	);
};

export default PhotoList;
