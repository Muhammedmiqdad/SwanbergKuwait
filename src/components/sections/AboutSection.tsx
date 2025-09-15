import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Shield, Award, Users, Globe, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Zero-incident safety record with comprehensive training and protocols'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'ISO certified with multiple industry awards and certifications'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '200+ skilled professionals with decades of combined experience'
    },
    {
      icon: Globe,
      title: 'Regional Leader',
      description: 'Serving Kuwait and the broader GCC market with excellence'
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                About Swanberg Kuwait
              </span>
            </div>
            
            <h2 className="heading-lg text-foreground mb-6">
              25+ Years of Excellence in 
              <span className="text-accent block">Heavy Equipment Services</span>
            </h2>
            
            <p className="text-large text-muted-foreground mb-8 leading-relaxed">
              Since 1998, Swanberg Kuwait has been the trusted partner for Kuwait's oil & gas industry, 
              providing specialized heavy equipment services, rig moves, and petroleum logistics solutions.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our commitment to safety, innovation, and operational excellence has made us the preferred 
              choice for major energy companies across the region. With a fleet of over 150 specialized 
              vehicles and equipment, we handle the most complex industrial challenges.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild variant="default" size="lg">
              <NavLink to="/about" className="group">
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </Button>
          </div>

          {/* Stats & Visual */}
          <div className="space-y-8">
            {/* Key Stats */}
            <div className="card-professional p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Successful Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Fleet Vehicles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="card-professional p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Certifications & Standards</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full" />
                  <span className="text-muted-foreground">ISO 9001:2015 Quality Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full" />
                  <span className="text-muted-foreground">ISO 45001:2018 Occupational Health & Safety</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full" />
                  <span className="text-muted-foreground">API Spec Q1 Quality Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full" />
                  <span className="text-muted-foreground">Kuwait EPA Environmental Compliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;