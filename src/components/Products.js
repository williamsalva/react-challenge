import { Col, Row } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import _ from 'lodash'


     
export const Products = () => {


  const { products } = useSelector(state => _.get(state,'products', []))
  const {categoryActive} = useSelector(state => state.category)


    
    
  
  if(products.length > 0){
    return null
  } 

  return(
    <div style={{width: '100%'}}>
      <Row gutter={[24, 16]}>
        { 
          _.get(products,`[${categoryActive}].products`,[0]).map((item, index) => (
            <Col span={6} key={index}>
              <Product 
                item={item} />
            </Col>
          ))
        }
      </Row>
    </div>
  )
}
 
export default Products