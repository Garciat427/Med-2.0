import React, { Component } from "react";
import { Button } from 'react-materialize';

class SymptomsForm extends Component {
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col s12">
                  <h3 className="center">Symptoms</h3>
                  <p className="center">
                     We proposed a list of symptoms that you may be experiencing based on the information you provided.
                  </p>
                  <p className="center">
                     Please select the (Minimum 2) symptoms you are experiencing
                  </p>
               </div>
            </div>

            <div className="row">
               <div className="col s12">
                  <div> {/* Button box */}
                     {this.props.symptoms.map(symptom => (
                        <button
                           className="waves-effect waves-light btn deep-purple lighten-1 hoverable"
                           onClick={this.props.handleSymptomsSelect}
                           waves="light"
                           style={{ margin: '5px' }}
                           key={symptom.ID}
                           value={symptom.ID}>
                           {symptom.Name}
                        </button>
                     ))}
                  </div>
               </div>
            </div>

            <div className="row">
               <div className="col s12 center">
                  <Button
                     className="deep-purple lighten-1 hoverable"
                     disabled={!(this.props.minPassed)}
                     onClick={this.props.handleSymptomsSelect}
                     value="GetDiag"
                     waves="light"
                     style={{ margin: '5px' }}
                  > Get Diagnosis
                  </Button>
               </div>
            </div>
         </div>
      )
   }
}


export default SymptomsForm;