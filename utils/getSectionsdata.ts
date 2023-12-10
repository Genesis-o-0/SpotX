import { API_BASE_URL } from "./api";
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
      // Axios isn't good at server side rendering
      const res = await fetch(url);
      return res.json();
    } catch (error: any) {
      throw new Error(`Failed to fetch Section. Error: ${error.message}`);
    }
  } else {
    return;
  }
};
export default getSectionsdata;

// function to handle the UIBuilder responses and rebuild urls from them
function getUrl(content: string, filters?: LooseObject) {
  // constructing urls
  if (content === "units") content = "user/units";
  if (content === "subregion") content = "regions";

  let url = `${API_BASE_URL}/${content}`;

  if (content === "regions" && filters) {
    url += `/${filters.region}`;
  } else if (filters) {
    url += `?${new URLSearchParams(filters)}`;
  }

  return url;
}
