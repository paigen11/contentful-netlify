import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostListing from '../components/Posts/PostListing';

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>Posts</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
  }
`;
