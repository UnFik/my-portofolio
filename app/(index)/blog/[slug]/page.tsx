import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import RichText from '@/components/rich-text'

type Args = {
    params: Promise<{
        slug: string
    }>
}

import { extractHeadings } from '@/lib/lexical-utils'
import ScrollProgress from '@/components/scroll-progress'
import TableOfContents from '@/components/table-of-contents'

const PostPage = async ({ params }: Args) => {
    const { slug } = await params
    const payload = await getPayload({ config })
    const result = await payload.find({
        collection: 'posts',
        where: {
            slug: {
                equals: slug,
            },
        },
    })

    const post = result.docs[0]

    if (!post) {
        return notFound()
    }

    const headings = extractHeadings(post.content)

    return (
        <>
            <ScrollProgress />
            <div className="container mx-auto py-28 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="hidden lg:block lg:col-span-4">
                        <TableOfContents headings={headings} />
                    </div>
                    <div className="lg:col-span-8">
                        <h1 className="text-4xl font-bold mb-4 text-white">{post.title}</h1>
                        <div className="text-gray-400 mb-8">
                            {post.publishedDate ? new Date(post.publishedDate as string).toLocaleDateString() : 'No date'}
                        </div>
                        <div className="prose prose-invert max-w-none">
                            <RichText content={post.content} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostPage
