import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { 
  Truck, 
  Construction, 
  Wrench, 
  Move, 
  Fuel,
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  Users
} from 'lucide-react';

import rigMovesImage from '@/assets/rig-moves.jpg';
import heavyHaulImage from '@/assets/heavy-haul.jpg';
import equipmentRentalImage from '@/assets/equipment-rental.jpg';
import jackingSkiddingImage from '@/assets/jacking-skidding.jpg';
import petroleumLogisticsImage from '@/assets/petroleum-logistics.jpg';

const services = [
  {
    id: 'rig-moves',
    icon: Move,
    title: 'Rig Moves',
    subtitle: 'Complete Drilling Rig Relocation Services',
    description: 'Specialized in the safe and efficient transportation, assembly, and disassembly of drilling rigs across Kuwait and the GCC region. Our experienced teams handle the most complex rig moving operations with precision and safety.',
    image: rigMovesImage,
    features: [
      'Complete rig transportation and logistics',
      'Site preparation and rigging services',
      'Assembly and disassembly operations',
      'Load calculations and route planning',
      'Specialized heavy-haul equipment fleet',
      '24/7 project management and support'
    ],
    capabilities: [
      'Land drilling rigs up to 3000HP',
      'Workover rigs and completion units',
      'Coiled tubing and fracturing equipment',
      'Offshore platform modules'
    ]
  },
  {
    id: 'heavy-haul',
    icon: Construction,
    title: 'Heavy Haul & Cranes',
    subtitle: 'Heavy Equipment Transportation & Lifting Solutions',
    description: 'Professional heavy haul transportation and crane services for the most demanding industrial projects. Our modern fleet and experienced operators ensure safe handling of oversized and overweight cargo.',
    image: heavyHaulImage,
    features: [
      'Heavy haul transportation services',
      'Mobile and crawler crane operations',
      'Project planning and engineering',
      'Route surveys and permit acquisition',
      'Specialized rigging and lifting',
      'Load monitoring and documentation'
    ],
    capabilities: [
      'Payload capacity up to 500 tons',
      'Mobile cranes up to 750 tons',
      'Crawler cranes up to 400 tons',
      'Specialized heavy haul trailers'
    ]
  },
  {
    id: 'equipment-rental',
    icon: Wrench,
    title: 'Equipment Rental',
    subtitle: 'Comprehensive Fleet Rental Solutions',
    description: 'Extensive fleet of specialized construction and industrial equipment available for short-term and long-term rental projects. All equipment is professionally maintained and comes with full operational support.',
    image: equipmentRentalImage,
    features: [
      'Construction and earthmoving equipment',
      'Specialized lifting and material handling',
      'Power generation and air compression',
      'Maintenance and technical support',
      'Operator training and certification',
      'Flexible rental terms and agreements'
    ],
    capabilities: [
      '150+ pieces of specialized equipment',
      'Bulldozers, excavators, and compactors',
      'Forklifts and material handlers',
      'Generators and compressors'
    ]
  },
  {
    id: 'jacking-skidding',
    icon: Truck,
    title: 'Jacking & Skidding',
    subtitle: 'Precision Heavy Lifting & Moving Services',
    description: 'Advanced hydraulic jacking and skidding services for moving heavy industrial equipment and structures. Our precision systems ensure safe and controlled lifting and positioning operations.',
    image: jackingSkiddingImage,
    features: [
      'Hydraulic jacking systems up to 1000 tons',
      'Heavy skidding and sliding operations',
      'Load monitoring and control systems',
      'Precision positioning and alignment',
      'Structural analysis and planning',
      'Emergency lifting and recovery services'
    ],
    capabilities: [
      'Single point loads up to 1000 tons',
      'Multi-point synchronized lifting',
      'Skidding distances up to 500 meters',
      'Computer-controlled load monitoring'
    ]
  },
  {
    id: 'petroleum-logistics',
    icon: Fuel,
    title: 'Petroleum Logistics & Support',
    subtitle: 'Comprehensive Oil & Gas Field Services',
    description: 'Complete logistics and support services for oil & gas operations across Kuwait. From supply chain management to field services, we keep energy operations running smoothly and efficiently.',
    image: petroleumLogisticsImage,
    features: [
      'Oil field supply chain management',
      'Equipment transportation and support',
      'Field maintenance and services',
      'Emergency response capabilities',
      'Inventory management systems',
      'Environmental compliance support'
    ],
    capabilities: [
      'Regional supply chain network',
      'Fleet of specialized service vehicles',
      '24/7 emergency response team',
      'Environmental compliance systems'
    ]
  }
];

const additionalServices = [
  {
    icon: Shield,
    title: 'Safety & Compliance',
    description: 'Comprehensive safety management and regulatory compliance services'
  },
  {
    icon: Clock,
    title: '24/7 Emergency Support',
    description: 'Round-the-clock emergency response and support services'
  },
  {
    icon: Users,
    title: 'Consulting Services',
    description: 'Technical consulting and project management expertise'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
        <div className="container-width">
          <div className="text-center mb-16">
            <h1 className="heading-xl mb-6">
              Comprehensive Heavy Equipment Services
            </h1>
            <p className="text-large max-w-4xl mx-auto leading-relaxed opacity-90">
              From rig moves to petroleum logistics, Swanberg Kuwait delivers specialized solutions 
              that keep Kuwait's energy sector moving forward. With over 25 years of experience 
              and a fleet of 150+ specialized vehicles, we handle the most demanding industrial challenges.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-primary-foreground/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">150+</div>
              <div className="text-primary-foreground/80">Fleet Vehicles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-primary-foreground/80">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                      <p className="text-accent font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-large text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">Capabilities</h3>
                      <ul className="space-y-3">
                        {service.capabilities.map((capability, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button asChild variant="default" size="lg">
                    <NavLink to="/contact" className="group">
                      Request Quote
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </NavLink>
                  </Button>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-subtle">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-6">Additional Support Services</h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Beyond our core services, we provide comprehensive support to ensure project success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {additionalServices.map((service, index) => (
              <div key={index} className="card-professional p-8 text-center group">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="card-professional p-12 bg-primary text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-large opacity-90 mb-8 max-w-2xl mx-auto">
                Contact our expert team for a consultation and detailed quote. 
                We're here to support your heavy equipment needs 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="lg">
                  <NavLink to="/contact">
                    Get a Quote
                    <ArrowRight className="w-5 h-5" />
                  </NavLink>
                </Button>
                <Button asChild variant="secondary" size="lg" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary">
                  <a href="tel:+96524810000">
                    Call +965 2481 0000
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;