import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpg'; // <-- client logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'Rig Moves', path: '/services/rig-moves' },
    { name: 'Heavy Haul & Cranes', path: '/services/heavy-haul' },
    { name: 'Equipment Rental', path: '/services/equipment-rental' },
    { name: 'Jacking & Skidding', path: '/services/jacking-skidding' },
    { name: 'Petroleum Logistics', path: '/services/petroleum-logistics' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-width">
        <div className="flex items-center justify-between h-20">
          {/* Logo with tagline */}
          <NavLink to="/" className="flex flex-col items-center space-y-1">
            <img
              src={logo}
              alt="Swanberg Kuwait Logo"
              className="h-14 w-auto object-contain"
            />
            <div className="text-sm text-muted-foreground">Heavy Equipment & Logistics</div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                }`
              }
            >
              About Us
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-xl shadow-lg py-2 z-50">
                  {services.map((service) => (
                    <NavLink
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 text-sm text-card-foreground hover:bg-accent-muted transition-colors"
                    >
                      {service.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                }`
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                }`
              }
            >
              News
            </NavLink>

            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                }`
              }
            >
              Careers
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild variant="default" size="lg">
              <NavLink to="/contact">Get a Quote</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <NavLink to="/" className="font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/about" className="font-medium" onClick={() => setIsMenuOpen(false)}>
                About Us
              </NavLink>
              <div className="font-medium">Services</div>
              {services.map((service) => (
                <NavLink
                  key={service.path}
                  to={service.path}
                  className="ml-4 text-muted-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.name}
                </NavLink>
              ))}
              <NavLink to="/projects" className="font-medium" onClick={() => setIsMenuOpen(false)}>
                Projects
              </NavLink>
              <NavLink to="/blog" className="font-medium" onClick={() => setIsMenuOpen(false)}>
                News
              </NavLink>
              <NavLink to="/careers" className="font-medium" onClick={() => setIsMenuOpen(false)}>
                Careers
              </NavLink>
              <NavLink to="/contact" className="font-medium" onClick={() => setIsMenuOpen(false)}>
                Contact
              </NavLink>
              <div className="pt-4">
                <Button asChild className="w-full" variant="default">
                  <NavLink to="/contact">Get a Quote</NavLink>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
