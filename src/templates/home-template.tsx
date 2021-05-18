import React from 'react';
import Layout from '../layouts/basic';

interface IProps {
  pageContext: {
    id: string;
  };
}

const Home = ({ pageContext }: IProps) => (
  <Layout>
    <h1>HOME</h1>
    <p style={{ color: 'palevioletred' }}>
      This page is just a placeholder, does not contain any metatags or any information/content, yet
    </p>
  </Layout>
);

export default Home;
