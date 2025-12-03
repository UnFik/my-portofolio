import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'

const BlogPage = async () => {
    const payload = await getPayload({ config })
    const posts = await payload.find({
        collection: 'posts',
    })

    return (
        <div className="mx-auto py-20 px-10">
            <h1 className="text-4xl font-bold mb-8 text-white">Blog</h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.docs.map((post) => (
                    <div key={post.id} className="border border-white/10 bg-white/5 p-6 rounded-lg shadow-sm hover:bg-white/10 transition-colors">
                        <h2 className="text-2xl font-semibold mb-2 text-white">{post.title}</h2>
                        <div className="text-gray-400 mb-4 text-sm">
                            {post.publishedDate ? new Date(post.publishedDate as string).toLocaleDateString() : 'No date'}
                        </div>
                        <Link href={`/blog/${post.slug}`} className="text-blue-400 hover:text-blue-300 hover:underline">
                            Read more
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogPage
