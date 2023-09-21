import { useReducer, useEffect } from "react";
// import photoData from 'mocks/photos';
// import topicData from 'mocks/topics';

// Initial State Data
const initialState = {
  favourites: [],
  displayModal: false,
  clickedPhotoId: 0,
  photos: [],
  topics: []
};

/* insert app levels actions below */
export const ACTIONS = {
  SET_FAVORITES: 'SET_FAVORITES',
  SET_DISPLAY_MODAL: 'SET_DISPLAY_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_FAVORITES:
      return { ...state, favourites: action.payload };
    case ACTIONS.SET_DISPLAY_MODAL:
      return { ...state, displayModal: action.payload1, clickedPhotoId: action.payload2 };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.payload };
  }
};

const useApplicationData = () => {

  // const [state, setState] = useState({
  //   favourites: [],
  //   displayModal: false,
  //   clickedPhotoId: 0,
  //   photos: photoData,
  //   topics: topicData
  // });

  const [state, dispatch] = useReducer(reducer, initialState);

  const getClickedPhotoInfo = () => {
    return state.photos.find((photo) => photo.id === state.clickedPhotoId);
  };

  // Return True or False if the PhotoList Photo is part of the favourited list of photos
  const isFavourited = (id) => {
    return state.favourites.includes(id);
  };

  // OnClick handler function - pass the id of the photo that is selected to the PhotoDetailsModal and open the model
  const openModal = (id) => {
    // setState({ ...state, displayModal: true, clickedPhotoId: id });
    dispatch({ type: ACTIONS.SET_DISPLAY_MODAL, payload1: true, payload2: id });
  };

  // OnClick handler function - close the modal
  const closeModal = () => {
    // setState({ ...state, displayModal: false, clickedPhotoId: 0 });
    dispatch({ type: ACTIONS.SET_DISPLAY_MODAL, payload1: false, payload2: 0 });
  };

  // OnClick Handler function - add the photo id to the favourited list if it is not already included in it. If it is already included, it is removed from the favourited list.
  const toggleFavourite = (id) => {
    const FavArray = state.favourites.includes(id)
      ? state.favourites.filter((item) => item !== id)
      : [...state.favourites, id];

    // setState({ ...state, favourites: FavArray });
    dispatch({ type: ACTIONS.SET_FAVORITES, payload: FavArray });
  };

  // Get the photos data from the database
  useEffect(() => {
    fetch('/api/photos')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.error('The error fetching photo data is: ', error);
      });
  }, []); // Empty dependency array to render once after mounting

  // Get the topics data from the database
  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch((error) => {
        console.error('The error fetching topics data is: ', error);
      });
  });

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