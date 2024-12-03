import Link from 'next/link'
import { getPayloadClient } from '@/payload/payloadClient'
import { notFound } from 'next/navigation'
import { ContactFormSection } from '@/components/sections/ContactFormSection'
import Image from 'next/image'

export default async function HomePage() {
  const payload = await getPayloadClient()
  
  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
  })

  if (!pages.docs[0]) {
    notFound()
  }

  const page = pages.docs[0]
  const contactImage = typeof page.contactFormImage === 'string' 
    ? page.contactFormImage 
    : page.contactFormImage?.url ?? '/images/default-contact.jpg'

  const heroBackgroundImage = typeof page.hero.backgroundImage === 'string'
    ? page.hero.backgroundImage
    : page.hero.backgroundImage?.url ?? '/images/default-hero.jpg'

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src={heroBackgroundImage}
            alt="Hero background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-6xl font-bold mb-6">
              {page.hero.heading}
            </h1>
            <p className="text-2xl mb-8">
              {page.hero.subheading}
            </p>
            <Link
              href={page.hero.ctaLink || '/contact'}
              className="inline-block bg-white text-primary-500 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              {page.hero.ctaText || 'Get Started'}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section - now with white background */}
      <section className="bg-white">
        <ContactFormSection 
          image={contactImage}
          isSpecialBackground={false}
        />
      </section>
    </main>
  )
} 