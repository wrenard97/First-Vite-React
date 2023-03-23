import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "full",
  height: "400px",
};

const center = {
  lat: 14.3596,
  lng: 121.0523,
  zoom: 14,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBa1affF19NX0BcsPwHi5R5U60ddldNgds">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={20}>
        <MarkerF position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
