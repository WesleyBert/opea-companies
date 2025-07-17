import axios from "axios";
import type Company from "../types/Company";

export const api = axios.create({
  baseURL: "https://piysgkm5oc.execute-api.sa-east-1.amazonaws.com/dev/",
});

export async function getCompanies(name?: string) {
  const response = await api.get("/companies", {
    params: name ? { name } : {},
  });
  if (Array.isArray(response.data)) return response.data;
  if (response.data && response.data.companies) return response.data.companies;
  return [];
}

export async function getCompany(id: string) {
  const response = await api.get(`/companies/${id}`);
  return response.data;
}

export async function createCompany(company: Omit<Company, "id">) {
  const response = await api.post("/companies", company);
  return response.data;
}

export async function updateCompany(id: string, company: Omit<Company, "id">) {
  const response = await api.put(`/companies/${id}`, company);
  return response.data;
}

export async function deleteCompany(id: string) {
  const response = await api.delete(`/companies/${id}`);
  return response.data;
}
