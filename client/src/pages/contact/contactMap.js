import React from 'react';
import {GoogleMap,
		Marker,
		useLoadScript
} from '@react-google-maps/api';
import mapStyle from './mapStyle.js';
import markerIcon from '../../assets/markerIcon.svg';


		const libraries = ['places'];
		const mapContainerStyle = {
				height: '100%',
				width:'100%'
		};
		const center = {
				lat:51.686130,
				lng:1.906690
		};
		const options = {
				styles : mapStyle,
				disableDefaultUI: true,
		}
		const markerPos = {
				lat:51.686130,
				lng:-3.906690
		}


const ContactMap = () => {

		const {isLoaded, loadError} = useLoadScript({
				googleMapsApiKey: process.env.REACT_APP_MAPS_KEY,
				libraries,		
		});

		if (loadError) return 'Error loading maps';
		if (!isLoaded) return 'Loading maps';

return (
		<GoogleMap 
		mapContainerStyle={mapContainerStyle}
		zoom={5}
		center={center}
		options={options}
		>
		<Marker position={markerPos} icon={{
				url:markerIcon,
				scaledSize: new window.google.maps.Size(100,100)}}
			/>
		</GoogleMap>
);
}
 
export default ContactMap;
