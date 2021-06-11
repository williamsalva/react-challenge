import { Button, Col, Drawer,Row,Typography } from 'antd'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {removeProductFromCart} from '../redux/Cart/actions'

const Cart = ({onClose,visible}) => {
  const { Text } = Typography;
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart)

  const countItemsSum = (cart) =>cart.reduce((acc, cur) => parseFloat(acc + (cur.quantity || 1)), 0)
    .toFixed(0)

  const countItems = useMemo(() => countItemsSum(cartProducts), [cartProducts]);

  const calculateTotal = (total, currentItem) =>
    parseFloat(total + currentItem.price * (currentItem.quantity || 1));

  


  const removeProduct =(index)=>(dispatch(removeProductFromCart(index)))


  const renderProduct = (product, index) => (
   
    <div key={index} style={{marginBottom:30}}>
      <Row gutter={[32, 16]}>
        <Col span={8}> 
          <img 
            alt="example"
            src={product.img}
            style={{width: '100%'}}
          />
        </Col>
        <Col span={16} style={{display: 'flex',flexDirection:'column'}}>
          <Text>{`Nombre:  ${product.name}`}</Text>
          <Text>{`precio:  $${product.price}`}</Text>
          <Text>{product.quantity ? `Cantidad:  ${product.quantity}`: 'Cantidad:1'}</Text>
          <Button style={{marginTop: 20}} type="primary" danger  onClick={() => removeProduct(index)}>
            Eliminar
          </Button>
          
        </Col>
            
      </Row>

     
      
    </div>
  );

  return(
    <Drawer
      title={`Total de artículos - ${countItems}`}
      width={400}
      placement="right"
      closable
      onClose={onClose}
      visible={visible}
    >
      <div className="cart">
        {cartProducts.length
          ? cartProducts.map(renderProduct)
          : 'No hay ningun producto en su carrito.'}
      </div>

      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: '28px', marginRight:10}}>Total: </Text>
        <Text style={{fontSize: '32px'}} >${cartProducts.reduce(calculateTotal, 0).toFixed(2)}</Text>
      </div>
    </Drawer>
  )
}
  


export default Cart