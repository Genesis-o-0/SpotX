import { SubRegion } from "@/types";
import RegionCard from "../_components/RegionCard";

const RegionSection: React.FC<{ northCoastData: any; title: string }> = ({
  northCoastData,
  title,
}) => {

  return (
    <>
      <h3 style={{ color: "white", fontSize: "1.5rem", marginBottom: "15px" }}>
        {" "}
        {title}
      </h3>

      <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
        {northCoastData?.map((region: SubRegion, index: number) => (
          <RegionCard region={region} key={index} />
        ))}
      </div>
    </>
  );
};

export default RegionSection;
