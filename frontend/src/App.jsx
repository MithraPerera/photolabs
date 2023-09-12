import React from "react";
import PhotoList from "./components/PhotoList";
import TopicList from "components/TopicList";
import "./App.scss";
import TopNavigationBar from "components/TopNavigationBar";
import HomeRoute from "routes/HomeRoute";

// Note: Rendering a single component to build components in isolation
const App = () => {
	// const photos = [
	// 	{
	// 		id: "1",
	// 		location: {
	// 			city: "Montreal",
	// 			country: "Canada",
	// 		},
	// 		imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
	// 		username: "Joe Example",
	// 		profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
	// 	},
	// 	{
	// 		id: "2",
	// 		location: {
	// 			city: "Montreal",
	// 			country: "Canada",
	// 		},
	// 		imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
	// 		username: "Joe Example",
	// 		profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
	// 	},
	// 	{
	// 		id: "3",
	// 		location: {
	// 			city: "Montreal",
	// 			country: "Canada",
	// 		},
	// 		imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
	// 		username: "Joe Example",
	// 		profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
	// 	},
	// ];

	// const photoListItems = photos.map((singlePhoto) => (
	// 	<PhotoListItem {...singlePhoto} key={singlePhoto.id} />
	// ));

	return (
		<div className='App'>
			<HomeRoute />
		</div>
	);
};

export default App;
