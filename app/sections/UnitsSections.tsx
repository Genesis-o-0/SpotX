import { Property } from "@/types";
import UnitsCard from "../_components/UnitsCard";
const UnitsSections: React.FC<{ unitsData: Property[] }> = ({ unitsData }) => {
  return (
    <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
      {unitsData &&
        unitsData.map((unitData, index) => {
          return <UnitsCard unitData={unitData} key={index} />;
        })}
    </div>
  );
};

export default UnitsSections;
