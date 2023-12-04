type Image = {
  id: number;
  image: string;
  url: string;
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
