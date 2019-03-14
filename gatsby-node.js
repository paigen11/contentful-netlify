const path = require('path');
const { graphql } = require('gatsby');

exports.createPages = async ({ graphql, actions }) => {
  await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }
    result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
      actions.createPage({
        path: node.slug,
        component: path.resolve(`./src/posts/PostPage.js`),
        context: {
          slug: node.slug,
        },
      });
    });
  });
};
