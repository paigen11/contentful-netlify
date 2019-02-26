import React from 'react';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Img from 'gatsby-image';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello people</h1>
    <Img fixed={data.background.sizes} />
    <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.desc}</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
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
    background: { regex: "/bg.jpeg/" }) {
      fixed(maxWidth: 1240) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
