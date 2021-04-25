import Head from 'next/head'

import AllPosts from "../../components/posts/all-posts"
import { getAllPosts } from '../../lib/posts-util'

function AllPostsPage(props) {
    return <>
        <Head>
            <title>Austin's blog posts</title>
            <meta name='description' content='All blog posts by Austin' />
        </Head>
        <AllPosts posts={props.posts}/>
    </>
}

export function getStaticProps() {
    const posts = getAllPosts()

    return {
        props: {
            posts
        }
    }
}

export default AllPostsPage