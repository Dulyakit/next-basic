import React from 'react'
import { useRouter } from 'next/router'
import postList from '../../api/post.json'

const setting = () => {
    const router = useRouter()
    const { ex2 } = router.query

    console.log(ex2);
    const post = postList[ex2]
    if (!post) return <p>Data not found : ID {'--->'} {ex2}</p>

    return (
        <>
            <h4>PostID: {ex2}</h4>
            <h1>Title: {post.title}</h1>
            <p>Content: {post.content}</p>
        </>
    )
}

export default setting