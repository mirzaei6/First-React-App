import React from "react";
const Validation = (props) => {
  let message = "STOP, Long enough";
  if (props.length < 5) {
    message = "It's SHORT";
  }
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};
export default Validation;
