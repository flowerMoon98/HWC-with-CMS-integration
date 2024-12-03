import Image from 'next/image'
import Link from 'next/link'
import { ContactFormSection } from '../sections/ContactFormSection'
import parse from 'html-react-parser'

interface ServicePageTemplateProps {
  title: string
  description: string
  image: string
  contactImage: string
  highlights: string[]
  content: string
  isSpecialBackground?: boolean
}

export default function ServicePageTemplate({
  title,
  description,
  image,
  contactImage,
  highlights,
  content,
  isSpecialBackground,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <div className="absolute inset-0">
          <Image src={image} alt={title} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl">{description}</p>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-primary-500 mb-4">{/* You can add icons here later */}</div>
                <p className="text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            {parse(content)}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection 
        image={contactImage}
        isSpecialBackground={isSpecialBackground}
      />
    </>
  )
}
