import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Shield,
  Users,
  Zap,
  Download,
  Globe,
  Smartphone,
} from "lucide-react";
import Button from "../../components/Button";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Compliant",
      description:
        "HIPAA-compliant platform ensuring patient data security and privacy.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-User Support",
      description:
        "Role-based access for admins, managers, and staff with different permissions.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered",
      description:
        "Intelligent health assistant to answer medical queries and provide guidance.",
    },
  ];

  const products = [
    {
      title: "SAS Pharma Suite",
      description:
        "Comprehensive pharmacy management system with web and mobile apps, featuring offline capability for uninterrupted operations.",
      features: [
        "Web & Mobile Apps",
        "Offline Capability",
        "Multi-branch management",
      ],
      link: "/products",
      badge: "For Pharmacies",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "SeekMedicine App",
      description:
        "Patient-focused platform for medicine search and healthcare connections.",
      features: [
        "Medicine search",
        "Doctor connections",
        "AI health assistant",
      ],
      link: "/products",
      badge: "For Patients",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-16 sm:py-0">
        {/* Background with multiple layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-blue-400/20 backdrop-blur-sm rounded-full border border-blue-300/30">
                  <div className="w-2 h-2 bg-blue-300 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-blue-100 text-sm font-medium">
                    Trusted by 500+ Pharmacies
                  </span>
                </div>

                {/* Main Heading */}
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    <span className="block">Revolutionizing</span>
                    <span className="block bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">
                      Healthcare
                    </span>
                    <span className="block">Technology</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                    Empowering pharmacies and patients with innovative digital
                    solutions that bridge the gap between healthcare providers
                    and those who need care.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="xl"
                    className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0 shadow-lg shadow-blue-500/25"
                  >
                    <span className="text-lg">Get Started Today</span>
                    <ArrowRight
                      size={24}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </Button>
                  <Button
                    variant="outline"
                    size="xl"
                    className="group border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 backdrop-blur-sm"
                  >
                    <Play size={24} className="mr-2" />
                    <span className="text-lg">Watch Demo</span>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">
                      500+
                    </div>
                    <div className="text-blue-200 text-sm">Pharmacies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">
                      50K+
                    </div>
                    <div className="text-blue-200 text-sm">Patients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">
                      99.9%
                    </div>
                    <div className="text-blue-200 text-sm">Uptime</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Floating Cards */}
              <div className="lg:col-span-5 relative">
                {/* Main App Preview Card */}
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-lg">
                              SM
                            </span>
                          </div>
                          <div>
                            <h3 className="text-white font-semibold text-lg">
                              SeekMedicine
                            </h3>
                            <p className="text-blue-200 text-sm">
                              AI Health Assistant
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                      </div>

                      {/* Chat Interface */}
                      <div className="space-y-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">
                                AI
                              </span>
                            </div>
                            <div>
                              <p className="text-white text-sm">
                                Hello! I'm your health assistant. How can I help
                                you today?
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-500/30 backdrop-blur-sm rounded-2xl p-4 ml-8">
                          <p className="text-white text-sm">
                            I need to find a medicine for headache
                          </p>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                          <span className="text-blue-200 text-xs">
                            Find Medicine
                          </span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                          <span className="text-blue-200 text-xs">
                            Book Doctor
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-4 shadow-lg hidden md:block">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-xs">Support</div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl p-4 shadow-lg hidden md:block">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold">AI</div>
                      <div className="text-xs">Powered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SeekMedicine?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with healthcare
              expertise to deliver solutions that truly make a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive suite of healthcare technology
              solutions designed to meet the needs of both pharmacies and
              patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" variant="outline">
                View All Products
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Download Apps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Download Our Apps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get access to our healthcare solutions on your preferred platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SAS Pharma Suite */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    SAS Pharma Suite
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Web and mobile pharmacy management system with offline
                    capability
                  </p>
                </div>
                <div className="space-y-3">
                  <Button size="lg" className="w-full group">
                    <Download className="w-5 h-5 mr-2" />
                    Download for Web
                  </Button>
                  <Button variant="outline" size="lg" className="w-full group">
                    <Smartphone className="w-5 h-5 mr-2" />
                    Download Mobile App
                  </Button>
                </div>
              </div>
            </div>

            {/* SeekMedicine App */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    SeekMedicine App
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Patient-focused platform for medicine search and healthcare
                    connections
                  </p>
                </div>
                <div className="space-y-3">
                  <Button size="lg" className="w-full group">
                    <Download className="w-5 h-5 mr-2" />
                    Download for iOS
                  </Button>
                  <Button variant="outline" size="lg" className="w-full group">
                    <Download className="w-5 h-5 mr-2" />
                    Download for Android
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working with leading healthcare and technology organizations to
              improve healthcare delivery
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {/* Ministry of Health */}
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto">
                <div className="text-blue-600 font-bold text-lg">MOH</div>
              </div>
              <h3 className="font-semibold text-gray-900">
                Ministry of Health
              </h3>
            </div>

            {/* NCA */}
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto">
                <div className="text-blue-600 font-bold text-lg">NCA</div>
              </div>
              <h3 className="font-semibold text-gray-900">NCA</h3>
            </div>

            {/* MoMo */}
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto">
                <div className="text-blue-600 font-bold text-lg">MoMo</div>
              </div>
              <h3 className="font-semibold text-gray-900">Mobile Money</h3>
            </div>

            {/* WHO */}
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto">
                <div className="text-blue-600 font-bold text-lg">WHO</div>
              </div>
              <h3 className="font-semibold text-gray-900">
                World Health Organization
              </h3>
            </div>

            {/* Red Cross */}
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto">
                <div className="text-red-600 font-bold text-lg">RC</div>
              </div>
              <h3 className="font-semibold text-gray-900">Red Cross</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of pharmacies and patients who trust SeekMedicine for
            their healthcare technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Get Started Today
            </Button>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of pharmacies and patients who trust SeekMedicine for
            their healthcare technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Get Started Today
            </Button>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
