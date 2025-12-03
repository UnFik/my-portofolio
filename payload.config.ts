import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { BlocksFeature, CodeBlock } from '@payloadcms/richtext-lexical'

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
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
            BlocksFeature({
                blocks: [
                    CodeBlock({
                        defaultLanguage: 'ts',
                        languages: {
                            js: 'JavaScript',
                            plaintext: 'Plain Text',
                            ts: 'TypeScript',
                        },
                    }),
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
