import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { MAP_DESTINATIONS } from '../../data/mapData';
import { MapDestination } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { MapPin, Navigation, Compass, Layers, Sparkles, ExternalLink } from 'lucide-react';

interface InteractiveMapSectionProps {
  onOpenLandmark3D?: (landmarkId: string) => void;
}

export const InteractiveMapSection: React.FC<InteractiveMapSectionProps> = ({ onOpenLandmark3D }) => {
  const { language, t } = useLanguage();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});

  const [selectedCategory, setSelectedCategory] = useState<'all' | 'historical' | 'natural' | 'craft' | 'cuisine'>('all');
  const [selectedDestination, setSelectedDestination] = useState<MapDestination | null>(MAP_DESTINATIONS[0]);

  // Category color mapping
  const categoryColors = {
    historical: '#B85B38', // Terracotta
    natural: '#1B4332',    // Deep Forest Emerald
    craft: '#C5A059',      // Gold / Bronze
    cuisine: '#DC2626',    // Crimson Ruby
  };

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Dong Nai Center approx: 11.05, 107.10
    const map = L.map(mapContainerRef.current, {
      center: [11.08, 107.05],
      zoom: 10,
      zoomControl: false,
    });

    // Custom dark/antique map tiles matching museum aesthetic (CartoDB Dark or Stadia)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 19,
      subdomains: 'abcd',
    }).addTo(map);

    // Add zoom control at bottom right
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Markers when filter changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear previous markers
    Object.values(markersRef.current).forEach((marker) => marker.remove());
    markersRef.current = {};

    const filtered = selectedCategory === 'all'
      ? MAP_DESTINATIONS
      : MAP_DESTINATIONS.filter((d) => d.category === selectedCategory);

    filtered.forEach((dest) => {
      const color = categoryColors[dest.category];
      const isSelected = selectedDestination?.id === dest.id;

      // Custom HTML Marker matching museum styling
      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: `
          <div style="
            position: relative;
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transform: translate(-50%, -50%);
          ">
            <div style="
              position: absolute;
              width: ${isSelected ? '44px' : '34px'};
              height: ${isSelected ? '44px' : '34px'};
              background: ${color};
              border: 2px solid #C5A059;
              border-radius: 50%;
              box-shadow: 0 4px 14px rgba(0,0,0,0.5);
              transition: all 0.3s ease;
            "></div>
            <div style="
              position: relative;
              z-index: 2;
              width: 10px;
              height: 10px;
              background: #FAF7F2;
              border-radius: 50%;
            "></div>
          </div>
        `,
        iconSize: [38, 38],
        iconAnchor: [19, 19],
      });

      const marker = L.marker(dest.coordinates, { icon: customIcon }).addTo(map);

      marker.on('click', () => {
        setSelectedDestination(dest);
        map.flyTo(dest.coordinates, 13, { duration: 1.2 });
      });

      markersRef.current[dest.id] = marker;
    });
  }, [selectedCategory, selectedDestination]);

  // Center on destination when selected from list
  const handleSelectDestination = (dest: MapDestination) => {
    setSelectedDestination(dest);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(dest.coordinates, 13, { duration: 1.2 });
    }
  };

  return (
    <section id="map" className="relative py-24 bg-gradient-to-b from-[#081C13] via-[#0B2418] to-[#081C13] text-heritage-ivory overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-heritage-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-heritage-gold/20 border border-heritage-gold/40 text-heritage-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{t('BẢN ĐỒ DU LỊCH TƯƠNG TÁC ĐỒNG NAI', 'INTERACTIVE DONG NAI TOURISM MAP')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-heritage-ivory mb-4 tracking-tight">
            {t('Hành Trình Di Sản Qua Từng Tọa Độ', 'Heritage Journey Across Coordinates')}
          </h2>
          <p className="text-sm md:text-base text-heritage-ivory/70 font-light leading-relaxed">
            {t(
              'Khám phá mạng lưới các di tích lịch sử ngàn năm, danh lam thắng cảnh kỳ vĩ, làng nghề gốm cổ truyền và thiên đường ẩm thực sông nước Đồng Nai.',
              'Discover the geographic network of millennial historic relics, majestic landscapes, ancient ceramic craft villages, and Dong Nai’s riverine gastronomic paradise.'
            )}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: { vi: 'Tất Cả Điểm Đến', en: 'All Destinations' }, icon: Layers },
              { id: 'historical', label: { vi: 'Di Tích Lịch Sử', en: 'Historical Heritage' }, icon: MapPin },
              { id: 'natural', label: { vi: 'Danh Thắng Thiên Nhiên', en: 'Natural Landmarks' }, icon: Sparkles },
              { id: 'craft', label: { vi: 'Làng Nghề Truyền Thống', en: 'Craft Villages' }, icon: Navigation },
              { id: 'cuisine', label: { vi: 'Văn Hóa Ẩm Thực', en: 'Culinary Highlights' }, icon: Sparkles },
            ].map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border ${
                    selectedCategory === cat.id
                      ? 'bg-heritage-gold text-heritage-emerald-dark border-white shadow-glow-gold'
                      : 'bg-white/5 text-heritage-ivory/80 border-heritage-gold/30 hover:border-heritage-gold hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{language === 'vi' ? cat.label.vi : cat.label.en}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Map Layout Grid: List on Left, Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Destination Sidebar (Cards) */}
          <div className="lg:col-span-5 flex flex-col gap-3 max-h-[640px] overflow-y-auto pr-2 custom-scrollbar">
            {MAP_DESTINATIONS.filter((d) => selectedCategory === 'all' || d.category === selectedCategory).map((dest) => {
              const isSelected = selectedDestination?.id === dest.id;
              return (
                <div
                  key={dest.id}
                  onClick={() => handleSelectDestination(dest)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-4 ${
                    isSelected
                      ? 'bg-heritage-emerald/90 border-heritage-gold shadow-glow-gold'
                      : 'bg-white/5 border-white/10 hover:border-heritage-gold/50 hover:bg-white/10'
                  }`}
                >
                  <img
                    src={dest.image}
                    alt={dest.name.vi}
                    className="w-24 h-24 rounded-xl object-cover border border-heritage-gold/30 flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-heritage-gold">
                          {dest.category === 'historical' && t('Di Tích', 'Historical')}
                          {dest.category === 'natural' && t('Danh Thắng', 'Natural')}
                          {dest.category === 'craft' && t('Làng Nghề', 'Craft')}
                          {dest.category === 'cuisine' && t('Ẩm Thực', 'Cuisine')}
                        </span>
                        <span className="text-[10px] text-heritage-ivory/50">
                          {dest.distanceFromHcmc}
                        </span>
                      </div>
                      <h4 className="text-base font-serif font-bold text-heritage-ivory leading-tight">
                        {language === 'vi' ? dest.name.vi : dest.name.en}
                      </h4>
                      <p className="text-xs text-heritage-ivory/70 line-clamp-2 mt-1 font-light">
                        {language === 'vi' ? dest.shortSummary.vi : dest.shortSummary.en}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10 text-[11px] text-heritage-gold">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate max-w-[140px]">
                          {language === 'vi' ? dest.address.vi : dest.address.en}
                        </span>
                      </span>

                      {dest.landmarkRefId && onOpenLandmark3D && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenLandmark3D(dest.landmarkRefId!);
                          }}
                          className="flex items-center gap-1 font-semibold text-heritage-gold hover:text-white transition-colors"
                        >
                          <span>{t('Xem 3D', 'View 3D')}</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Leaflet Map Container */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-heritage-gold/40 shadow-2xl relative min-h-[500px] lg:min-h-[640px]">
            <div ref={mapContainerRef} className="w-full h-full min-h-[500px] lg:min-h-[640px] z-10" />

            {/* Floating Quick Card for Active Destination */}
            {selectedDestination && (
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-sm z-20 p-4 rounded-2xl bg-heritage-emerald-dark/95 border border-heritage-gold/60 backdrop-blur-md shadow-2xl text-heritage-ivory animate-fadeIn">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-base font-serif font-bold text-heritage-gold leading-tight">
                    {language === 'vi' ? selectedDestination.name.vi : selectedDestination.name.en}
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-heritage-gold/20 text-heritage-gold-light border border-heritage-gold/30">
                    {selectedDestination.category}
                  </span>
                </div>
                <p className="text-xs text-heritage-ivory/80 leading-relaxed mb-3">
                  {language === 'vi' ? selectedDestination.shortSummary.vi : selectedDestination.shortSummary.en}
                </p>
                <div className="flex items-center justify-between text-xs text-heritage-ivory/60 border-t border-white/10 pt-2">
                  <span className="flex items-center gap-1">
                    <Navigation className="w-3.5 h-3.5 text-heritage-gold" />
                    {selectedDestination.distanceFromHcmc}
                  </span>
                  {selectedDestination.landmarkRefId && onOpenLandmark3D && (
                    <button
                      onClick={() => onOpenLandmark3D(selectedDestination.landmarkRefId!)}
                      className="px-3 py-1 rounded-lg bg-heritage-gold text-heritage-emerald-dark font-bold text-xs hover:bg-yellow-400 transition-colors shadow-sm"
                    >
                      {t('Mở mô hình 3D', 'Open 3D Model')} →
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
