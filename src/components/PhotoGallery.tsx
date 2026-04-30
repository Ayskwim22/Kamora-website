import React, { useState } from 'react';
import mealImage from '../../assets/meal.png';
import meal2Image from '../../assets/meal 2.png';
import drinksImage from '../../assets/drinks.png';
import burgerImage from '../../assets/burger.png';
import snacksImage from '../../assets/snacks.png';
import soupImage from '../../assets/soup.png';

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
  date: string;
  type: string;
}

interface PhotoGalleryProps {
  title?: string;
  description?: string;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  title = 'Featured Events',
  description = 'Browse our upcoming restaurant events, special nights, and signature celebration spaces through vibrant photo cards.',
}) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: '1',
      url: mealImage,
      title: '',
      category: '',
      date: '',
      type: 'Meals',
    },
    {
      id: '2',
      url: meal2Image,
      title: '',
      category: '',
      date: '',
      type: 'Meals',
    },
    {
      id: '3',
      url: drinksImage,
      title: '',
      category: '',
      date: '',
      type: 'Drinks',
    },
    {
      id: '4',
      url: burgerImage,
      title: '',
      category: '',
      date: '',
      type: 'Burgers',
    },
    {
      id: '5',
      url: snacksImage,
      title: '',
      category: '',
      date: '',
      type: 'Snacks',
    },
    {
      id: '6',
      url: soupImage,
      title: '',
      category: '',
      date: '',
      type: 'Soups',
    },
  ];

  const filteredImages = galleryImages;

  return (
    <section id="featured-events" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#fff2e8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-kamora-red mb-3">Upcoming Events</p>
          <h2 className="text-4xl md:text-5xl font-bold text-kamora-dark mb-4">{title}</h2>
          <p className="text-lg text-kamora-dark/75 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                style={{ animation: `slideInUp 0.55s ease-out ${index * 0.1}s both` }}
                className="group relative overflow-hidden rounded-[2rem] shadow-2xl cursor-pointer bg-white"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="bg-kamora-orange/90 px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] font-semibold">
                      {image.type}
                    </span>
                    <span className="text-sm text-white/90">{image.date}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-snug">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-white/95 p-6 shadow-2xl backdrop-blur-xl border border-white/80">
              <h3 className="text-2xl font-bold text-kamora-dark mb-4">Event Highlights</h3>
              <div className="space-y-4">
                {galleryImages.slice(0, 4).map((event) => (
                  <div key={event.id} className="rounded-3xl bg-kamora-cream/80 p-4">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <p className="font-semibold text-kamora-dark">{event.title}</p>
                      <span className="text-sm text-kamora-red">{event.date}</span>
                    </div>
                    <p className="text-sm text-kamora-dark/70">{event.type} with curated menu pairings and signature decor.</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=800&auto=format&fit=crop"
                alt="Event preview"
                className="w-full h-full object-cover"
              />
              <div className="bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h4 className="text-2xl font-bold">Celebrate Every Moment</h4>
                <p className="text-sm text-white/80 mt-2">Design-forward events with mood lighting, curated tables, and a premium guest experience.</p>
              </div>
            </div>
          </aside>
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-kamora-orange text-white rounded-full p-2 hover:bg-kamora-red transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-sm uppercase tracking-[0.15em] text-kamora-orange mb-1">{selectedImage.type}</p>
                <p className="text-gray-300">{selectedImage.date}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
