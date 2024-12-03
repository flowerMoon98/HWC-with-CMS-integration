import { notFound } from 'next/navigation'
import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import { getPayloadClient } from '@/payload/payloadClient'
import { serialize } from '@/lib/serialize'

export async function generateStaticParams() {
  const payload = await getPayloadClient()
  
  const services = await payload.find({
    collection: 'services',
  })

  return services.docs.map((service) => ({
    service: service.slug,
  }))
}

interface ServicePageProps {
  params: Promise<{
    service: string
  }>
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service } = await params
  const payload = await getPayloadClient()
  
  const services = await payload.find({
    collection: 'services',
    where: {
      slug: {
        equals: service,
      },
    },
  })

  if (!services.docs[0]) {
    notFound()
  }

  const serviceData = services.docs[0]

  return (
    <ServicePageTemplate
      title={serviceData.title}
      description={serviceData.shortDescription ?? ''}
      image={typeof serviceData.image === 'string' ? serviceData.image : serviceData.image?.url ?? ''}
      contactImage={typeof serviceData.contactImage === 'string' ? serviceData.contactImage : serviceData.contactImage?.url ?? ''}
      isSpecialBackground={serviceData.isSpecialBackground ?? false}
      highlights={serviceData.highlights?.map(h => h.point) ?? []}
      content={serialize(serviceData.detailedDescription.root.children)}
    />
  )
} 