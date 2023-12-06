import { SubRegion } from "@/types";
import RegionCard from "../_components/RegionCard";
import { horizontalListContainer } from "./sharedStyles/sharedStyles";

const RegionSection: React.FC<{ regionData: any; title: string }> = ({
  regionData,
  title,
}) => {
  return (
    <>
      <h3>{title}</h3>
      <div style={horizontalListContainer}>
        {regionData?.map((region: SubRegion, index: number) => (
          // keys ?!
          <RegionCard region={region} key={region.id} />
        ))}
      </div>
    </>
  );
};

export default RegionSection;
