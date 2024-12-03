// src/payload.config.ts
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'

import { lexicalEditor } from '@payloadcms/richtext-lexical'
import {
  HeadingFeature,
  ParagraphFeature,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  LinkFeature,
  UploadFeature,
  OrderedListFeature,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

// Import our collection configurations
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Services } from './collections/Services'
import { Pages } from './collections/Pages'

// Set up proper file paths for ES modules
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // Admin panel configuration - this tells Payload which collection to use for authentication
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },


  // Add the Payload Cloud plugin
  plugins: [
    payloadCloudPlugin(),
  ],


  // Register our collections - these are the content types we'll manage in the CMS
  collections: [
    Users, 
    Media,
    Services,
    Pages,
  ],

  // Configure the rich text editor with basic features
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      HeadingFeature(),
      ParagraphFeature(),
      BoldFeature(),
      ItalicFeature(),
      UnderlineFeature(),
      OrderedListFeature(),
      UnorderedListFeature(),
      LinkFeature({}),
      UploadFeature({
        collections: {
          media: {
            fields: [
              {
                name: 'caption',
                type: 'text',
              },
            ],
          },
        },
      }),
    ],
  }),

  // This secret is used for authentication and encryption
  secret: process.env.PAYLOAD_SECRET || '',

  // Generate TypeScript types for our collections
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  // Configure the database connection
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),

  upload: {
    limits: {
      fileSize: 5000000, // 5MB in bytes
    },
  },
})