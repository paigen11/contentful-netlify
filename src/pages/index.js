import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostListing from '../components/Posts/PostListing';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.desc}</p>
    {data.allMarkdownRemark.edges.map(({ node }) => {
      return <PostListing post={node} />;
    })}
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
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMM DD YYYY")
          }
          html
        }
      }
    }
  }
`;
