import { Check, ArrowRight, Smartphone, Building2, Brain, Users, BarChart3, FileText, Package, MessageCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';

const Products = () => {
  const sasPharmaFeatures = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Multi-Branch Management",
      description: "Manage multiple pharmacy locations from a single dashboard with centralized control."
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Inventory Management",
      description: "Real-time stock tracking, automated reordering, and expiry date monitoring."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive reports on sales, inventory, and business performance."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Invoice & Billing",
      description: "Automated invoice generation, payment tracking, and financial reporting."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Role-Based Access",
      description: "Secure access control for admins, managers, and staff with different permissions."
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Compliance Ready",
      description: "HIPAA-compliant platform with built-in security and audit trails."
    }
  ];

  const seekMedicineFeatures = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Medicine Search",
      description: "Find medicines quickly with our comprehensive database and search functionality."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Doctor Connections",
      description: "Connect with healthcare professionals for consultations and medical advice."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Health Assistant",
      description: "Get instant answers to health-related questions with our intelligent chatbot."
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Health & Beauty",
      description: "Access a wide range of health and beauty products from trusted pharmacies."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Pharmacy Chat",
      description: "Direct communication with pharmacies for queries and order management."
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Secure & Private",
      description: "Your health information is protected with enterprise-grade security."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small pharmacies",
      features: [
        "Single branch management",
        "Basic inventory tracking",
        "Standard reporting",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Ideal for growing pharmacies",
      features: [
        "Multi-branch management",
        "Advanced analytics",
        "Automated reordering",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large pharmacy chains",
      features: [
        "Unlimited branches",
        "Custom integrations",
        "Dedicated support",
        "White-label options",
        "Advanced security"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-800">Products</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our comprehensive suite of healthcare technology solutions designed 
              to empower pharmacies and improve patient care.
            </p>
          </div>
        </div>
      </section>

      {/* SAS Pharma Suite Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  SAS Pharma Suite
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  A comprehensive pharmacy management system that streamlines operations, 
                  improves efficiency, and helps pharmacies deliver better patient care.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From inventory management to sales analytics, our platform provides 
                  everything you need to run a successful pharmacy business.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sasPharmaFeatures.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-800 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Request Demo
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">Dashboard</h3>
                        <div className="text-sm text-gray-500">SAS Pharma Suite</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 rounded p-3">
                          <div className="text-2xl font-bold text-green-800">$12,450</div>
                          <div className="text-sm text-gray-600">Today's Sales</div>
                        </div>
                        <div className="bg-blue-50 rounded p-3">
                          <div className="text-2xl font-bold text-blue-800">156</div>
                          <div className="text-sm text-gray-600">Orders</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SeekMedicine App Section */}
      <section className="py-20 bg-gray-50">
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
                        <p className="text-sm text-gray-600">How can I help you today?</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="text-sm text-gray-600">Search medicines...</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="text-sm text-gray-600">Find doctors...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  SeekMedicine App
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  A patient-focused platform that connects individuals with medicines, 
                  healthcare professionals, and an AI-powered health assistant.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Find medicines, connect with doctors, and get instant health guidance 
                  all in one convenient mobile application.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {seekMedicineFeatures.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-800 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Download App
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Complete Feature Comparison"
            description="Explore all the powerful features available in our healthcare technology suite."
          />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* SAS Pharma Suite Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">SAS Pharma Suite Features</h3>
              <div className="space-y-4">
                {sasPharmaFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-800 flex-shrink-0">
                      <Check size={14} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SeekMedicine App Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">SeekMedicine App Features</h3>
              <div className="space-y-4">
                {seekMedicineFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-800 flex-shrink-0">
                      <Check size={14} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Pricing Plans"
            description="Choose the perfect plan for your pharmacy's needs."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 shadow-lg ${
                plan.popular ? 'ring-2 ring-green-800 relative' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-800 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check size={16} className="text-green-800 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "primary" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of pharmacies already using our platform to streamline 
            their operations and improve patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-800">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
