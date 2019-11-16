import React from "react";

//import API from "../../../utils/API";

// trends page - map component

class TrendsMap extends React.Component {

  // not sure if componentDidMount is necessary
  
  // componentDidMount() {
  //   API.getAllPrimaryDiagnosisInCityInPast4Weeks(this.props.city)
  //   .then(res => this.setState({ records: res.data }))
  //   .catch(err => console.log(err));
  // }

  render() {
    return (
      <div className="row">
        <div className="col s6 offset-s2">
          <p>GoogleMaps Trends page</p>
        </div>
      </div>
    );
  }
}

export default TrendsMap;