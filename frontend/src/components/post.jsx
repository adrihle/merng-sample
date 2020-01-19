import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import getPosts from '../graphql/get-posts'
import { Fade } from 'react-reveal'

const Post = props => (
    <Fade bottom>
        <div style={{marginBottom: '2em'}} id={props.post.id}>
        <div>{props.post.title}</div>
        <div>{props.post.content}</div>
        <img src={'http://localhost:4000' + props.post.image} alt='' style={{width: '100%', height: '100%'}}/>
    </div>
    </Fade>
)

export default function() {
    const { loading, error, data } = useQuery(getPosts)
    if (loading) return 'loading...'
    if (error) return `error: ${error.message}`
    return data.getPosts.map((post, i) => {
        return <Post post={post} key={i} />
    })
}