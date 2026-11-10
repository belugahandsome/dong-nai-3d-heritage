import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { MAP_DESTINATIONS } from '../../data/mapData';
import { MapDestination } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { MapPin, Navigation, Compass, Layers, Sparkles, ExternalLink, Eye, Map as MapIcon, Globe } from 'lucide-react';

interface InteractiveMapSectionProps {
  onOpenLandmark3D?: (landmarkId: string) => void;
}

export const InteractiveMapSection: React.FC<InteractiveMapSectionProps> = ({ onOpenLandmark3D }) => {
  const { language, t } = useLanguage();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});

  const [selectedCategory, setSelectedCategory] = useState<'all' | 'historical' | 'natural' | 'craft' | 'cuisine'>('all');
  const [selectedDestination, setSelectedDestination] = useState<MapDestination>(MAP_DESTINATIONS[0]);
  const [mapViewMode, setMapViewMode] = useState<'osm' | 'google-embed'>('osm');

  // Category color mapping
  const categoryColors = {
    historical: '#B85B38', // Terracotta
    natural: '#10B981',    // Emerald
    craft: '#C5A059',      // Gold / Bronze
    cuisine: '#F59E0B',    // Amber / Honey
  };

  // Initialize Leaflet Map with standard OpenStreetMap (100% Free, NO API KEY REQUIRED)
  useEffect(() => {
    if (mapViewMode !== 'osm') return;
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Dong Nai Center approx: 11.05, 107.10
    const map = L.map(mapContainerRef.current, {
      center: [selectedDestination.coordinates[0], selectedDestination.coordinates[1]],
      zoom: 11,
      zoomControl: false,
    });

    // Standard OpenStreetMap - completely free, open source, no API key required, no watermarks
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    L.control.zoom({ position: 'bottomright' }).addTo(map);
    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [mapViewMode]);

  // Update Markers when filter changes or destination changes
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
      const isSelected = selectedDestination.id === dest.id;

      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: `
          <div style="
            position: relative;
            width: ${isSelected ? '46px' : '36px'};
            height: ${isSelected ? '46px' : '36px'};
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transform: translate(-50%, -50%);
            transition: all 0.3s ease;
          ">
            <div style="
              position: absolute;
              inset: 0;
              background: ${color};
              border: 2px solid ${isSelected ? '#FFFFFF' : '#C5A059'};
              border-radius: 50%;
              box-shadow: 0 4px 14px rgba(0,0,0,0.45);
              ${isSelected ? 'animation: pulse 1.8s infinite;' : ''}
            "></div>
            <div style="
              position: relative;
              z-index: 2;
              width: 10px;
              height: 10px;
              background: #FFFFFF;
              border-radius: 50%;
            "></div>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });

      const marker = L.marker(dest.coordinates, { icon: customIcon }).addTo(map);

      marker.on('click', () => {
        setSelectedDestination(dest);
        map.flyTo(dest.coordinates, 13, { duration: 1.0 });
      });

      markersRef.current[dest.id] = marker;
    });
  }, [selectedCategory, selectedDestination, mapViewMode]);

  // Center on destination when selected from list
  const handleSelectDestination = (dest: MapDestination) => {
    setSelectedDestination(dest);
    if (mapInstanceRef.current && mapViewMode === 'osm') {
      mapInstanceRef.current.flyTo(dest.coordinates, 13, { duration: 1.0 });
    }
  };

  return (
    <section id="map" className="relative py-24 bg-gradient-to-b from-[#081C13] via-[#0B2418] to-[#081C13] text-heritage-ivory overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-heritage-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-heritage-gold/20 border border-heritage-gold/40 text-heritage-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{t('BẢN ĐỒ DU LỊCH & DI SẢN ĐỒNG NAI', 'DONG NAI HERITAGE & TOURISM MAP')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-heritage-ivory mb-4 tracking-tight">
            {t('Hành Trình Di Sản Qua Từng Tọa Độ', 'Heritage Journey Across Coordinates')}
          </h2>
          <p className="text-sm md:text-base text-heritage-ivory/70 font-light leading-relaxed">
            {t(
              'Bản đồ trực tiếp hiển thị vị trí chuẩn xác của các di tích lịch sử hơn 325 năm, thắng cảnh thiên nhiên kỳ vĩ, làng gốm cổ truyền và ẩm thực trứ danh Đồng Nai.',
              'Interactive live map pinpointing historic relics, natural landscapes, craft villages, and gastronomic treasures of Dong Nai.'
            )}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
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
              const isSelected = selectedDestination.id === dest.id;
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
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${dest.coordinates[0]},${dest.coordinates[1]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 hover:text-white transition-colors truncate max-w-[170px]"
                        title={t('Mở vị trí trên Google Maps', 'Open location on Google Maps')}
                      >
                        <MapPin className="w-3.5 h-3.5 text-heritage-gold flex-shrink-0" />
                        <span className="truncate">
                          {language === 'vi' ? dest.address.vi : dest.address.en}
                        </span>
                      </a>

                      <div className="flex items-center gap-2">
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${dest.coordinates[0]},${dest.coordinates[1]}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white text-[11px] transition-all font-medium"
                          title={t('Chỉ đường Google Maps', 'Google Maps Directions')}
                        >
                          <span>{t('Chỉ đường', 'Directions')}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>

                        {dest.landmarkRefId && onOpenLandmark3D && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenLandmark3D(dest.landmarkRefId!);
                            }}
                            className="flex items-center gap-1 font-semibold text-heritage-gold hover:text-white transition-colors text-[11px]"
                          >
                            <span>{t('Xem 3D', '3D')}</span>
                            <Eye className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Map Container */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-heritage-gold/40 shadow-2xl relative min-h-[500px] lg:min-h-[640px] flex flex-col bg-[#05140D]">
            {/* Map Mode Switcher Bar */}
            <div className="flex items-center justify-between px-5 py-3 bg-[#0A261A] border-b border-heritage-gold/30 z-20">
              <div className="flex items-center gap-2 text-xs font-semibold text-heritage-gold">
                <MapPin className="w-4 h-4 text-heritage-gold" />
                <span>
                  {language === 'vi' ? selectedDestination.name.vi : selectedDestination.name.en}
                </span>
                <span className="text-[11px] text-heritage-ivory/60 hidden sm:inline">
                  ({selectedDestination.coordinates[0].toFixed(4)}, {selectedDestination.coordinates[1].toFixed(4)})
                </span>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => setMapViewMode('osm')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    mapViewMode === 'osm'
                      ? 'bg-heritage-gold text-heritage-emerald-dark font-bold shadow-sm'
                      : 'text-heritage-ivory/70 hover:text-white'
                  }`}
                  title={t('Bản đồ OpenStreetMap mở rộng', 'OpenStreetMap Interactive')}
                >
                  <MapIcon className="w-3.5 h-3.5" />
                  <span>{t('Bản Đồ Mở', 'OSM Map')}</span>
                </button>

                <button
                  onClick={() => setMapViewMode('google-embed')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    mapViewMode === 'google-embed'
                      ? 'bg-heritage-gold text-heritage-emerald-dark font-bold shadow-sm'
                      : 'text-heritage-ivory/70 hover:text-white'
                  }`}
                  title={t('Bản đồ Vệ tinh & Đường đi Google Maps', 'Live Google Maps Embed')}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{t('Google Maps', 'Google Maps')}</span>
                </button>
              </div>
            </div>

            {/* View 1: Standard OpenStreetMap */}
            {mapViewMode === 'osm' && (
              <div className="relative flex-1 w-full h-full min-h-[460px] lg:min-h-[580px]">
                <div ref={mapContainerRef} className="w-full h-full min-h-[460px] lg:min-h-[580px] z-10" />

                {/* Floating Quick Card for Active Destination */}
                <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-sm z-20 p-4 rounded-2xl bg-heritage-emerald-dark/95 border border-heritage-gold/60 backdrop-blur-md shadow-2xl text-heritage-ivory">
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
                  <div className="flex items-center justify-between gap-2 text-xs text-heritage-ivory/60 border-t border-white/10 pt-2.5">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${selectedDestination.coordinates[0]},${selectedDestination.coordinates[1]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-[11px] transition-all"
                    >
                      <MapPin className="w-3.5 h-3.5 text-heritage-gold" />
                      <span>{t('Chỉ đường Google Maps', 'Google Maps')}</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>

                    {selectedDestination.landmarkRefId && onOpenLandmark3D && (
                      <button
                        onClick={() => onOpenLandmark3D(selectedDestination.landmarkRefId!)}
                        className="px-3 py-1.5 rounded-lg bg-heritage-gold text-heritage-emerald-dark font-bold text-xs hover:bg-yellow-400 transition-colors shadow-sm"
                      >
                        {t('Xem 3D', '3D Model')} →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* View 2: Live Embedded Google Maps (Zero API Key needed) */}
            {mapViewMode === 'google-embed' && (
              <div className="relative flex-1 w-full h-full min-h-[460px] lg:min-h-[580px] bg-slate-900">
                <iframe
                  title="Google Maps Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '580px' }}
                  src={`https://maps.google.com/maps?q=${selectedDestination.coordinates[0]},${selectedDestination.coordinates[1]}&hl=${language === 'vi' ? 'vi' : 'en'}&z=14&output=embed`}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Floating pill over Google Maps */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-20 flex items-center gap-3 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-heritage-gold/50 shadow-xl">
                  <img
                    src={selectedDestination.image}
                    alt={selectedDestination.name.vi}
                    className="w-12 h-12 rounded-lg object-cover border border-heritage-gold/40 flex-shrink-0"
                  />
                  <div>
                    <h5 className="text-xs font-bold text-heritage-gold">
                      {language === 'vi' ? selectedDestination.name.vi : selectedDestination.name.en}
                    </h5>
                    <p className="text-[11px] text-white/70">
                      {language === 'vi' ? selectedDestination.address.vi : selectedDestination.address.en}
                    </p>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${selectedDestination.coordinates[0]},${selectedDestination.coordinates[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto px-2.5 py-1 rounded bg-heritage-gold text-heritage-emerald-dark text-xs font-bold hover:bg-yellow-400 transition-colors whitespace-nowrap"
                  >
                    {t('Mở rộng', 'Open')} ↗
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
