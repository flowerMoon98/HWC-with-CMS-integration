import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

export default function InsurancePage() {
  return (
    <ServicePageTemplate
      title="Insurance Services"
      description="Comprehensive insurance solutions to protect what matters most"
      image="/images/services/insurance-hero.jpg"
      contactImage="/images/services/insurance-contact.jpg"
      isSpecialBackground={true}
      highlights={[
        "Personal & Business Insurance Coverage",
        "Risk Assessment & Management",
        "Claims Support & Advocacy",
        "Customized Protection Plans"
      ]}
      content={
        <div>
          <h2>Protecting Your Future</h2>
          <p>Our comprehensive insurance services are designed to provide you with peace of mind and financial security. We offer tailored solutions for both individuals and businesses.</p>
          
          <h3>Our Insurance Solutions</h3>
          <p>We provide a wide range of insurance products and services to meet your specific needs, including life insurance, health insurance, property insurance, and business insurance.</p>
        </div>
      }
    />
  )
} 