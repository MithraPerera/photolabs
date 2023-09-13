import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({
	displayModal,
	setDisplayModal,
	setSelectedPhotoId,
	getClickedPhotoInfo,
}) => {
	// OnClick handler function - close the modal
	const closeModal = () => {
		setDisplayModal(false); // close the modal
		setSelectedPhotoId(0); // reset the selected photoid to 0 which is null
	};

	console.log(getClickedPhotoInfo); // Log the data that the modal recieves

	return (
		<div>
			{displayModal ? (
				<div className='photo-details-modal'>
					<button className='photo-details-modal__close-button'>
						<img src={closeSymbol} alt='close symbol' onClick={closeModal} />
					</button>
				</div>
			) : null}
		</div>
	);
};

export default PhotoDetailsModal;
