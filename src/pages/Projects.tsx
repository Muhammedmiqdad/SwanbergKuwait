import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Target,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Award
} from 'lucide-react';

import rigMoveImage from '@/assets/project-rig-move.jpg';
import refineryImage from '@/assets/project-refinery.jpg';
import emergencyImage from '@/assets/project-emergency.jpg';

const featuredProjects = [
  {
    id: 1,
    title: 'Al-Khafji Drilling Rig Relocation',
    client: 'Kuwait Oil Company (KOC)',
    location: 'Al-Khafji Oil Field, Kuwait',
    duration: '45 days',
    value: '$2.5M',
    year: '2023',
    image: rigMoveImage,
    description: 'Complete relocation of a 2500HP drilling rig including disassembly, transportation, and reassembly at new location.',
    services: ['Rig Moves', 'Heavy Haul', 'Project Management'],
    highlights: [
      'Zero safety incidents throughout project duration',
      'Completed 5 days ahead of schedule',
      'Transported over 450 tons of equipment',
      'Coordinated with multiple stakeholders'
    ],
    challenge: 'Complex logistics coordination required for moving sensitive drilling equipment across challenging desert terrain while maintaining operational safety standards.',
    solution: 'Deployed specialized heavy haul equipment with GPS tracking and implemented comprehensive safety protocols including route planning and weather monitoring.'
  },
  {
    id: 2,
    title: 'Mina Al-Ahmadi Refinery Expansion',
    client: 'Kuwait National Petroleum Company (KNPC)',
    location: 'Mina Al-Ahmadi, Kuwait',
    duration: '120 days',
    value: '$8.2M',
    year: '2023',
    image: refineryImage,
    description: 'Heavy lifting and positioning of major refinery components including distillation columns and heat exchangers.',
    services: ['Heavy Haul & Cranes', 'Jacking & Skidding', 'Equipment Rental'],
    highlights: [
      'Lifted components weighing up to 380 tons',
      'Precision positioning within 5mm tolerance',
      'Coordinated with refinery operations',
      'Achieved ISO quality standards'
    ],
    challenge: 'Installation of oversized refinery equipment in an operating facility requiring precise timing and minimal disruption to ongoing operations.',
    solution: 'Utilized synchronized lifting systems and worked during planned maintenance windows to ensure zero operational impact.'
  },
  {
    id: 3,
    title: 'Emergency Equipment Recovery',
    client: 'Chevron Kuwait',
    location: 'Wafra Oil Field, Kuwait',
    duration: '72 hours',
    value: '$450K',
    year: '2024',
    image: emergencyImage,
    description: '24/7 emergency response for recovery of stuck drilling equipment and site restoration.',
    services: ['Emergency Support', 'Jacking & Skidding', 'Heavy Haul'],
    highlights: [
      'Rapid 4-hour emergency response time',
      'Successfully recovered $2M+ equipment',
      'Restored operations within 72 hours',
      'Zero environmental impact'
    ],
    challenge: 'Critical drilling equipment became stuck during operations, requiring immediate recovery to prevent production losses and equipment damage.',
    solution: 'Deployed emergency response team with specialized jacking and recovery equipment, working around the clock to minimize downtime.'
  }
];

const projectStats = [
  {
    icon: Target,
    number: '500+',
    label: 'Projects Completed',
    description: 'Successfully delivered across Kuwait and GCC'
  },
  {
    icon: DollarSign,
    number: '$150M+',
    label: 'Project Value',
    description: 'Total value of projects delivered'
  },
  {
    icon: Users,
    number: '50+',
    label: 'Major Clients',
    description: 'Leading oil & gas companies served'
  },
  {
    icon: Award,
    number: '98%',
    label: 'Success Rate',
    description: 'Projects completed on time and budget'
  }
];

const clientLogos = [
  'Kuwait Oil Company (KOC)',
  'Kuwait National Petroleum Company (KNPC)',
  'Chevron Kuwait',
  'ExxonMobil Kuwait',
  'Shell Kuwait',
  'BP Kuwait',
  'Total Kuwait',
  'Halliburton Kuwait'
];

const projectTypes = [
  {
    category: 'Rig Operations',
    projects: 125,
    description: 'Drilling rig moves, assembly, and logistics'
  },
  {
    category: 'Refinery Projects',
    projects: 85,
    description: 'Heavy lifting and equipment installation'
  },
  {
    category: 'Emergency Response',
    projects: 200,
    description: 'Critical equipment recovery and support'
  },
  {
    category: 'Infrastructure',
    projects: 90,
    description: 'Industrial construction and expansion'
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
        <div className="container-width">
          <div className="text-center mb-16">
            <h1 className="heading-xl mb-6">
              Our Project Portfolio
            </h1>
            <p className="text-large max-w-4xl mx-auto leading-relaxed opacity-90">
              Showcasing successful heavy equipment and petroleum logistics projects across Kuwait. 
              From complex rig moves to emergency recoveries, we deliver excellence in every operation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-primary-foreground font-medium mb-1">{stat.label}</div>
                <div className="text-primary-foreground/70 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-6">Featured Projects</h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Detailed case studies of our most significant and challenging projects.
            </p>
          </div>

          <div className="space-y-24">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {project.year}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-foreground mb-4">{project.title}</h3>
                    <p className="text-large text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Info Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-accent flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground">Client</div>
                        <div className="font-medium text-foreground">{project.client}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground">Location</div>
                        <div className="font-medium text-foreground">{project.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground">Duration</div>
                        <div className="font-medium text-foreground">{project.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-5 h-5 text-accent flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground">Project Value</div>
                        <div className="font-medium text-foreground">{project.value}</div>
                      </div>
                    </div>
                  </div>

                  {/* Services Used */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Services Provided</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, idx) => (
                        <span key={idx} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-4">Key Highlights</h4>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                      <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                      <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="section-padding bg-subtle">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-6">Project Categories</h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Our diverse portfolio spans across multiple sectors of Kuwait's energy industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectTypes.map((type, index) => (
              <div key={index} className="card-professional p-8 text-center group">
                <div className="text-4xl font-bold text-accent mb-4">{type.projects}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{type.category}</h3>
                <p className="text-muted-foreground leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-6">Trusted by Industry Leaders</h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              We're proud to serve Kuwait's leading oil & gas companies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="card-professional p-6 text-center group">
                <div className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-width text-center">
          <h2 className="heading-lg mb-6">Ready to Start Your Project?</h2>
          <p className="text-large opacity-90 mb-8 max-w-3xl mx-auto">
            Contact our expert team to discuss your heavy equipment and logistics requirements. 
            We're ready to deliver exceptional results for your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <NavLink to="/contact">
                Get Project Quote
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
      </section>
    </div>
  );
};

export default Projects;