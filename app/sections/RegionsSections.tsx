import { SubRegion } from "@/types";
import RegionCard from "../_components/RegionCard";
import { horizontalListContainer } from "./sharedStyles/sharedStyles";

const RegionsSection: React.FC<{ regionData: any; title: string }> = ({
  regionData,
  title,
}) => {
  return (
    <>
      <h3>{title}</h3>
      <div style={horizontalListContainer}>
        {(regionData?.sub_regions || regionData)?.map((region: SubRegion) => (
          <RegionCard region={region} key={region.id} />
        ))}
      </div>
    </>
  );
};

export default RegionsSection;
