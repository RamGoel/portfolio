import { posts } from '@/data/posts'
import React from 'react'
import { useRouter } from 'next/router'
import moment from 'moment'
import Navbar from '@/components/nav'
import { Bricolage_Grotesque } from 'next/font/google'
import Head from 'next/head'

const font = Bricolage_Grotesque({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})
const SinglePostPage = () => {
    const router = useRouter()
    const { id } = router.query
    const post = posts.find((post) => post.id === id)
    return (
        <div className="bg-zinc-900 h-screen text-white">
            <Navbar />
            <Head>
                <title>{post?.title}</title>
                <meta
                    name="description"
                    content={post?.content?.slice(0, 100)}
                />
                <meta property="og:title" content={post?.title} />
                <meta
                    property="og:description"
                    content={post?.content?.slice(0, 100)}
                />
                <meta
                    property="og:image"
                    content={`/api/og?title=${post?.title}}`}
                />
            </Head>
            <div className="p-4 flex flex-col gap-2 max-w-2xl pt-10 mx-auto rounded-xl">
                <h1 className="text-2xl font-semibold">{post?.title}</h1>
                <p className="text-md opacity-60">
                    {moment(post?.date).format('DD MMMM YYYY')}
                </p>
                <pre
                    className={`text-md  whitespace-pre-wrap ${font.className}`}
                >
                    {post?.content}
                </pre>
            </div>
        </div>
    )
}

export default SinglePostPage
