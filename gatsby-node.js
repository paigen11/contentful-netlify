// const path = require('path');
// const { createFilePath } = require('gatsby-source-filesystem');
// const { graphql } = require('gatsby');

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === 'MarkdownRemark') {
//     const slug = createFilePath({
//       node,
//       getNode,
//       basePath: 'posts',
//     });
//     createNodeField({
//       node,
//       name: 'slug',
//       value: `/posts${slug}`,
//     });
//   }
// };

// exports.createPages = async ({ graphql, actions }) => {
//   await graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       throw result.errors;
//     }
//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       actions.createPage({
//         path: node.fields.slug,
//         component: path.resolve(`./src/posts/PostPage.js`),
//         context: {
//           slug: node.fields.slug,
//         },
//       });
//     });
//   });
// };
