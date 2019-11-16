import React, { Component } from "react";
import { Select, Button } from 'react-materialize';

class BodyLocation extends Component {
   render() {
      return (
         <form onSubmit={this.props.submitHandler}>
            <div className="container">
               <div className="row">
                  <div className="col s12">
                     <h3 className="center"> {this.props.bodyLocationType}</h3>
                     <p className="center">Selecting the following locations will allow us to narrow down the location of the symptoms. 
                     </p>
                     <p className="center">
                     <i className="fas fa-caret-down arrowDown"></i>Select a {this.props.bodyLocationType} Below<i className="fas fa-caret-down arrowDown"></i>
                     </p>
                  </div> 
               </div>

               <div className="row">
                  {/* Body Location */}
                  <div className="col s8">
                     <Select
                        s = {12}
                        value={this.props.genLocation}
                        name="selLocation"
                        label= {this.props.bodyLocationType}
                        onChange={this.props.handleInputChange}
                        validate = {true}
                     >
                        <option value="" selected disabled>
                           Choose your option
                        </option>
                        {this.props.locations.map(location => (
                           <option key={location.ID} value={location.ID}>{location.Name}</option>
                        ))}
                     </Select>
                     
                  </div>
                  <div className="col s4">
                     <img class="materialboxed responsive-img" id="bodyVector" width="650"
                     src={this.props.imageRoute}></img>
                  </div>
               </div>

               <div className="row">
                  <div className="col s12 center">
                     <Button 
                        className= "deep-purple lighten-1 hoverable"
                        type="submit"
                        waves="light"
                        style={{ marginRight: '5px' }}>
                        Submit
                     </Button>
                  </div>
               </div>

            </div>
         </form>
      )
   }
}


export default BodyLocation;