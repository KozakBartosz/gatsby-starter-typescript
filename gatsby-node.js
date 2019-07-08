const path = require(`path`)


exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return graphql(`
        query BlogPostsQuery {
            allDatoCmsBlog {
                nodes {
                    id
                    title
                    adres
                    content
                }
            }
        }
    `).then(result => {

        // console.log(JSON.stringify(result, null, 4))
        // console.log(result);
        result.data.allDatoCmsBlog.nodes.forEach(( node ) => {
            console.log(`Create pages of ${node.adres} ` + JSON.stringify(node, null, 2))
            createPage({
                path: "blog/"+node.adres,
                component: path.resolve(`./src/templates/article.tsx`),
                context: {
                    slag: node.adres
                }
            });
        });
    });
};
