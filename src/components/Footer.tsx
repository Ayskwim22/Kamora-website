import React from 'react';
import facebookIcon from '../../assets/facebook.png';
import instaIcon from '../../assets/insta.png';
import tiktokIcon from '../../assets/tiktok.png';

type TabKey = 'home' | 'menu' | 'about' | 'contact';

interface FooterProps {
  onNavigate: (tab: TabKey) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLocationClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onNavigate('contact');
  };

  return (
    <footer className="text-white" style={{ backgroundColor: '#8B4513' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-3xl font-bold text-white mb-4">Kamora</h3>
            <p className="text-white/90 mb-4 text-sm">
              Creating memorable dining experiences with quality food and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61573337227317&rdid=QUVyv1mVajnPPUUU&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1C4ayqFM75%2F#" target="_blank" rel="noreferrer" className="text-white/90 hover:text-kamora-orange transition-colors transform hover:scale-110">
                <img src={facebookIcon} alt="Facebook" className="w-6 h-6 object-contain" />
              </a>
              <a href="https://www.tiktok.com/@goldensunfield?_r=1&_t=ZS-95Q6eBgXIVI" target="_blank" rel="noreferrer" className="text-white/90 hover:text-kamora-orange transition-colors transform hover:scale-110">
                <img src={tiktokIcon} alt="TikTok" className="w-6 h-6 object-contain" />
              </a>
              <a href="https://www.instagram.com/kamora_official?igsh=NWN6ejJxbjRqdHMx" target="_blank" rel="noreferrer" className="text-white/90 hover:text-kamora-orange transition-colors transform hover:scale-110">
                <img src={instaIcon} alt="Instagram" className="w-6 h-6 object-contain" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="text-white/90 hover:text-kamora-orange transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="text-white/90 hover:text-kamora-orange transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => onNavigate('menu')}
                  className="text-white/90 hover:text-kamora-orange transition-colors text-sm"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="text-white/90 hover:text-kamora-orange transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-2 text-white/90 text-sm">
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 text-kamora-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>goldensunfield@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 text-kamora-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+63 966 544 3985</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mr-2 text-kamora-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>4031 Gen T. De Leon, Valenzuela City</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Business Hours</h4>
            <ul className="space-y-2 text-white/90 text-sm">
              <li className="font-semibold">Monday to Saturday</li>
              <li>8:00 AM - 8:00 PM</li>
            </ul>
          </div>

          {/* Mini Map */}
          <div
            onClick={handleLocationClick}
            className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleLocationClick()}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Location</h4>
            <div className="rounded-lg overflow-hidden shadow-lg border-2 border-kamora-orange h-40 pointer-events-none">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.8889888888887!2d121.27478!3d14.757083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3398d6a5a5a5a5a5%3A0x5a5a5a5a5a5a5a5a!2s4031%20Gen%20T.%20De%20Leon%2C%20Valenzuela%20City%2C%20Philippines!5e0!3m2!1sen!2sph!4v1234567890"
                title="Kamora Location"
                style={{ border: 0, pointerEvents: 'none' }}
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Copyright */}
        <div className="pt-8 text-center text-white/80">
          <p>&copy; {currentYear} Kamora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
