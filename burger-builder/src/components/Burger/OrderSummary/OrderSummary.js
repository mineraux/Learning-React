import React, {Component} from 'react'
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

  componentWillUpdate() {
    console.log('[OrderSummary] componentWillUpdate')
  }

  render() {

  /**
  * Object.keys to transform and object into an array
  */
  const ingredientsSummary = 
  Object.keys(this.props.ingredients)
  .map(igKey => {
    return ( 
      <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>
          {igKey}: {this.props.ingredients[igKey]}
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
      <p><strong>Total Price : {this.props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout ?</p>
      <Button btnType='Danger' clicked={this.props.purchaseCancelled}>Cancel</Button>
      <Button btnType='Success' clicked={this.props.purchaseContinued}>Continue</Button>
    </Aux>
    )
  }
}

export default OrderSummary