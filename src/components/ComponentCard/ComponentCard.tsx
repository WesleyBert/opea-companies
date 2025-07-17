import styles from "./CompanyCard.module.scss";
import type Company from "../../types/Company";

interface CompanyCardProps {
  company: Company;
  onClick?: () => void;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({
  company,
  onClick,
}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <span className={styles.icon}>📋</span>
      <div className={styles.infoRow}>
        <span className={styles.name}>{company.name}</span>
        <span className={styles.cnpj}>CPNJ: {company.cnpj}</span>
        <span className={styles.email}>Email: {company.email}</span>
      </div>
    </div>
  );
};
