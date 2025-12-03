import {
    RichText as LexicalRichText,
    JSXConvertersFunction,
} from '@payloadcms/richtext-lexical/react'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { cn } from '@/lib/utils'
import { slugify } from '@/lib/string-utils'

type Props = {
    content: SerializedEditorState
}

const jsxConverters: JSXConvertersFunction = ({ defaultConverters }) => ({
    ...defaultConverters,
    heading: ({ node, nodesToJSX }) => {
        const Tag = node.tag as React.ElementType
        // @ts-ignore
        const text = node.children?.map((child: any) => child.text).join('') || ''
        const id = slugify(text)

        return <Tag id={id} className={cn("font-bold text-white mt-8 mb-4 scroll-mt-24", {
            "text-4xl": node.tag === "h1",
            "text-3xl": node.tag === "h2",
            "text-2xl": node.tag === "h3",
            "text-xl": node.tag === "h4",
            "text-lg": node.tag === "h5",
            "text-base": node.tag === "h6",
        })}>{nodesToJSX({ nodes: node.children })}</Tag>
    },
    paragraph: ({ node, nodesToJSX }) => {
        return <p className="text-gray-300 mb-6 leading-relaxed">{nodesToJSX({ nodes: node.children })}</p>
    },
    list: ({ node, nodesToJSX }) => {
        const Tag = node.tag as React.ElementType
        return <Tag className={cn("list-inside mb-6 text-gray-300", {
            "list-disc": node.tag === "ul",
            "list-decimal": node.tag === "ol",
        })}>{nodesToJSX({ nodes: node.children })}</Tag>
    },
    listitem: ({ node, nodesToJSX }) => {
        return <li className="mb-2">{nodesToJSX({ nodes: node.children })}</li>
    },
    quote: ({ node, nodesToJSX }) => {
        return <blockquote className="border-l-4 border-primary pl-4 italic text-gray-400 mb-6">{nodesToJSX({ nodes: node.children })}</blockquote>
    },
    code: ({ node, nodesToJSX }) => {
        return (
            <pre className="bg-gray-950 rounded-lg p-4 overflow-x-auto mb-6 border border-white/10 font-mono text-sm text-gray-200">
                <code>{nodesToJSX({ nodes: node.children })}</code>
            </pre>
        )
    }
})

export default function RichText({ content }: Props) {
    return (
        <LexicalRichText
            data={content}
            converters={jsxConverters}
        />
    )
}
