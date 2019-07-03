import React from "react";

const UserInput = props => {
  return (
    <div>
      wdfd
      <input onChange={props.inputHandler} value={props.username} />
    </div>
  );
};

export default UserInput;
