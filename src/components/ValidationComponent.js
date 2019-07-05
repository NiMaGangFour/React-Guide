import React from "react";

const ValidationCoponent = props => {
  return (
    <div>
      <div>
        {props.length < 5 ? <h4>Validation: "Text Too short"</h4> : null}
      </div>
      <div>
        {props.length > 10 ? <h4>Validation: "Text long Enough"</h4> : null}
      </div>
    </div>
  );
};

export default ValidationCoponent;
