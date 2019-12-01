import React, { Component } from "react";
import { Select, Button } from 'react-materialize';

class BodyLocation extends Component {
   render() {
      return (
         <form onSubmit={this.props.submitHandler}>
            <div className="container">
               <div className="row">
                  <div className="col s12">
                     <h1 className="center"> {this.props.bodyLocationType}</h1>
                  </div>
               </div>

               <div className="row">
                  {/* Body Location */}
                  <div className="col s12">
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
               </div>

               <div className="row">
                  <div className="col s12">
                     <Button type="submit"
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