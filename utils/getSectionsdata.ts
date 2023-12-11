import { API_BASE_URL, API_ENDPOINTS } from "./api";
import { Data } from "@/types";
interface LooseObject {
  [key: string]: any;
}

export const getSectionsdata = async (
  content: string,
  filters?: LooseObject
): Promise<Data | undefined> => {
  const contentValues = ["regions", "units", "subregion"];
  // filter all UIBuilders sections that need to make API call
  if (contentValues.includes(content)) {
    const url = getUrl(content, filters);
    try {
      // Nextjs documentations recommend "fetch" for fetching data in server-side
      // Axios causes some errors in server-side
      const response = await fetch(url);
      return response.json();
    } catch (error: any) {
      throw new Error(`Failed to fetch Section. Error: ${error.message}`);
    }
  }
};
export default getSectionsdata;

function getUrl(content: string, filters?: LooseObject): string {
  switch (content) {
    case "units":
      content = API_ENDPOINTS.UNITS;
      break;
    case "subregion":
      content = API_ENDPOINTS.REGIONS;
      break;
  }

  let url = `${API_BASE_URL}/${content}`;

  if (filters) {
    switch (content) {
      case "regions":
        url += `/${filters.region}`;
        break;
      default:
        url += `?${new URLSearchParams(filters)}`;
        break;
    }
  }

  return url;
}
