import axios from "axios";

export async function getValue(): Promise<string> {
  try {
    const response = await axios.get("/api")
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.message
    } else {
      return "Unexpected error occured"
    }
  }
}

