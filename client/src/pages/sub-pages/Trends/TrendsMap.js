import React, { Component } from 'react'
import Helper from "../../../utils/Helper";

// add this to gitignore: ".env"
// create a file in the same folder called .env and write
// GOOGLEAPIKEY = "AIzaSyBL7Zb4UOIfJTANNFWQowVLSd9NG40agcQ";
// create another js file called key and write module.exports={password: process.env.GOOGLEAPIKEY }
// back here put this on top ' var key = require("./key.js"); '
// untoggle next line instead for googleApiKey
//var googleApiKey = key.api



// make an array with lat, long and sick for 3 obj

class TrendsMap extends Component {
  googleMapRef = React.createRef()

  googleApiKey = "AIzaSyBL7Zb4UOIfJTANNFWQowVLSd9NG40agcQ";


  state = {
    points: [
      {
        lat: 43.696526,
        long: -79.286201,
        disease: "INFLUENZA"
      },
      {
        lat: 43.725113,
        long: -79.285385,
        disease: "SYPHILIS"
      },
      {
        lat: 43.680157,
        long: -79.337433,
        disease: "HEPATITIS"
      },
      {
        lat: 43.580137,
        long: -79.637453,
        disease: "HEPATITISB"
      }
    ]
  }

  contentString = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the ' +
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
    'south west of the nearest large town, Alice Springs; 450&#160;km ' +
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
    'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
    'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
    'Aboriginal people of the area. It has many springs, waterholes, ' +
    'rock caves and ancient paintings. Uluru is listed as a World ' +
    'Heritage Site.</p>' +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
    '(last visited June 22, 2009).</p>' +
    '</div>' +
    '</div>';



  componentDidMount() {
    this.loadGoogleMapContent();
  }


  loadGoogleMapContent() {
    const googleScript = document.createElement('script')
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${this.googleApiKey}&libraries=places`;
    window.document.body.appendChild(googleScript);

    googleScript.addEventListener('load', () => {
      this.googleMap = this.createGoogleMap()
      this.marker = this.createMarker()
    })
  }


  createGoogleMap = () =>
    new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 9,
      center: {
        lat: 43.6706,
        lng: -79.3865,
      },
      disableDefaultUI: true,
    })

  // creates the various markers
  createMarker = () => {
    this.state.points.map(points =>
      new window.google.maps.Marker({
        position: { lat: points.lat, lng: points.long },
        map: this.googleMap,
        label: points.disease
      }),
      new window.google.maps.InfoWindow({
        content: this.contentString
      })
    );
  }

  // if you click on a button on the map, it should give you a pop up window with content
  createInfoWindow = () => {
    this.state.points.map(points =>
      new window.google.maps.InfoWindow({
        content: this.contentString
      })
    )
  }

  handleRefresh = () => {


    let tempState = new Helper().cloneObject(this.state);
    tempState.points = this.props.points;
    this.setState(tempState);


    this.loadGoogleMapContent();
  }

  render() {

    let width = (window.innerWidth - 500) + "px";
  
    return (
      <div className="container">
        <div className="row">
          <div className="input-field col s12">
            <div
              id="google-map"
              ref={this.googleMapRef}
              style={{ width: width, height: "400px" }}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 center">
            <button
              className="waves-effect waves-light btn deep-purple lighten-1 hoverable"
              waves="light"
              style={{ margin: '5px' }}
              key="refreshMapData"
              value="refreshMapData"
              onClick={this.handleRefresh}
            >
              Refresh Map
            </button>
          </div>

        </div>
      </div>
    )
  }
}




// ********************************************************************************** //




export default TrendsMap;