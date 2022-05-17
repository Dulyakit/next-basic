import postList from '../../api/post.json'
// import { useRouter } from 'next/router'

// Ex1 
const Post = (props) => {
    return (
        <div>
            {(props.status) ? (
                <div>
                    <h1>Title: {props.post.title}</h1>
                    <p>Content: {props.post.content}</p>
                </div>
            ) : (
                <h1>{props.post}</h1>
            )}
        </div>
    )
}

export async function getServerSideProps(context) {
    console.log(context.query);
    if (context.query.pid) {
        const list = postList[context.query.pid]
        if (list) {
            return {
                props: { post: list, status: true }
            }
        }
        return {
            props: { post: "Data not found : ID --> " + context.query.pid, status: false }
        }
    }
}

// EX2 you open import router
// const Post = () => {
//     const router = useRouter()
//     const { pid } = router.query

//     const post = postList[pid]
//     if (!post) return <p>data not found : ID {'--->'} {pid}</p>

//     return (
//         <> 
//             <h4>PostID: {pid}</h4>
//             <h1>Title: {post.title}</h1>
//             <p>Content: {post.content}</p>
//         </>
//     )
// }

// EX3
// const Post = props => {
//     console.log(props);
//     return (
//         <>
//             <style jsx global>{`
//                 h1{
//                     background-color:yellow
//                 }
//             `}</style>
//             <h1>Title: {props.post.title}</h1>
//             <p>Content: {props.post.content}</p>
//         </>
//     )
// }

// Post.getInitialProps = ({ query }) => {
//     console.log(query);
//     return {
//         post: postList[query.pid]
//     }
// }

export default Post