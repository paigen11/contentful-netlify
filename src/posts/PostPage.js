import React, { Component } from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export default class PostPage extends Component {
  render() {
    const { data, location } = this.props;
    if (!data) return null;
    return (
      <Layout location={location}>
        <div>
          <span>{data.contentfulBlogPost.date}</span>
          <h1>{data.contentfulBlogPost.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      slug
      id
    }
  }
`;
