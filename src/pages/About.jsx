import { Users, Target, Heart, Award } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Patient-Centric",
      description:
        "Every decision we make is guided by improving patient outcomes and healthcare access.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We continuously push boundaries to create cutting-edge healthcare technology solutions.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description:
        "We believe in the power of partnerships between pharmacies, patients, and healthcare providers.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description:
        "We maintain the highest standards of quality, security, and compliance in everything we do.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description:
        "SeekMedicine was established with a vision to bridge healthcare gaps.",
    },
    {
      year: "2021",
      title: "SAS Pharma Suite Launch",
      description: "Released our comprehensive pharmacy management system.",
    },
    {
      year: "2022",
      title: "SeekMedicine App Launch",
      description: "Introduced our patient-focused mobile application.",
    },
    {
      year: "2023",
      title: "AI Integration",
      description:
        "Added AI-powered health assistant to enhance user experience.",
    },
    {
      year: "2024",
      title: "Market Expansion",
      description: "Serving 500+ pharmacies and 50K+ patients nationwide.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-green-800">SeekMedicine</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're a health-tech company passionate about revolutionizing
              healthcare delivery through innovative technology solutions that
              connect pharmacies and patients.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To empower pharmacies with comprehensive management tools
                  while providing patients with easy access to medicines and
                  healthcare professionals, ultimately improving healthcare
                  outcomes for everyone.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe that technology should make healthcare more
                  accessible, efficient, and patient-centered. Our solutions
                  bridge the gap between traditional pharmacy operations and
                  modern digital healthcare needs.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become the leading healthcare technology platform that
                seamlessly connects pharmacies, patients, and healthcare
                providers, creating a more integrated and efficient healthcare
                ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Core Values"
            description="These principles guide everything we do and shape our company culture."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-green-800">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  SeekMedicine was founded in 2020 by a team of healthcare
                  professionals and technology experts who recognized the
                  growing need for better integration between pharmacies and
                  patients.
                </p>
                <p>
                  We started with a simple observation: while pharmacies were
                  struggling with manual processes and limited digital tools,
                  patients were finding it increasingly difficult to access
                  medicines and connect with healthcare providers.
                </p>
                <p>
                  Today, we're proud to serve hundreds of pharmacies and
                  thousands of patients across the country, with our platform
                  continuously evolving to meet the changing needs of the
                  healthcare industry.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-800 to-blue-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span>Continuous innovation in healthcare technology</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span>
                      Maintaining the highest security and compliance standards
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span>
                      Providing exceptional customer support and training
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span>Contributing to improved healthcare outcomes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Journey"
            description="Key milestones in our mission to transform healthcare technology."
          />

          <div className="mt-16">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-green-200"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-800 rounded-full border-4 border-white shadow-lg"></div>

                  {/* Content */}
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <div className="text-green-800 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Team"
            description="Meet the passionate professionals behind SeekMedicine's success."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-green-800">SM</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Healthcare Experts
              </h3>
              <p className="text-gray-600">
                Experienced professionals with deep understanding of pharmacy
                operations and patient care.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-green-800">SM</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Technology Innovators
              </h3>
              <p className="text-gray-600">
                Skilled developers and engineers creating cutting-edge
                healthcare technology solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-green-800">SM</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Customer Success
              </h3>
              <p className="text-gray-600">
                Dedicated support team ensuring our customers get the most value
                from our platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
