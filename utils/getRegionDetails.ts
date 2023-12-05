import { API_BASE_URL, API_ENDPOINTS } from "./api";

const getRegionDetails = async (regionId: number) => {
  const res = await fetch(
    `${API_BASE_URL}${API_ENDPOINTS.REGIONS}/${regionId}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch region details. Status: ${res.status}`);
  }
  return res.json();
};

export default getRegionDetails;
