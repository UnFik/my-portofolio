'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Heading } from '@/lib/lexical-utils'
import { motion } from 'framer-motion'

type Props = {
    headings: Heading[]
}

export default function TableOfContents({ headings }: Props) {
    const [activeId, setActiveId] = useState<string>('')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: '0% 0% -80% 0%' }
        )

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id)
            if (element) {
                observer.observe(element)
            }
        })

        return () => {
            headings.forEach((heading) => {
                const element = document.getElementById(heading.id)
                if (element) {
                    observer.unobserve(element)
                }
            })
        }
    }, [headings])

    if (headings.length === 0) return null

    return (
        <nav className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-auto">
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                On this page
            </h4>
            <div className="relative">
                {/* Active Indicator Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />

                <ul className="space-y-3 text-sm">
                    {headings.map((heading) => (
                        <li key={heading.id} className="relative pl-4">
                            <motion.div
                                initial={false}
                                animate={{
                                    height: activeId === heading.id ? '100%' : '0%',
                                    opacity: activeId === heading.id ? 1 : 0,
                                }}
                                className="absolute left-0 top-0 w-0.5 bg-primary"
                                style={{ height: '100%' }}
                            />
                            <a
                                href={`#${heading.id}`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    document.getElementById(heading.id)?.scrollIntoView({
                                        behavior: 'smooth',
                                    })
                                    setActiveId(heading.id)
                                }}
                                className={cn(
                                    "block transition-colors duration-200 hover:text-white",
                                    activeId === heading.id
                                        ? "text-white font-medium"
                                        : "text-gray-400"
                                )}
                                style={{
                                    paddingLeft: (heading.level - 1) * 8
                                }}
                            >
                                {heading.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
