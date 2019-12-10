import React from "react";

function Path(props) {

    return (
        <div className="row">
            <div className="col s12 center">
                <h5>Path of high probablity diagnosis</h5>
                {props.pathDataPointsDetails.map(record =>
                    <p className="breadcrumb waves-effect waves-light btn deep-purple lighten-1 hoverable">{record.disease}</p>
                )}



            </div>
        </div>
    );
}

export default Path;
