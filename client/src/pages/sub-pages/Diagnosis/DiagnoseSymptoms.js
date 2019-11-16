import React, { Component } from "react";
import { Card } from 'react-materialize';

class DiagnoseSymptoms extends Component {
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col s12">
                  <h3 className="center">Diagnosis</h3>
                  <p className="center">
                     The following is a list of diagnosis possible based on the symptoms provided.
                  </p>
                  <p className="center disclaimer">
                     *** Please note that these diagnosis are based on empirical data and should not be taken as an official diagnosis for serious conditions. Please see you doctor for serious conditions. ***
                  </p>
               </div>
            </div>

            <div className="row">
               <div className="col s12 center">
                  <a
                     className="waves-effect waves-light btn-large buttonLink deep-purple lighten-1 hoverable" href={"/"}
                  > Return to Home
                  </a>
               </div>
            </div>

            <div className="row">
               <div className="col s12">
                  <div> {/* Diagnosis Box */}
                     {this.props.diagnosis.map(diagnosis => (
                        <div className="row">
                           <div className="col s12">
                              <Card
                                 key={diagnosis.Issue.ID}
                                 className="blue-grey darken-1"
                                 textClassName="white-text"
                                 title={diagnosis.Issue.Name}
                                 actions={[<a />, <a />]}>
                                 <p>Professional Name: {diagnosis.Issue.ProfName}</p>
                                 <p>Accuracy: {diagnosis.Issue.Accuracy}</p>
                                 <p>Medical Term: {diagnosis.Issue.IcdName}</p>
                              </Card>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            
         </div>
      )
   }
}


export default DiagnoseSymptoms;