import React, { Component } from "react";
import { Button } from 'react-materialize';

class SymptomsForm extends Component {
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
                            <div> {/* Button box */}
                                {this.props.symptoms.map(symptom => (
                                    <button 
                                        className = "waves-effect waves-light btn"
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
                        <div className="col s12">
                            {/* <Button
                                type="submit"
                                waves="light"
                                style={{ margin: '5px' }}
                            > Submit
                            </Button> */}
                        </div>
                    </div>
                </div>
        )
    }
}


export default SymptomsForm;