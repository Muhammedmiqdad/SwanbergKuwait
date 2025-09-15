import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { 
  Truck, 
  Construction, 
  Wrench, 
  Move, 
  Fuel,
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    icon: Move,
    title: 'Rig Moves',
    description: 'Complete drilling rig relocation services with specialized heavy-haul equipment and experienced crews.',
    features: ['Rig Transportation', 'Site Preparation', 'Assembly & Disassembly'],
    path: '/services/rig-moves'
  },
  {
    icon: Construction,
    title: 'Heavy Haul & Cranes',
    description: 'Heavy equipment transportation and crane services for the most demanding industrial projects.',
    features: ['Heavy Haul Transport', 'Mobile Cranes', 'Project Management'],
    path: '/services/heavy-haul'
  },
  {
    icon: Wrench,
    title: 'Equipment Rental',
    description: 'Extensive fleet of specialized equipment available for short-term and long-term rental projects.',
    features: ['Construction Equipment', 'Specialized Tools', 'Maintenance Support'],
    path: '/services/equipment-rental'
  },
  {
    icon: Truck,
    title: 'Jacking & Skidding',
    description: 'Precision lifting and moving services for heavy industrial equipment and structures.',
    features: ['Hydraulic Jacking', 'Heavy Skidding', 'Load Monitoring'],
    path: '/services/jacking-skidding'
  },
  {
    icon: Fuel,
    title: 'Petroleum Logistics',
    description: 'Comprehensive logistics and support services for oil & gas operations across Kuwait.',
    features: ['Supply Chain Management', 'Equipment Support', 'Field Services'],
    path: '/services/petroleum-logistics'
  }
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-subtle">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-6">
            Comprehensive Heavy Equipment Services
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            From rig moves to petroleum logistics, we deliver specialized solutions 
            that keep Kuwait's energy sector moving forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="card-professional p-8 group">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                <NavLink to={service.path} className="group/button">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                </NavLink>
              </Button>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.slice(3).map((service, index) => (
            <div key={index + 3} className="card-professional p-8 group">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                <NavLink to={service.path} className="group/button">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                </NavLink>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="hero" size="lg">
            <NavLink to="/services">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;