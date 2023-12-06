type Image = {
  id?: number;
  type?: string;
  url?: string;
  is_default?: number;
  sizes?: string[];
};

type SubRegion = {
  id: number;
  name: string;
  description: string;
  sub_regions: SubRegion[];
  images: Image[];
  has_subRegions: null | boolean;
};

type Region = {
  id: number;
  name: string;
  description: string;
  sub_regions: SubRegion[];
  images: Image[];
  has_subRegions: null | boolean;
};

type Data = {
  data: any;
  id: number;
  name: string;
  description: string;
  sub_regions: Region[];
  images: Image[];
  has_subRegions: null | boolean;
};

type Response = {
  id: number;
  name: string;
  description: string;
  sub_regions: Region[];
  images: Image[];
  has_subRegions: null | boolean;
};

// UI Builders
export interface Section {
  title: string;
  description: string;
  content: string;
  filters?: {
    order_by?: string;
    order_type?: string;
    region?: number;
    guest?: number;
    // Add other filter properties as needed
  };
}

export interface ConfigurationData {
  data: Section[];
}

// units
interface MainImage {
  id: number;
  unit_id: number;
  is_default: number;
  model: null;
  path: string;
  type: string;
  sizes: string[] | null;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  url: string;
}

interface Image {
  id: number;
  type: string;
  url: string;
  is_default: number;
  sizes: null;
}

interface Owner {
  id: number;
  name: string;
  email: string;
  email_verified_at: null;
  phone: string;
  phone_verified_at: null;
  image: string;
  national_id_image: string;
  national_id: string;
  whatsapp: string;
  type: string;
  notifications_count: number;
  sent_notifications: number;
}

interface Property {
  id: number;
  code: string;
  default_price: number;
  current_price: number;
  title: string;
  description: string;
  longitude: string;
  latitude: string;
  check_in: string;
  check_out: string;
  bed_rooms: number;
  beds: number;
  guests: null;
  bathrooms: number;
  region_id: number;
  max_guests_number: number | null;
  is_families_only: number;
  is_visible: number;
  reservations_count: null;
  near_lower_price: null;
  type: string;
  is_favourite: boolean;
  avg_unit_rate: null;
  nearest_active_ranges: any[];
  main_image: MainImage;
  active_ranges: any[];
  images: Image[];
  owner: Owner;
  rooms: any[];
  rate: number;
  fav: number;
  visits: number;
  region_name: string;
  sub_region_name: string | null;
}
