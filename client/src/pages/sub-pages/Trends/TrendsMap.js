import React, { Component, createRef } from 'react'


// add this to gitignore: ".env"
// create a file in the same folder called .env and write
// GOOGLEAPIKEY = "AIzaSyBL7Zb4UOIfJTANNFWQowVLSd9NG40agcQ";
// create another js file called key and write module.exports={password: process.env.GOOGLEAPIKEY }
// back here put this on top ' var key = require("./key.js"); '
// untoggle next line instead for googleApiKey
//var googleApiKey = key.api



// make an array with lat, long and sick for 3 obj

class GoogleMap extends Component {
    googleMapRef = React.createRef()

    googleApiKey = "AIzaSyBL7Zb4UOIfJTANNFWQowVLSd9NG40agcQ";



    points = [
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
    ]

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


    //   state = {
    //     points
    //   };

    componentDidMount() {
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
            zoom: 10,
            center: {
                lat: 43.6706,
                lng: -79.3865,
            },
            disableDefaultUI: true,
        })

    // creates the various markers
    createMarker = () =>
    // {this.state.points.map( points =>
    {
        this.points.map(points =>
            new window.google.maps.Marker({
                position: { lat: points.lat, lng: points.long },
                map: this.googleMap,
                label: points.disease
            }),
            new window.google.maps.InfoWindow({
                content: this.contentString
            })

        )

    }

    // if you click on a button on the map, it should give you a pop up window with content
    createInfoWindow = () => {
        this.points.map(points =>
            new window.google.maps.InfoWindow({
                content: this.contentString
            })

        )

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="input-field col s6">
                        <div
                            id="google-map"
                            ref={this.googleMapRef}
                            style={{ width: '600px', height: '400px' }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default GoogleMap;