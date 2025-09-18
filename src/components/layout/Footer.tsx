import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import logo from '@/assets/logo.jpg'; // <-- client logo

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Rig Moves', path: '/services/rig-moves' },
    { name: 'Heavy Haul & Cranes', path: '/services/heavy-haul' },
    { name: 'Equipment Rental', path: '/services/equipment-rental' },
    { name: 'Jacking & Skidding', path: '/services/jacking-skidding' },
    { name: 'Petroleum Logistics', path: '/services/petroleum-logistics' },
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'News & Updates', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const legal = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Safety Policy', path: '/safety' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-width">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-center mb-6">
              <img
                src={logo}
                alt="Swanberg Kuwait Logo"
                className="h-16 w-auto object-contain mb-2"
              />
              <div className="text-sm text-primary-foreground/80">
                Heavy Equipment & Logistics
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed text-center lg:text-left">
              Leading provider of heavy equipment services, rig moves, and petroleum logistics 
              solutions in Kuwait and the GCC region.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <NavLink 
                    to={link.path} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.path}>
                  <NavLink 
                    to={service.path} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <div>Industrial Area, Shuwaikh</div>
                  <div>Kuwait City, Kuwait</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80">+965 2481 0000</div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80">info@swanbergkuwait.com</div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-3">Business Hours</h4>
              <div className="text-primary-foreground/80 text-sm space-y-1">
                <div>Sunday - Thursday: 7:00 AM - 6:00 PM</div>
                <div>Friday - Saturday: Closed</div>
                <div className="text-accent font-medium">24/7 Emergency Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} Swanberg Kuwait. All rights reserved. Developed my Miqdad +965 41103254
            </div>
            <div className="flex flex-wrap gap-6">
              {legal.map((item) => (
                <NavLink 
                  key={item.path}
                  to={item.path} 
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
