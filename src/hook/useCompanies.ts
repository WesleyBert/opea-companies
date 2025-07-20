import { useEffect, useState } from "react";
import axios from "axios";
import {
  createCompany,
  deleteCompany,
  getCompanies,
  updateCompany,
} from "../services/api";
import type Company from "../types/Company";
import { toast } from "react-toastify";

export function useCompanies() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  async function fetchCompanies() {
    try {
      setLoading(true);
      const data = await getCompanies();
      if (searchTerm) {
        const lower = searchTerm.toLowerCase();
        setCompanies(
          data.filter(
            (company: Company) =>
              company.name.toLowerCase().includes(lower) ||
              company.cnpj.toLowerCase().includes(lower) ||
              company.email.toLowerCase().includes(lower)
          )
        );
      } else {
        setCompanies(data);
      }
    } catch (err) {
      setError(`Erro ao carregar empresas. ${err}`);
    } finally {
      setLoading(false);
    }
  }

  async function handleCreate(company: Omit<Company, "id">) {
    try {
      await createCompany(company);
      await fetchCompanies();
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response &&
        (error.response.status === 400 || error.response.status === 409)
      ) {
        toast.error("Já existe uma empresa com esse CNPJ ou e-mail!");
      } else {
        toast.error(`Erro ao criar empresa. ${error}`);
      }
    }
  }

  async function handleUpdate(id: string, company: Omit<Company, "id">) {
    await updateCompany(id, company);
    await fetchCompanies();
  }

  async function handleDelete(id: string) {
    await deleteCompany(id);
    await fetchCompanies();
  }

  useEffect(() => {
    fetchCompanies();
  }, [searchTerm]);

  return {
    companies,
    loading,
    error,
    setCompanies,
    searchTerm,
    setSearchTerm,
    handleCreate,
    handleUpdate,
    handleDelete,
  };
}
