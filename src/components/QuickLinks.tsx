import React from 'react';

type TabKey = 'menu' | 'about' | 'contact';

interface LinkCard {
  id: string;
  title: string;
  image: string;
  tab: TabKey;
  color?: string;
}

interface QuickLinksProps {
  title?: string;
  cards?: LinkCard[];
  onNavigate?: (tab: TabKey) => void;
}

const QuickLinks: React.FC<QuickLinksProps> = ({
  title = 'Explore Kamora',
  onNavigate,
  cards = [
    {
      id: 'menu',
      title: 'Menu',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop',
      tab: 'menu',
      color: 'from-orange-400 to-orange-600',
    },
    {
      id: 'about',
      title: 'About',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      tab: 'about',
      color: 'from-red-400 to-red-600',
    },
    {
      id: 'contact',
      title: 'Contact',
      image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da4?w=800&h=600&fit=crop',
      tab: 'contact',
      color: 'from-yellow-400 to-yellow-600',
    },
  ],
}) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-kamora-dark mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Discover what makes Kamora special
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <a
              key={card.id}
              href={`#${card.tab}`}
              onClick={(event) => {
                event.preventDefault();
                onNavigate?.(card.tab);
              }}
              style={{
                animation: `slideInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
              className="group relative h-64 sm:h-56 md:h-64 rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl text-left"
            >
              {/* Background Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/60 group-hover:via-black/20 transition-colors duration-300" />

              {/* Additional Color Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Content */}
              <div className="absolute inset-0 flex items-end p-4 sm:p-6 z-10">
                <div>
                  <h3 className="text-2xl sm:text-xl md:text-2xl font-bold text-white transition-transform duration-300 group-hover:translate-y-0 translate-y-0">
                    {card.title}
                  </h3>
                  <div className="h-1 w-12 bg-kamora-orange rounded mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="bg-kamora-orange rounded-full p-2.5 sm:p-2 md:p-2.5">
                  <svg className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
