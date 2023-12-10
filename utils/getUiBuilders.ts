import { API_BASE_URL, API_ENDPOINTS } from "./api";
import { ConfigurationData } from "@/types";
import Axios from "axios";

export const getUiBuilders = async (): Promise<ConfigurationData> => {
  try {
    const response = await Axios.get(
      `${API_BASE_URL}${API_ENDPOINTS.UiBuilders}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch UI Builders. Error: ${error.message}`);
  }
};



