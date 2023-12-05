import { API_BASE_URL, API_ENDPOINTS } from "./api";
import { Data } from "@/types";

interface LooseObject {
  [key: string]: any;
}

export const getSectionsdata = async (
  content: string,
  filters?: LooseObject
): Promise<Data> => {
  if (content === "units") content = "user/units";
  if (content === "subregion") content = "regions";



  const res = await fetch(
    content === "regions" && filters
      ? `${API_BASE_URL}/${content}/${filters?.region}`
      : `${API_BASE_URL}/${content}?` + new URLSearchParams(filters),
    {
      next: {
        revalidate: 10,
      },
    }
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch UI Builders. Status: ${res.status}`);
  }
  return res.json();
};
export default getSectionsdata;
