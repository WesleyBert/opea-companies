import { useState } from "react";
import { CompanyForm } from "../../components/CompanyForm/CompanyForm";
import styles from "./Home.module.scss";
import { useCompanies } from "../../hook/useCompanies";
import { Header } from "../../components/Header/Header";
import { CompanyList } from "../../components/CompanyList";
import { Modal } from "../../components/Modal/Modal";
import icon from "../../assets/list.png";
import { IoMdSearch } from "react-icons/io";

import type Company from "../../types/Company";

export const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const {
    companies,
    searchTerm,
    setSearchTerm,
    handleCreate,
    handleDelete,
    handleUpdate,
  } = useCompanies();

  function handleAdd() {
    setSelectedCompany(null);
    setModalOpen(true);
  }

  function handleEdit(company: Company) {
    setSelectedCompany(company);
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
    setSelectedCompany(null);
  }

  async function handleSubmite(data: Company) {
    if (selectedCompany && selectedCompany.id) {
      await handleUpdate(selectedCompany.id, data);
    } else {
      await handleCreate(data);
    }
    handleCloseModal();
  }

  async function handleDeleteCompany() {
    if (selectedCompany && selectedCompany.id) {
      await handleDelete(selectedCompany.id);
      handleCloseModal();
    }
  }

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.contentArea}>
        <section className={styles.mainContainer}>
          <div className={styles.searchWrapper}>
            <div className={styles.searchArea}>
              <input
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar empresa..."
              />
              <span className={styles.searchIcon}>
                <IoMdSearch />
              </span>
            </div>
          </div>
          <button className={styles.addButton} onClick={handleAdd}>
            <img src={icon} alt="" />
            Adicionar Empresa
          </button>
          <CompanyList companies={companies} onSelect={handleEdit} />
        </section>
      </div>
      {modalOpen && (
        <aside className={styles.modalArea}>
          <Modal open={modalOpen} onClose={handleCloseModal}>
            <CompanyForm
              initialData={selectedCompany || { name: "", cnpj: "", email: "" }}
              onSubmit={handleSubmite}
              onCancel={handleCloseModal}
              onDelete={selectedCompany ? handleDeleteCompany : undefined}
            />
          </Modal>
        </aside>
      )}
    </div>
  );
};
