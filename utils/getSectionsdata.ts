import { API_BASE_URL, API_ENDPOINTS } from "./api";
import { Data } from "@/types";

export const getSectionsdata = async (
  content: string,
  filters?: {}
): Promise<Data> => {
  if (content === "units") content = "user/units";
  if (content === "subregion") content = "regions";
  const res = await fetch(
    `${API_BASE_URL}/${content}?` + new URLSearchParams(filters),
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch UI Builders. Status: ${res.status}`);
  }
  return res.json();
};
export default getSectionsdata;
