import React, { useState, useEffect } from 'react';
import { CartProvider } from './contexts/CartContext';
import { CartUiProvider } from './contexts/CartUiContext';
import Navbar from './components/Navbar';
import EnhancedHero from './components/EnhancedHero';
import ScrollTextMarquee from './components/ScrollTextMarquee';
import PhotoGallery from './components/PhotoGallery';
import QuickLinks from './components/QuickLinks';
import Menu from './sections/Menu';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import FloatingCartButton from './components/FloatingCartButton';
import FloatingCartModal from './components/FloatingCartModal';
import './styles/index.css';

type TabKey = 'home' | 'menu' | 'about' | 'contact';

const hashToTab = (hash: string): TabKey => {
  if (!hash || hash === '#') return 'home';
  const normalized = hash.replace('#', '').toLowerCase();
  if (normalized === 'home') return 'home';
  if (normalized === 'menu' || normalized.startsWith('category-')) return 'menu';
  if (normalized === 'about') return 'about';
  if (normalized === 'contact') return 'contact';
  return 'home';
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>(() => {
    if (typeof window === 'undefined') return 'home';
    return hashToTab(window.location.hash);
  });

  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(hashToTab(window.location.hash));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
    const targetHash = tab === 'home' ? '' : `#${tab}`;
    window.history.pushState(null, '', targetHash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <CartUiProvider>
        <div className="min-h-screen pt-16">
          <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
          {activeTab === 'home' && <EnhancedHero onNavigate={handleTabChange} />}
          {activeTab === 'home' && <ScrollTextMarquee />}
          {activeTab === 'home' && (
            <PhotoGallery
              title="Restaurant Design Gallery"
              description="Discover our dining rooms, lounge spaces, bar details, and warm interior design with subtle animated transitions."
            />
          )}
          {activeTab === 'home' && <QuickLinks onNavigate={handleTabChange} />}
          {activeTab === 'menu' && <Menu />}
          {activeTab === 'about' && <About />}
          {activeTab === 'contact' && <Contact />}
          <Footer onNavigate={handleTabChange} />
          <FloatingCartButton />
          <FloatingCartModal />
        </div>
      </CartUiProvider>
    </CartProvider>
  );
};

export default App;
