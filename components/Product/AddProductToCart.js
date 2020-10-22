import {Icon, Input, Placeholder} from 'semantic-ui-react'

function AddProductToCart() {
  return <Input 
    type="number"
    min= "1"
    Placeholder="Quantity"
    action={{ 
      color: 'orange',
      content: 'Add to cart',
      icon: "plus cart"
    }}
    />
}

export default AddProductToCart;
