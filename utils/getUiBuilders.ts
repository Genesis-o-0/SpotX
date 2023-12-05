import { API_BASE_URL, API_ENDPOINTS } from "./api";
import { ConfigurationData } from "@/types";

export const getUiBuilders = async (): Promise<ConfigurationData> => {
  const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.UiBuilders}`, {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch UI Builders. Status: ${res.status}`);
  }
  return res.json();
};
