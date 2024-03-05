import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'จำนวน',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'รายการสินค้า',
    dataIndex: 'productName',
    key: 'productName',
  },
  {
    title: 'ราคา',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'ผู้รับ',
    dataIndex: 'recipient',
    key: 'recipient',
  },
  {
    title: 'ที่อยู่',
    dataIndex: 'address',
    key: 'address',
  },
];

const data = [
  {
    key: '1',
    quantity: 1,
    productName: 'สินค้า A',
    price: 100,
    recipient: 'John Doe',
    address: '123 Main St, City, Country',
  },
  {
    key: '2',
    quantity: 2,
    productName: 'สินค้า B',
    price: 200,
    recipient: 'Jane Smith',
    address: '456 Park Ave, Town, Country',
  },
 
];

const OrderTable = () => {
  return (
    <div>
      <h2>รายการสั่งซื้อสินค้า</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default OrderTable;
