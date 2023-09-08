import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
	const [like, setLike] = useState(false);

	const handleLike = () => {
		like ? setLike(false) : setLike(true);
	};

	return (
		<div className='photo-list__fav-icon'>
			<div className='photo-list__fav-icon-svg' onClick={() => handleLike()}>
				<FavIcon selected={like} />
			</div>
		</div>
	);
}

export default PhotoFavButton;
