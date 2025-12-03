import { SerializedEditorState, SerializedLexicalNode } from '@payloadcms/richtext-lexical/lexical'
import { slugify } from './string-utils'

export type Heading = {
    id: string
    text: string
    tag: string
    level: number
}

export function extractHeadings(content: SerializedEditorState): Heading[] {
    const headings: Heading[] = []

    const traverse = (node: SerializedLexicalNode) => {
        if (node.type === 'heading') {
            // @ts-ignore - we know heading nodes have tag and children
            const tag = node.tag
            // @ts-ignore
            const text = node.children?.map((child: any) => child.text).join('') || ''

            if (text) {
                headings.push({
                    id: slugify(text),
                    text,
                    tag,
                    level: parseInt(tag.replace('h', '')),
                })
            }
        }

        // @ts-ignore
        if (node.children) {
            // @ts-ignore
            node.children.forEach(traverse)
        }
    }

    if (content?.root?.children) {
        content.root.children.forEach(traverse)
    }

    return headings
}
