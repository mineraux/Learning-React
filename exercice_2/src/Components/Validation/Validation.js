import React from "react";

const validation = (props) => {

  let validationMessage = 'Text long enough';

  if (props.inputLenght >= 5) {
    validationMessage = 'Text long enough'
  } else {
    validationMessage = 'Text too short !'
  }

  return (
    <div>
      {validationMessage}
    </div>
  );
}

export default validation