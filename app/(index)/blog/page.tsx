import Link from 'next/link'
import { getPayload } from 'payload'

import config from '@/payload.config'

const formatPublishedDate = (date?: string | null) => {
    if (!date) {
        return 'Draft note'
    }

    return new Intl.DateTimeFormat('en', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(new Date(date))
}

const BlogPage = async () => {
    const payload = await getPayload({ config })
    const posts = await payload.find({
        collection: 'posts',
        sort: '-publishedDate',
    })

    const featuredPost = posts.docs[0]
    const remainingPosts = posts.docs.slice(1)

    return (
        <main className="relative overflow-hidden py-28 px-4 sm:px-8 lg:px-20">
            <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="container mx-auto space-y-16">
                <header className="max-w-3xl space-y-5">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                            Blog
                        </h1>
                    </div>
                </header>

                {featuredPost ? (
                    <section className="space-y-10">
                        <Link
                            href={`/blog/${featuredPost.slug}`}
                            className="group block rounded-3xl border border-white/5 bg-gradient-to-br from-primary/15 via-white/5 to-transparent p-6 transition-all duration-300 hover:border-primary/30 hover:from-primary/20 md:p-10"
                        >
                            <article className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                                <div className="space-y-4">
                                    <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                                        Latest post
                                    </span>
                                    <h2 className="max-w-3xl text-3xl font-bold leading-tight text-white transition-colors group-hover:text-primary md:text-5xl">
                                        {featuredPost.title}
                                    </h2>
                                </div>
                                <div className="space-y-6 lg:border-l lg:border-white/10 lg:pl-10">
                                    <time className="block text-sm text-muted-foreground" dateTime={featuredPost.publishedDate ?? featuredPost.createdAt}>
                                        {formatPublishedDate(featuredPost.publishedDate)}
                                    </time>
                                    <div className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform group-hover:translate-x-1">
                                        Read article
                                        <span aria-hidden="true">→</span>
                                    </div>
                                </div>
                            </article>
                        </Link>

                        {remainingPosts.length > 0 ? (
                            <div className="grid gap-5 md:grid-cols-2">
                                {remainingPosts.map((post) => (
                                    <Link
                                        key={post.id}
                                        href={`/blog/${post.slug}`}
                                        className="group rounded-3xl border border-white/5 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.06]"
                                    >
                                        <article className="flex h-full flex-col justify-between gap-8">
                                            <div className="space-y-3">
                                                <time className="text-sm text-muted-foreground" dateTime={post.publishedDate ?? post.createdAt}>
                                                    {formatPublishedDate(post.publishedDate)}
                                                </time>
                                                <h2 className="text-2xl font-semibold leading-snug text-white transition-colors group-hover:text-primary">
                                                    {post.title}
                                                </h2>
                                            </div>
                                            <span className="text-sm font-semibold text-muted-foreground transition-colors group-hover:text-white">
                                                Read more →
                                            </span>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        ) : null}
                    </section>
                ) : (
                    <section className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 text-center md:p-14">
                        <h2 className="text-2xl font-semibold text-white">Belum ada konten</h2>
                        <p className="mt-3 text-muted-foreground">
                            Dev ini masih belum mood buat bikin konten hehe.
                        </p>
                    </section>
                )}
            </div>
        </main>
    )
}

export default BlogPage
