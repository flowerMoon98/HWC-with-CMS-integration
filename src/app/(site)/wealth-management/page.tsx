import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

export default function WealthManagementPage() {
  return (
    <ServicePageTemplate
      title="Wealth Management"
      description="Expert guidance to grow and protect your wealth"
      image="/images/services/wealth-management-hero.jpg"
      contactImage="/images/services/wealth-management-contact.jpg"
      highlights={[
        "Investment Planning",
        "Retirement Planning",
        "Estate Planning",
        "Portfolio Management"
      ]}
      content={
        <div>
          <h2>Building Your Financial Legacy</h2>
          <p>Our wealth management services are designed to help you build, preserve, and transfer your wealth effectively.</p>
          
          <h3>Comprehensive Wealth Solutions</h3>
          <p>We provide personalized strategies for investment management, retirement planning, and estate preservation.</p>
        </div>
      }
    />
  )
} 