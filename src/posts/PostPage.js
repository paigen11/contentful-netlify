import React, { Component } from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <div>
          <span>{data.markdownRemark.frontmatter.date}</span>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html,
            }}
          />
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMM DD YYYY")
      }
    }
  }
`;
