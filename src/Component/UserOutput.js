import React from "react";
import "./UserOutput.css";

const UserOutput = props => {
  return (
    <div className="UserOutput">
      <div>
        <h3 onClick={props.click}>UserOutput name is : {props.person}</h3>
        <p>
          Output multiple UserOutput components in the App component (any
          paragraph texts of your choice)
        </p>
      </div>
      <div>
        <p>UserOutput 2 action is {props.action}</p>
        <h3>UserOutput username is : ---{props.username}---</h3>
      </div>
    </div>
  );
};

export default UserOutput;
