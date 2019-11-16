import React, { Component } from "react";
import { Button, Card } from 'react-materialize';

class DiagnoseSymptoms extends Component {
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col s12">
                  <h1>Symptoms Page</h1>
               </div>
            </div>

            <div className="row">
               <div className="col s12">
                  <div> {/* Diagnosis Box */}
                     {this.props.diagnosis.map(diagnosis => (
                        <div className="row">
                           <div className="col s12">
                              <Card
                                 key = {diagnosis.Issue.ID}
                                 className="blue-grey darken-1"
                                 textClassName="white-text"
                                 title={diagnosis.Issue.Name}
                                 actions={[<a />, <a />]}>
                                 <p>Professional Name: {diagnosis.Issue.ProfName}</p>
                                 <p>Accuracy: {diagnosis.Issue.Accuracy}</p>
                                 <p>Medical Term: {diagnosis.Issue.IcdName}</p>
                              </Card>
                              <h1>{diagnosis.Issue.name}</h1>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="row">
               <div className="col s12">
                  <Button
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


export default DiagnoseSymptoms;