


import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card  , InputNumber ,Button } from 'antd';
const { Meta } = Card;
const ProductDetailCard = ({Data}) => (
  <Card
    style={{
      width: 300,
      textAlign: "center"
    }}
    cover={
      <img
        alt="example"
        src={Data.image}
      />
    }
  >
    
    <h2>  {Data.name}</h2>
    <h3> ราคา {Data.price}  บาท </h3>
    <InputNumber  style={{marginTop: "10px"}}  defaultValue={0}  min={1} max={10}/>
    <br/>
    <Button type="primary" style={{marginTop: "15px"}}>เพิ่มลงตระกร้า</Button>
  </Card>
);
export default ProductDetailCard;