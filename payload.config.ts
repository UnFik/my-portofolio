import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import {
  BlocksFeature,
  CodeBlock,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  HeadingFeature,
  BlockquoteFeature,
  UploadFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
  LinkFeature,
  OrderedListFeature,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const config = buildConfig({
    admin: {
        user: 'users',
    },
    collections: [
        {
            slug: 'users',
            auth: true,
            access: {
                delete: () => false,
                update: () => false,
            },
            fields: [],
        },
        {
            slug: 'posts',
            admin: {
                useAsTitle: 'title',
            },
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'content',
                    type: 'richText',
                    required: true,
                },
                {
                    name: 'slug',
                    type: 'text',
                    required: true,
                    admin: {
                        position: 'sidebar',
                    },
                },
                {
                    name: 'publishedDate',
                    type: 'date',
                    admin: {
                        position: 'sidebar',
                    }
                }
            ],
        },
        {
            slug: 'media',
            upload: true,
            fields: [
                {
                    name: 'alt',
                    type: 'text',
                },
            ],
        },
    ],
    editor: lexicalEditor({
        features: [
            // Text formatting toolbar
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            BoldFeature(),
            ItalicFeature(),
            UnderlineFeature(),
            HeadingFeature({
                enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'],
            }),
            BlockquoteFeature(),
            
            // Lists
            OrderedListFeature(),
            UnorderedListFeature(),
            
            // Links
            LinkFeature(),
            
            // Inline image upload
            UploadFeature({
                collections: {
                    media: {
                        fields: [
                            {
                                name: 'alt',
                                type: 'text',
                                required: true,
                            },
                        ],
                    },
                },
            }),
            
            // Code blocks with syntax highlighting and YouTube embeds
            BlocksFeature({
                blocks: [
                    CodeBlock({
                        defaultLanguage: 'ts',
                        languages: {
                            js: 'JavaScript',
                            ts: 'TypeScript',
                            jsx: 'JSX',
                            tsx: 'TSX',
                            python: 'Python',
                            bash: 'Bash',
                            json: 'JSON',
                            yaml: 'YAML',
                            html: 'HTML',
                            css: 'CSS',
                            sql: 'SQL',
                            plaintext: 'Plain Text',
                        },
                    }),
                    {
                        slug: 'youtubeEmbed',
                        interfaceName: 'YouTubeEmbedBlock',
                        admin: {
                            group: 'Media',
                        },
                        fields: [
                            {
                                name: 'url',
                                type: 'text',
                                required: true,
                                admin: {
                                    description: 'YouTube video URL (e.g., https://www.youtube.com/watch?v=...)',
                                },
                            },
                        ],
                    },
                ],
            }),
        ],
    }),
    secret: process.env.PAYLOAD_SECRET || 'YOUR_SECRET_HERE',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || 'postgresql://postgres:postgres@localhost:5432/portofolio_db',
        },
    }),
    sharp,
});

export default config;
