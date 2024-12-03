export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] bg-primary-500">
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl">
              Your trusted partner in financial services for over two decades
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2000, we&apos;ve been helping individuals and businesses 
                achieve their financial goals through comprehensive services 
                and expert guidance.
              </p>
              <p className="text-gray-600">
                Our team of experienced professionals is dedicated to providing 
                personalized solutions that meet your unique needs.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg aspect-video">
              {/* Add image here */}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'We maintain the highest standards of professional ethics.'
              },
              {
                title: 'Excellence',
                description: 'We strive to exceed expectations in everything we do.'
              },
              {
                title: 'Client Focus',
                description: 'Your success is our primary measure of achievement.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 