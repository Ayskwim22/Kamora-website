import React, { useState, useEffect } from 'react';
import logoImage from '../../assets/kamora.png';

type TabKey = 'home' | 'menu' | 'about' | 'contact';

interface NavbarProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      
      // Detect scroll direction
      if (currentScrollY > lastScrollY + 10) {
        // Scrolling down
        setIsScrollingDown(true);
      } else if (currentScrollY < lastScrollY - 10) {
        // Scrolling up
        setIsScrollingDown(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems: { id: TabKey; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: TabKey) => {
    onTabChange(tab);
    setIsMobileMenuOpen(false);
  };

  // Determine navbar height based on scroll and hover
  const isNavbarShrunken = isScrollingDown && !isHoveringNav && isScrolled;

  return (
    <nav
      onMouseEnter={() => setIsHoveringNav(true)}
      onMouseLeave={() => setIsHoveringNav(false)}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'shadow-lg' : 'backdrop-blur-sm'
      } ${isNavbarShrunken ? 'h-12' : 'h-16'}`}
              style={{ backgroundColor: '#ff9b3d', borderColor: 'rgba(255,255,255,0.3)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full transition-all duration-300">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              type="button"
              className={`inline-flex items-center font-heading font-bold text-white cursor-pointer transition-all duration-300 ${
                isNavbarShrunken ? 'text-base' : 'text-2xl'
              }`}
              onClick={() => handleNavClick('home')}
            >
              <img
                src={logoImage}
                alt="Kamora logo"
                className={`mr-2 rounded-full object-cover ${isNavbarShrunken ? 'h-8 w-8' : 'h-10 w-10'}`}
              />
              <span>Kamora</span>
            </button>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:block ml-auto">
            <div className="flex items-center space-x-8 h-full">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`font-medium transition-all duration-300 relative group text-white ${
                    isNavbarShrunken ? 'text-xs' : 'text-sm'
                  } ${
                    activeTab === item.id
                      ? 'brightness-90'
                      : 'hover:brightness-90'
                  }`}
                >
                  {item.label}
                  {/* Animated underline */}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                    activeTab === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300"
            >
              <svg
                className={`transition-transform duration-300 ${isNavbarShrunken ? 'h-5 w-5' : 'h-6 w-6'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className={`px-2 space-y-1 sm:px-3 border-t transition-all duration-300 ${
          isNavbarShrunken ? 'py-1' : 'py-2'
        }`}
        style={{ backgroundColor: '#FB8C00', borderColor: 'rgba(255,255,255,0.3)' }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2 text-base font-medium transition-all duration-200 rounded text-white ${
                activeTab === item.id
                  ? 'bg-white/20'
                  : 'hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
