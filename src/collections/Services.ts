import { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import {
  HeadingFeature,
  ParagraphFeature,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  OrderedListFeature,
  UnorderedListFeature,
  LinkFeature,
} from '@payloadcms/richtext-lexical'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'orderNumber'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'orderNumber',
      type: 'number',
      required: true,
      admin: {
        description: 'Used to control the order of services (lower numbers appear first)',
      },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'contactImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'isSpecialBackground',
      type: 'checkbox',
      label: 'Use Special Background Color',
      defaultValue: false,
    },
    {
      name: 'highlights',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'point',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'detailedDescription',
      type: 'richText',
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
        ],
      }),
      required: true,
    },
  ],
}