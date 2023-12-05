import { Property } from "@/types";
import UnitsCard from "../_components/UnitsCard";
const UnitsSections: React.FC<{ unitsData: Property[] }> = ({ unitsData }) => {
  return (
    <>
      {unitsData &&
        unitsData.map((unitData, index) => {
          return <UnitsCard unitData={unitData} key={index} />;
        })}
    </>
  );
};

export default UnitsSections;
