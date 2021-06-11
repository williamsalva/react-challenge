/* eslint-disable no-unused-vars */

import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Card, Typography } from 'antd';
import React from 'react'
import { useDispatch } from 'react-redux';
import {addProductToCart} from '../redux/Cart/actions'



const Product = props => {
  const dispatch = useDispatch();

  const { Text } = Typography;

  const { item } = props;
  const { Meta } = Card;


  const addProduct = (item)=>(dispatch(addProductToCart(item)))
  
  return (
  
    <Card>
      <img 
        alt="example"
        src={item.img}
        style={{width:'100%'}}
      />

      <Meta
        style={{marginTop: 20}}
        title={item.name}
        description={`$${item.price}`}
      />
      <Button 
        type="primary"
        shape="round" 
        style={{marginTop:20,textAlign: 'center'}} 
        onClick={() => addProduct(item)}
        icon={
          <ShoppingCartOutlined 
            style={{color:'#ffffff', fontSize:24, textAlign: 'center' }} 
          />} 
      >
        <Text style={{color:'#ffffff', fontSize:18,textAlign: 'center'}}>Agregar al Carrito</Text>
      </Button>
    </Card>
  );
};

export default Product