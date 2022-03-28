import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const BlogPage = ({ data }) => {
    console.log('%c data', 'color: green; font-weight: bold;', data)

  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;