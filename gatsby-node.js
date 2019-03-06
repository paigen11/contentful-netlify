const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { graphql } = require('gatsby');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'posts',
    });
    createNodeField({
      node,
      name: 'slug',
      value: `/posts${slug}`,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  async const { createPage } = actions;
   return new Promise((resolve, reject) => {
     graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        throw result.errors;
      }
      await result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/posts/PostPage.js`),
          context: {
            slug: node.fields.slug,
          },
        });
      });
      resolve();
    });
  });
};
