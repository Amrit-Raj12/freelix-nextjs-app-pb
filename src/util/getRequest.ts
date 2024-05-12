import axios, { AxiosResponse } from "axios"
import { API_BASE_URL } from "@/constants/commonApi"

interface RequestOptions {
  endpoint: string
  headers?: Record<string, string>
}

export async function getRequest<T>({
  endpoint,
  headers,
}: RequestOptions): Promise<T> {
  try {
    const API_URL = API_BASE_URL + endpoint
    const response: AxiosResponse<T> = await axios.get(API_URL, {
      headers: headers || {},
    })
    return response.data
  } catch (error) {
    // Handle error, for example:
    console.error("Error making GET request:", error)
    throw error
  }
}
