import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
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
    // Hero Section
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'subheading',
          type: 'textarea',
        },
        {
          name: 'ctaText',
          type: 'text',
        },
        {
          name: 'ctaLink',
          type: 'text',
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Hero Background Image',
        },
      ],
    },
    // Introduction Section
    {
      name: 'introduction',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
        },
        {
          name: 'content',
          type: 'textarea',
        },
        {
          name: 'highlights',
          type: 'array',
          fields: [
            {
              name: 'text',
              type: 'text',
            },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    // Testimonials
    {
      name: 'testimonials',
      type: 'array',
      fields: [
        {
          name: 'content',
          type: 'textarea',
        },
        {
          name: 'authorName',
          type: 'text',
        },
        {
          name: 'authorTitle',
          type: 'text',
        },
        {
          name: 'authorImage',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    // Contact Form Section Image
    {
      name: 'contactFormImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Contact Form Section Image',
    },
  ],
} 