import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

export default function PropertyPage() {
  return (
    <ServicePageTemplate
      title="Property Services"
      description="Real estate solutions for investors and homeowners"
      image="/images/services/property-hero.jpg"
      highlights={[
        "Property Investment",
        "Real Estate Planning",
        "Property Management",
        "Market Analysis"
      ]}
      content={
        <div>
          <h2>Real Estate Excellence</h2>
          <p>Our property services provide comprehensive solutions for both residential and commercial real estate needs.</p>
          
          <h3>Property Solutions</h3>
          <p>From investment properties to property management, we offer expert guidance in all aspects of real estate.</p>
        </div>
      }
    />
  )
} 