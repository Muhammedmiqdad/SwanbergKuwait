import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { 
  Shield, 
  Award, 
  Users, 
  Globe, 
  ArrowRight,
  CheckCircle,
  Target,
  Eye,
  Heart,
  TrendingUp,
  Calendar,
  MapPin
} from 'lucide-react';

import leadershipImage from '@/assets/leadership-team.jpg';
import facilityImage from '@/assets/company-facility.jpg';

const milestones = [
  {
    year: '1998',
    title: 'Company Founded',
    description: 'Swanberg Kuwait established as a specialized heavy equipment service provider'
  },
  {
    year: '2005',
    title: 'Fleet Expansion',
    description: 'Major investment in specialized heavy haul and crane equipment'
  },
  {
    year: '2010',
    title: 'ISO Certification',
    description: 'Achieved ISO 9001:2008 Quality Management certification'
  },
  {
    year: '2015',
    title: 'Regional Growth',
    description: 'Expanded operations across the GCC region'
  },
  {
    year: '2020',
    title: 'Digital Innovation',
    description: 'Implemented advanced project management and tracking systems'
  },
  {
    year: '2023',
    title: 'Sustainability Focus',
    description: 'Launched environmental compliance and sustainability initiatives'
  }
];

const leadership = [
  {
    name: 'Ahmed Al-Rashid',
    position: 'Chief Executive Officer',
    experience: '25+ years in heavy equipment and oil & gas industry',
    expertise: 'Strategic planning, business development, industry partnerships'
  },
  {
    name: 'Sarah Johnson',
    position: 'Chief Operations Officer',
    experience: '20+ years in logistics and project management',
    expertise: 'Operational excellence, fleet management, safety protocols'
  },
  {
    name: 'Mohammed Al-Sabah',
    position: 'Chief Technology Officer',
    experience: '18+ years in industrial engineering',
    expertise: 'Technical solutions, equipment innovation, digital transformation'
  },
  {
    name: 'Lisa Martinez',
    position: 'Head of Safety & Compliance',
    experience: '15+ years in industrial safety management',
    expertise: 'Safety systems, regulatory compliance, risk management'
  }
];

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Uncompromising commitment to safety in every operation, protecting our people and clients'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Delivering exceptional quality and exceeding expectations in every project'
  },
  {
    icon: Users,
    title: 'Integrity',
    description: 'Building trust through honest communication and reliable service delivery'
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Embracing new technologies and methods to improve efficiency and capabilities'
  }
];

const certifications = [
  'ISO 9001:2015 Quality Management System',
  'ISO 45001:2018 Occupational Health & Safety',
  'ISO 14001:2015 Environmental Management',
  'API Spec Q1 Quality Management System',
  'Kuwait EPA Environmental Compliance',
  'ADNOC Approved Vendor Status',
  'Saudi Aramco Approved Contractor',
  'OSHA Safety Standards Compliance'
];

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="heading-xl mb-6">
                25+ Years of Excellence in 
                <span className="text-accent block">Heavy Equipment Services</span>
              </h1>
              <p className="text-large opacity-90 mb-8 leading-relaxed">
                Since 1998, Swanberg Kuwait has been the trusted partner for Kuwait's oil & gas industry, 
                providing specialized heavy equipment services, rig moves, and petroleum logistics solutions 
                with an unwavering commitment to safety and excellence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-primary-foreground/80 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">200+</div>
                  <div className="text-primary-foreground/80 text-sm">Team Members</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={facilityImage} 
                alt="Swanberg Kuwait Facility"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            <div className="card-professional p-8 text-center">
              <Target className="w-12 h-12 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide safe, reliable, and innovative heavy equipment solutions that enable 
                Kuwait's energy sector to operate efficiently and sustainably.
              </p>
            </div>

            <div className="card-professional p-8 text-center">
              <Eye className="w-12 h-12 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading heavy equipment service provider in the GCC, recognized for 
                operational excellence, safety leadership, and customer satisfaction.
              </p>
            </div>

            <div className="card-professional p-8 text-center">
              <Heart className="w-12 h-12 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Purpose</h3>
              <p className="text-muted-foreground leading-relaxed">
                Empowering Kuwait's industrial growth through specialized expertise, 
                cutting-edge equipment, and unwavering commitment to our clients' success.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-6">Our Core Values</h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto mb-12">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-subtle">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-6">Our Journey</h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              A quarter-century of growth, innovation, and excellence in serving Kuwait's energy sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="card-professional p-8 group">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-accent mr-3" />
                  <span className="text-2xl font-bold text-accent">{milestone.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{milestone.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="heading-lg text-foreground mb-6">Leadership Team</h2>
              <p className="text-large text-muted-foreground mb-8 leading-relaxed">
                Our experienced leadership team brings together decades of industry expertise, 
                driving innovation and excellence across all operations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With combined experience of over 80 years in heavy equipment, oil & gas, 
                and industrial services, our leaders are committed to maintaining Swanberg Kuwait's 
                position as the region's premier service provider.
              </p>
            </div>
            <div>
              <img 
                src={leadershipImage} 
                alt="Leadership Team"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="card-professional p-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{leader.name}</h3>
                <p className="text-accent font-semibold mb-4">{leader.position}</p>
                <p className="text-sm text-muted-foreground mb-3">{leader.experience}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{leader.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="section-padding bg-subtle">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg text-foreground mb-6">
                Certifications & Standards
              </h2>
              <p className="text-large text-muted-foreground mb-8 leading-relaxed">
                Our commitment to excellence is validated by industry-leading certifications 
                and compliance with international standards.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="card-professional p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">ISO</div>
                <div className="text-sm text-muted-foreground">Quality Management</div>
              </div>
              <div className="card-professional p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">API</div>
                <div className="text-sm text-muted-foreground">Industry Standards</div>
              </div>
              <div className="card-professional p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">OSHA</div>
                <div className="text-sm text-muted-foreground">Safety Compliance</div>
              </div>
              <div className="card-professional p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">EPA</div>
                <div className="text-sm text-muted-foreground">Environmental</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-width text-center">
          <h2 className="heading-lg mb-6">Join Our Team</h2>
          <p className="text-large opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of Kuwait's leading heavy equipment service provider. 
            We're always looking for talented professionals to join our growing team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <NavLink to="/careers">
                View Careers
                <ArrowRight className="w-5 h-5" />
              </NavLink>
            </Button>
            <Button asChild variant="secondary" size="lg" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary">
              <NavLink to="/contact">
                Contact Us
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;