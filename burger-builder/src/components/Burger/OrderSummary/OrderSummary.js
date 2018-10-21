import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  /**
   * Object.keys to transform and object into an array
   */
  const ingredientsSummary = 
    Object.keys(props.ingredients)
    .map(igKey => {
      return ( 
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>
            {igKey}: {props.ingredients[igKey]}
          </span>
        </li>
      )
    })
  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients : </p>
      <ul>
        { ingredientsSummary }
      </ul>
      <p>Continue to checkout ?</p>
      <Button btnType='Danger' clicked={props.purchaseCancelled}>Cancel</Button>
      <Button btnType='Success' clicked={props.purchaseContinued}>Continue</Button>
    </Aux>
  )
}

export default orderSummary