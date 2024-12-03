import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

export default function HealthcarePage() {
  return (
    <ServicePageTemplate
      title="Healthcare Planning"
      description="Strategic healthcare planning for your future"
      image="/images/services/healthcare-hero.jpg"
      highlights={[
        "Healthcare Cost Planning",
        "Medicare Consulting",
        "Long-term Care Planning",
        "Health Insurance Options"
      ]}
      content={
        <div>
          <h2>Planning for Your Health Future</h2>
          <p>Our healthcare planning services help you prepare for and manage healthcare costs effectively.</p>
          
          <h3>Healthcare Solutions</h3>
          <p>We provide comprehensive guidance on healthcare planning, including insurance options and long-term care strategies.</p>
        </div>
      }
    />
  )
} 