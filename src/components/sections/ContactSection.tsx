import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="heading-lg text-primary-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-large text-primary-foreground/90 mb-8 leading-relaxed">
              Get in touch with our expert team for a consultation and quote. 
              We're here to support your heavy equipment and logistics needs 24/7.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-primary-foreground font-semibold">+965 2481 0000</div>
                  <div className="text-primary-foreground/80 text-sm">24/7 Emergency Support</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-primary-foreground font-semibold">info@swanbergkuwait.com</div>
                  <div className="text-primary-foreground/80 text-sm">General Inquiries</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-primary-foreground font-semibold">Shuwaikh Industrial Area</div>
                  <div className="text-primary-foreground/80 text-sm">Kuwait City, Kuwait</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="lg">
                <NavLink to="/contact" className="group">
                  Get a Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </NavLink>
              </Button>
              
              <Button asChild variant="secondary" size="lg" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary">
                <a href="tel:+96524810000" className="group">
                  Call Now
                  <Phone className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-primary-foreground/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-accent mb-2">25+</div>
              <div className="text-primary-foreground/90">Years Experience</div>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-primary-foreground/90">Projects Done</div>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-accent mb-2">150+</div>
              <div className="text-primary-foreground/90">Fleet Vehicles</div>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-primary-foreground/90">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;