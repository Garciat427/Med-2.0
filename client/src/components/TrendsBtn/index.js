import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function TrendsBtn() {
  return (
    <div className="col s6 offset-s2">
    <a className="waves-effect waves-light btn-large" href={"/trends"}>TrendS</a>
    </div>
  );
}

export default TrendsBtn;