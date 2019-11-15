
import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
let data = []
let i=0;

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key='GOOGLE_MAPS_API_KEY'&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    data: [

      {
          "latitude": "43.925113",
          "longitude": "-79.685385",
          "city": "TORONTO",
          "name": "cancer2"
      },
      {
          "latitude": "43.696526",
          "longitude": "-79.286201",
          "city": "TORONTO",
          "name": "cold"
      },
      {
          "latitude": "43.696526",
          "longitude": "-79.286201",
          "city": "TORONTO",
          "name": "cold"
      },
      {
          "latitude": "43.616526",
          "longitude": "-79.686201",
          "city": "TORONTO",
          "name": "cold"
      }
  ]
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 43.7184034, lng: -79.5184845 }}>

{<Marker position={{ lat: parseFloat(props.data[i].latitude), lng: parseFloat(props.data[i].longitude) }} />
}
  </GoogleMap>
));

ReactDOM.render(<MyMapComponent isMarkerShown />, document.getElementById("root"));
