import React from 'react';
import { Table } from 'antd';

const { Column } = Table;

const data = [
  {
    key: '1',
    orderDate: '2024-03-10',
    productName: 'สินค้า A',
    action: 'ชำระเงินแล้ว',
    orderCode: 'ORD001',
    recipient: 'John Doe',
  },
  {
    key: '2',
    orderDate: '2024-03-12',
    productName: 'สินค้า B',
    action: 'รอการชำระเงิน',
    orderCode: 'ORD002',
    recipient: 'Jane Smith',
  },
  // เพิ่มข้อมูลอื่น ๆ ตามต้องการ
];

const OrderHistoryTable = () => {
  return (
    <Table dataSource={data} pagination={false}>
      <Column title="วันที่สั่งซื้อ" dataIndex="orderDate" key="orderDate" />
      <Column title="รายการสินค้า" dataIndex="productName" key="productName" />
      <Column title="การดำเดินการ" dataIndex="action" key="action" />
      <Column title="รหัสการสั่งซื้อ" dataIndex="orderCode" key="orderCode" />
      <Column title="ผู้รับ" dataIndex="recipient" key="recipient" />
    </Table>
  );
};

export default OrderHistoryTable;
