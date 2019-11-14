import React from "react";

import API from "../../../utils/API";

class TrendsMap extends React.Component {
  componentDidMount() {
    API.getAllPrimaryDiagnosisInCityInPast4Weeks(this.props.match.param.city)
    .then(res => this.setState({ records: res.data }))
    .catch(err => console.log(err));
  }

  // componentDidMount() {
  //   API.getBook(this.props.match.params.id)
  //     .then(res => this.setState({ book: res.data }))
  //     .catch(err => console.log(err));
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