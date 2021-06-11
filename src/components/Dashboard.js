/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState }  from 'react'
import { Layout, Menu, Button, Row, Col, Spin, Badge } from 'antd';
import {  ShoppingCartOutlined,  HomeOutlined, RestOutlined, ClearOutlined } from '@ant-design/icons';
import logo from '../images/log.png'
import actions from 'redux/Category/actions';
import { useDispatch, useSelector } from 'react-redux';
import {productsFetchData} from '../redux/Products/actions';
import Products from '../components/Products';
import Cart from '../components/Cart';


const { Header, Content, Sider } = Layout;

const Dashboard = () =>{

  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState('1');

  const {isLoading} = useSelector(state => state.products)
  const cartProducts = useSelector(state => state.cart)

  useEffect(() => {
    
    dispatch(productsFetchData())
  
  }, []);

  const showCart = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const countItemsSum = (cart) =>cart.reduce((acc, cur) => parseFloat(acc + (cur.quantity || 1)), 0)
    .toFixed(0)
  const countItems = useMemo(() => countItemsSum(cartProducts), [cartProducts]);

 
    


  const handleClick = e => {
    dispatch({
      type: actions.CATEGORY_ACTIVE,
      payload: parseInt(e.key,10),
    });
    setCurrent( e.key );
  };

  return(
    <>
      <Layout>
        <Header className="header">
          <Row>
            <Col span={20}>
              <img src={logo} alt="" />
            </Col>
            <Col span={4}>
              <Badge count={countItems}>
                <Button 
                  type="link" 
                  onClick={()=>showCart()}
                  style={{ background: '#02adc9'}} 
                  icon={<ShoppingCartOutlined 
                    style={{color:'#ffffff', fontSize:24}} 
                  />}  
                />
              </Badge>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              selectedKeys={[current]}
              onClick={handleClick} 
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1" icon={<HomeOutlined />}>
            Hogar
              </Menu.Item>
              <Menu.Item key="2" icon={<RestOutlined />}>
            Cocina
              </Menu.Item>
              <Menu.Item key="3" icon={<ClearOutlined />}>
           limpieza
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                background: '#ffffff',
                minHeight: '100vh',
              }}
            >
              {
                isLoading ?(<Spin />):(<Products/>)
              }
          
            </Content>
          </Layout>
        </Layout>
      </Layout>
      <Cart
        visible={visible}
        onClose={onClose}
      />
    </>
  )
};
export default Dashboard;
