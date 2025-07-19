import styles from "./CompanyCard.module.scss";
import type Company from "../../types/Company";
import icon from "../../assets/list.png";

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
      <img src={icon} className={styles.icon} />
      <div className={styles.infoRow}>
        <span className={styles.name}>{company.name}</span>
        <span className={styles.cnpj}>CPNJ: {company.cnpj}</span>
        <span className={styles.email}>Email: {company.email}</span>
      </div>
    </div>
  );
};
