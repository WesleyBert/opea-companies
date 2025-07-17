import type Company from "../../types/Company";
import { CompanyCard } from "../ComponentCard/ComponentCard";

interface ComponentListProps {
  companies: Company[];
  onSelect: (company: Company) => void;
}

export const CompanyList: React.FC<ComponentListProps> = ({
  companies,
  onSelect,
}) => {
  if (companies.length === 0) {
    return <p>Nenhuma empresa cadastrada.</p>;
  }
  return (
    <div>
      {companies.map((company) => (
        <CompanyCard
          key={company.id}
          company={company}
          onClick={() => onSelect(company)}
        />
      ))}
    </div>
  );
};
