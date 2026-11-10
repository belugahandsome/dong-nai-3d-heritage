export type Language = 'vi' | 'en';

export interface Hotspot3D {
  id: string;
  position: [number, number, number];
  title: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
}

export interface Landmark {
  id: string;
  slug: string;
  name: {
    vi: string;
    en: string;
  };
  subtitle: {
    vi: string;
    en: string;
  };
  category: 'historical' | 'natural';
  location: {
    vi: string;
    en: string;
  };
  established: string;
  coordinates: [number, number]; // [lat, lng]
  heroImage: string;
  gallery: string[];
  shortDesc: {
    vi: string;
    en: string;
  };
  fullDesc: {
    vi: string;
    en: string;
  };
  historicalSignificance: {
    vi: string;
    en: string;
  };
  architectureOrEcosystem: {
    vi: string;
    en: string;
  };
  timeline?: {
    year: string;
    event: {
      vi: string;
      en: string;
    };
  }[];
  visitorInfo: {
    openingHours: string;
    ticketPrice: {
      vi: string;
      en: string;
    };
    bestTimeToVisit: {
      vi: string;
      en: string;
    };
  };
  modelType: 'van-mieu' | 'thanh-co' | 'buu-long' | 'cat-tien' | 'giang-dien';
  hotspots: Hotspot3D[];
  panoUrl?: string;
}

export interface CraftVillage {
  id: string;
  name: {
    vi: string;
    en: string;
  };
  subtitle: {
    vi: string;
    en: string;
  };
  location: {
    vi: string;
    en: string;
  };
  image: string;
  gallery: string[];
  age: string;
  description: {
    vi: string;
    en: string;
  };
  processSteps: {
    step: number;
    title: { vi: string; en: string };
    desc: { vi: string; en: string };
  }[];
  culturalValue: {
    vi: string;
    en: string;
  };
  artisanQuote?: {
    text: { vi: string; en: string };
    author: string;
  };
}

export interface CuisineItem {
  id: string;
  name: {
    vi: string;
    en: string;
  };
  tagline: {
    vi: string;
    en: string;
  };
  region: {
    vi: string;
    en: string;
  };
  image: string;
  ingredients: {
    vi: string[];
    en: string[];
  };
  description: {
    vi: string;
    en: string;
  };
  tasteProfile: {
    vi: string;
    en: string;
  };
  culturalSignificance: {
    vi: string;
    en: string;
  };
}

export interface MapDestination {
  id: string;
  name: {
    vi: string;
    en: string;
  };
  category: 'historical' | 'natural' | 'craft' | 'cuisine';
  coordinates: [number, number]; // [lat, lng]
  image: string;
  address: {
    vi: string;
    en: string;
  };
  distanceFromHcmc: string; // e.g. "30 km"
  shortSummary: {
    vi: string;
    en: string;
  };
  landmarkRefId?: string;
}
