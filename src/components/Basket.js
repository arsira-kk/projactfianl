import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'จำนวน',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'สินค้า',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'ราคา',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'การดำเนินการ',
    dataIndex: 'action',
    key: 'action',
  },
];

const data = [
  {
    key: '1',
    quantity: 1,
    product: 'Product 1',
    price: 100,
    action: 'Action 1',
  },
  {
    key: '2',
    quantity: 2,
    product: 'Product 2',
    price: 200,
    action: 'Action 2',
  },
  // เพิ่มข้อมูลเพิ่มเติมตามต้องการ
];

const footerColumns = [
  {
    title: 'ที่อยู่จัดส่ง',
    dataIndex: 'deliveryAddress',
    key: 'deliveryAddress',
  },
  {
    title: 'ราคารวมทั้งหมด',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
    render: (text, record) => (
      <>
        {text} บาท
      </>
    ),
  },
  {
    title: 'สั่งสินค้า',
    dataIndex: 'orderButton',
    key: 'orderButton',
    render: () => (
      <button>สั่งสินค้า</button>
    ),
  },
];

const footerData = [
  {
    key: 'footer',
    deliveryAddress: '123 ถนน อยู่ที่นี่',
    totalPrice: 500, // ราคารวมทั้งหมด
    orderButton: '', // ไม่จำเป็นต้องมีข้อมูลในคอลัมน์นี้
  },
];

const Basket = () => {
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={false}
        footer={() => (
          <Table
            columns={footerColumns}
            dataSource={footerData}
            bordered
            pagination={false}
            showHeader={false}
            footer={() => null} // ไม่ต้องการ footer สำหรับ footer table
          />
        )}
      />
    </div>
  );
};

export default Basket;
