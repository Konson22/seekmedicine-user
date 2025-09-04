import { TrendingUp, Users, Shield, Clock, Heart, Award, CheckCircle, Star } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Impact = () => {
  const impactStats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Pharmacies Empowered", description: "Independent and chain pharmacies using our platform" },
    { icon: <Heart className="w-8 h-8" />, number: "50K+", label: "Patients Served", description: "Individuals accessing healthcare through our app" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "40%", label: "Efficiency Increase", description: "Average improvement in pharmacy operations" },
    { icon: <Clock className="w-8 h-8" />, number: "60%", label: "Time Saved", description: "Reduction in administrative tasks for staff" }
  ];

  const pharmacyBenefits = [
    {
      title: "Streamlined Operations",
      description: "Automated inventory management and sales tracking reduce manual work by 60%",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Better Patient Care",
      description: "Faster prescription processing and improved patient communication",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Increased Revenue",
      description: "Better inventory management leads to 25% increase in sales efficiency",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Compliance & Security",
      description: "HIPAA-compliant platform with built-in audit trails and security",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const patientBenefits = [
    {
      title: "Easy Medicine Access",
      description: "Find and order medicines from multiple pharmacies in one place",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "24/7 Health Support",
      description: "AI-powered health assistant available anytime for medical queries",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Doctor Connections",
      description: "Direct access to healthcare professionals for consultations",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Transparent Pricing",
      description: "Compare prices across pharmacies to find the best deals",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Pharmacy Owner",
      company: "Johnson's Pharmacy",
      content: "SeekMedicine has transformed our pharmacy operations. The inventory management system alone has saved us hours every week, and our patients love the convenience of the app.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Patient",
      content: "The SeekMedicine app is a game-changer. I can find medicines quickly, compare prices, and even chat with the AI assistant for health advice. It's like having a pharmacy in my pocket.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Pharmacy Manager",
      company: "Community Care Pharmacy",
      content: "The multi-branch management feature has been incredible for our chain. We can monitor all locations from one dashboard and provide consistent service across all our pharmacies.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-800">Impact</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              See how SeekMedicine is transforming healthcare delivery, empowering pharmacies, 
              and improving patient outcomes across the country.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Impact in Numbers"
            description="Real results from pharmacies and patients using our platform."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto text-green-800">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pharmacy Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Empowering Pharmacies
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our SAS Pharma Suite is helping pharmacies across the country streamline 
                  their operations, improve patient care, and grow their businesses.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From small independent pharmacies to large chains, our platform provides 
                  the tools needed to compete in today's digital healthcare landscape.
                </p>
              </div>

              <div className="space-y-6">
                {pharmacyBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-800 flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">Pharmacy Dashboard</h3>
                    <div className="text-sm text-gray-500">SAS Pharma Suite</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-800">$45,230</div>
                      <div className="text-sm text-gray-600">Monthly Revenue</div>
                      <div className="text-xs text-green-600 mt-1">+15% vs last month</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-800">1,247</div>
                      <div className="text-sm text-gray-600">Prescriptions</div>
                      <div className="text-xs text-blue-600 mt-1">+8% vs last month</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Inventory Status</span>
                      <span className="text-sm text-green-600">85% Optimal</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm mx-auto">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 bg-green-800 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">SM</span>
                    </div>
                    <div className="text-sm text-gray-500">SeekMedicine</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">AI</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Health Assistant</h3>
                        <p className="text-sm text-gray-600">Found 3 pharmacies near you with your medicine</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Johnson's Pharmacy</div>
                          <div className="text-sm text-gray-600">0.5 miles away</div>
                        </div>
                        <div className="text-green-800 font-bold">$12.99</div>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Community Care</div>
                          <div className="text-sm text-gray-600">1.2 miles away</div>
                        </div>
                        <div className="text-green-800 font-bold">$14.50</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Improving Patient Care
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  The SeekMedicine app is making healthcare more accessible and convenient 
                  for patients across the country.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From finding medicines to connecting with healthcare professionals, 
                  our platform puts patients in control of their healthcare journey.
                </p>
              </div>

              <div className="space-y-6">
                {patientBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-800 flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What Our Users Say"
            description="Hear from pharmacies and patients about their experience with SeekMedicine."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  {testimonial.company && (
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Ecosystem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Building a Better Healthcare Ecosystem"
            description="Our platform creates connections that benefit everyone in the healthcare chain."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-10 h-10 text-green-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">For Pharmacies</h3>
              <p className="text-gray-600">
                Streamlined operations, better patient relationships, and increased revenue 
                through efficient management tools.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-10 h-10 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">For Patients</h3>
              <p className="text-gray-600">
                Easy access to medicines, healthcare professionals, and reliable health 
                information when they need it most.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-10 h-10 text-green-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">For Healthcare</h3>
              <p className="text-gray-600">
                A more connected, efficient, and patient-centered healthcare system 
                that improves outcomes for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Impact Section */}
      <section className="py-20 bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Vision for the Future
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            We're committed to expanding our impact and reaching more pharmacies and patients 
            across the country, creating a healthcare system that works better for everyone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1,000+</div>
              <div className="text-green-100">Pharmacies by 2025</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100K+</div>
              <div className="text-green-100">Patients by 2025</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-green-100">States Covered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
