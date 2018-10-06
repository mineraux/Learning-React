import React from "react"

const userOutput = (props) => {
  const style = {
    color: "#3c3c3c"
  }
  return(
    <div className="UserOutput">
      <p>Some content</p>
      <p style={style}>Hello i'm {props.username}</p>
    </div>
  )
}

export default userOutput