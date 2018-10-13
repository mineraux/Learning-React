import React from 'react'

const Cockpit = (props) => {

  let classes = []

  if (props.persons.length <= 2) {
    classes.push('red')
  }

  if (props.persons.length <= 1) {
    classes.push('bold')
  }

  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  }

  if (props.showPersons) {
    style.backgroundColor = 'red'
  }
  
  return (
    <div>
      <h1>Im a React App !!</h1> 
      <p className={classes.join(' ')}>This is working !</p>
      <button onClick={props.clicked} style={style}>Switch Name</button>  
    </div>
  )
}

export default Cockpit