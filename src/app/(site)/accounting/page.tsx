import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

export default function AccountingPage() {
  return (
    <ServicePageTemplate
      title="Accounting Services"
      description="Professional accounting solutions for individuals and businesses"
      image="/images/services/accounting-hero.jpg"
      highlights={[
        "Tax Planning & Preparation",
        "Business Accounting",
        "Financial Reporting",
        "Audit & Assurance"
      ]}
      content={
        <div>
          <h2>Expert Financial Management</h2>
          <p>Our accounting services provide comprehensive financial management solutions to help you make informed decisions and achieve your financial goals.</p>
          
          <h3>Our Accounting Solutions</h3>
          <p>From tax preparation to business accounting, we offer a full range of services to meet your financial needs.</p>
        </div>
      }
    />
  )
} 