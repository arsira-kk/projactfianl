import React from 'react';
import { Row, Col } from 'antd'; // Import Row and Col components from antd
import ProductDetailCard from './ProductCard'; // Assuming ProductDetailCard is in the same directory

const AllProducts = ({ ProductDetail }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>
        สินค้าทั้งหมด
      </h2>
      <Row gutter={[16, 16]}>
        {/* Map through ProductDetail array and render ProductDetailCard component */}
        {ProductDetail.map((product) => (
          <Col key={product.id} span={6}>
            <ProductDetailCard Data={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllProducts;
