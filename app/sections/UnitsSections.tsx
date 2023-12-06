import { Property } from "@/types";
import UnitsCard from "../_components/UnitsCard";
import { horizontalListContainer } from "./sharedStyles/sharedStyles";
const UnitsSections: React.FC<{ unitsData: Property[]; title: string }> = ({
  unitsData,
  title,
}) => {
  return (
    <>
      <h3>{title}</h3>
      <div style={horizontalListContainer}>
        {unitsData &&
          unitsData.map((unitData, index) => {
            return <UnitsCard unitData={unitData} key={unitData.id} />;
          })}
      </div>
    </>
  );
};

export default UnitsSections;
