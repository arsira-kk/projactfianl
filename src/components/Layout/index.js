import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme , Carousel , Row, Col, Card } from 'antd';
import Image1 from "./1.jpg"
import Image2 from "./2.jpg"
import Image3 from "./3.jpg"
import ProductDetailCard from './ProductCard';

const { Header, Content, Sider } = Layout;
const { Meta } = Card;

const items1 = ['ประวัติการสั่งซื้อ', 'ร้านขายสุขภัณฑ์', 'ดูสินค้าทั้งหมด', 'หน้าแรก', 'ตะกร้าสินค้า'].map((label, index) => ({
  key: String(index + 1),
  label,
}));

const items2 = [
  { key: 'sub1', icon: <UserOutlined />, label: 'subnav 1', children: new Array(4).fill(null).map((_, j) => ({ key: j + 1, label: `option${j + 1}` })) },
  { key: 'sub2', icon: <LaptopOutlined />, label: 'subnav 2', children: new Array(4).fill(null).map((_, j) => ({ key: j + 5, label: `option${j + 5}` })) },
  { key: 'sub3', icon: <NotificationOutlined />, label: 'subnav 3', children: new Array(4).fill(null).map((_, j) => ({ key: j + 9, label: `option${j + 9}` })) },
];

const FullLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const productData = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', image: 'product1.jpg' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', image: 'product2.jpg' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', image: 'product3.jpg' },
    { id: 4, name: 'Product 4', description: 'Description of Product 4', image: 'product4.jpg' }
  ];

  const Recommendedproducts = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', image: 'product1.jpg' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', image: 'product2.jpg' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', image: 'product3.jpg' },
    { id: 4, name: 'Product 4', description: 'Description of Product 4', image: 'product4.jpg' }
  ];
  const ProductDetail = [
    { id: 1, name: 'ห้องน้ำ 1', price: '100', image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' },
    { id: 2, name: 'ห้องนอน 2', description: '200', image: 'product2.jpg' },
    { id: 3, name: 'ห้องครัว 3', description: 'Description of Product 3', image: 'product3.jpg' },
    { id: 4, name: 'ห้องกินข้าว 4', description: 'Description of Product 4', image: 'product4.jpg' },
    { id: 5, name: 'ห้องน้ำ 1', price: '100', image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' },
    { id: 6, name: 'ห้องนอน 2', description: '200', image: 'product2.jpg' },
    { id: 7, name: 'ห้องครัว 3', description: 'Description of Product 3', image: 'product3.jpg' },
    { id: 8, name: 'ห้องกินข้าว 4', description: 'Description of Product 4', image: 'product4.jpg' }
  ];
  return (
    <Layout>
      <Header style={{ background: '#D2B48C', padding: 0 }}>
        <div className="logo" style={{ width: 120, height: 31, background: 'rgba(255, 255, 255, 0.2)', margin: '16px 28px 16px 0', float: 'left' }} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
          items={items1}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
  style={{
    padding: 24,
    margin: 0,
    minHeight: 280,
    background: colorBgContainer,
    borderRadius: borderRadiusLG,
  }}
>
  <Carousel autoplay>
    <div>
      <img src={Image1} alt="Image 1" style={{ width: '100%' , height: "300px" }} />
    </div>
    <div>
      <img src={Image2} alt="Image 2" style={{ width: '100%' , height: "300px" }} />
    </div>
    <div>
      <img src={Image3} alt="Image 3" style={{ width: '100%' , height: "300px" }} />
    </div>
  </Carousel>


  
  <div>
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>New Product</h2>
      <Row gutter={[16, 16]}>
        {productData.map(product => (
          <Col key={product.id} span={6}>
            <Card
              hoverable
              cover={<img alt={product.name} src={product.image} />}
            >
              <Meta title={product.name} description={product.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>

    <div>
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Recommendedproducts</h2>
      <Row gutter={[16, 16]}>
        {Recommendedproducts.map(product => (
          <Col key={product.id} span={6}>
            <Card
              hoverable
              cover={<img alt={product.name} src={product.image} />}
            >
              <Meta title={product.name} description={product.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    <hr />

    <h2 style={{ textAlign: 'Left', margin: '20px 0' }}>สินค้าทั้งหมด</h2>
    <Row gutter={[16, 16]}>
    {ProductDetail.map(product => (
            <Col key={product.id} span={6}>
    <ProductDetailCard  Data={product} />
    </Col>
    ))}
       </Row>
</Content>


        </Layout>
      </Layout>
    </Layout>
  );
};

export default FullLayout;
