import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const MainContent = ({ children }) => {
  return (
    <Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        
      }}
    >
      {children}
    </Content>
  );
};

export default MainContent;
