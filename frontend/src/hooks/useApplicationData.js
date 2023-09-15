import { useState } from "react";
import photoData from 'mocks/photos';
import topicData from 'mocks/topics';

const useApplicationData = () => {

  const [state, setState] = useState({
    favourites: [],
    displayModal: false,
    clickedPhotoId: 0,
    photos: photoData,
    topics: topicData
  });

  const getClickedPhotoInfo = () => {
    return state.photos.find((photo) => photo.id === state.clickedPhotoId);
  };

  // Return True or False if the PhotoList Photo is part of the favourited list of photos
  const isFavourited = (id) => {
    return state.favourites.includes(id);
  };

  // OnClick handler function - pass the id of the photo that is selected to the PhotoDetailsModal and open the model
  const openModal = (id) => {
    setState({ ...state, displayModal: true, clickedPhotoId: id });
  };

  // OnClick handler function - close the modal
  const closeModal = () => {
    setState({ ...state, displayModal: false, clickedPhotoId: 0 });
  };

  // OnClick Handler function - add the photo id to the favourited list if it is not already included in it. If it is already included, it is removed from the favourited list.
  const toggleFavourite = (id) => {
    const FavArray = state.favourites.includes(id)
      ? state.favourites.filter((item) => item !== id)
      : [...state.favourites, id];

    setState({ ...state, favourites: FavArray });
  };

  return {
    state,
    getClickedPhotoInfo,
    isFavourited,
    openModal,
    closeModal,
    toggleFavourite
  };

};

export default useApplicationData;