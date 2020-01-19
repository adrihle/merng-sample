import gql from 'graphql-tag'

const getPosts = gql`{
    getPosts {
        id
        title
        content
        image
        author
        likes
        views
    }
}`

export default getPosts