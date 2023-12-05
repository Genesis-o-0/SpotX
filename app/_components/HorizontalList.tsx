import { Container } from "@mui/material";
import RegionCard from "./RegionCard";
import getRegionDetails from "@/utils/getRegionDetails";
import { Data, SubRegion } from "@/types";

const HorizontalList: React.FC<{ data: any }> = async ({ data }) => {
  const regionData: Promise<Data> = getRegionDetails(10);
  const resObj = await regionData;
  console.log(data["North Coast"]?.data);

  return (
    <Container
      style={{
        margin: "auto",
        padding: 0,
        marginTop: "20px",
        width: "90%",
      }}
    >
      <h3 style={{ color: "white", fontSize: "1.5rem", marginBottom: "15px" }}>
        {" "}
        {data["North Coast"]?.data.name} villages
      </h3>

      <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
        {data["North Coast"]?.data?.map((region: SubRegion, index: number) => (
          <RegionCard region={region} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default HorizontalList;
