import { Container } from "@mui/material";
import Units from "./UnitsSections";
import RegionSection from "./RegionSection";

const AppSections: React.FC<{ data: any }> = async ({ data }) => {
  console.log(data["Least Price Units"]?.data);

  return (
    <Container
      style={{
        margin: "auto",
        padding: 0,
        marginTop: "20px",
        width: "90%",
      }}
    >
      {data["North Coast"] && (
        <RegionSection
          northCoastData={data["North Coast"]["data"]["sub_regions"]}
          title={"Check our units in North Coast"}
        />
      )}
      {data["Most Popular"] && (
        <RegionSection
          northCoastData={data["Most Popular"]?.data}
          title={"Most Popular Regions"}
        />
      )}

      {data["Least Price Units"] && (
        <>
          <h3
            style={{ color: "white", fontSize: "1.5rem", marginBottom: "15px" }}
          >
            Least Price Units
          </h3>
          <Units unitsData={data["Least Price Units"]?.data} />
        </>
      )}
    </Container>
  );
};

export default AppSections;
