import { useEffect, useState } from "react";
import type Company from "../../types/Company";
import styles from "./CompanyForm.module.scss";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

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
      toast.info("Todos os campos são obrigatórios!");
      return;
    }
    if (form.cnpj.length !== 14) {
      toast.error("CNPJ deve conter exatamente 14 dígitos.");
      return;
    }
    onSubmit(form);
  }

  useEffect(() => {
    setForm(initialData);
  }, [initialData]);
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Nome
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className={styles.input}
        />
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
          className={styles.input}
        />
      </label>
      <label>
        E-mail
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </label>
      <div className={styles.actions}>
        {onDelete && (
          <button type="button" className={styles.delete} onClick={onDelete}>
            <FaTrashAlt />
          </button>
        )}
        <button type="button" className={styles.cancel} onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className={styles.save}>
          {form.id ? "Salvar" : "Cadastrar"}
        </button>
      </div>
    </form>
  );
};
