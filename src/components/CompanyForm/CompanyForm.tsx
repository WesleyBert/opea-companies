import { useEffect, useState } from "react";
import type Company from "../../types/Company";
import styles from "./CompanyForm.module.scss";

interface CompanyFormProps {
  initialData?: Company;
  onSubmit: (data: Company) => void;
  onCancel: () => void;
  onDelete?: () => void;
}

export const CompanyForm: React.FC<CompanyFormProps> = ({
  initialData = { name: "", cnpj: "", email: "" },
  onSubmit,
  onCancel,
  onDelete,
}) => {
  const [form, setForm] = useState<Company>(initialData);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (name === "cnpj") {
      const onlyNumbers = value.replace(/\D/g, "");
      if (onlyNumbers.length > 14) return;
      setForm({ ...form, cnpj: onlyNumbers });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.cnpj || !form.email) {
      alert("Todos os campos são obrigatórios!");
      return;
    }
    if (form.cnpj.length !== 14) {
      alert("CNPJ deve conter exatamente 14 dígitos.");
      return;
    }
    onSubmit(form);
  }

  useEffect(() => {
    setForm(initialData);
  }, [initialData]);
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>{form.id ? "Editar Empresa" : "Cadastrar Empresa"}</h2>
      <label>
        Nome
        <input name="name" value={form.name} onChange={handleChange} required />
      </label>
      <label>
        CNPJ
        <input
          name="cnpj"
          value={form.cnpj}
          onChange={handleChange}
          required
          maxLength={14}
          inputMode="numeric"
          pattern="\d{14}"
          placeholder="Apenas números"
        />
      </label>
      <label>
        E-mail
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </label>
      <div className={styles.actions}>
        {onDelete && (
          <button type="button" className={styles.delete} onClick={onDelete}>
            🗑️
          </button>
        )}
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit">{form.id ? "Salvar" : "Cadastrar"}</button>
      </div>
    </form>
  );
};
