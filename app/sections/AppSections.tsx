import { Container } from "@mui/material";
import Units from "./UnitsSections";
import RegionSection from "./RegionsSections";

const AppSections: React.FC<{ data: any }> = async ({ data }) => {
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

      {data["units accepts 5 guests"] && (
        <>
          <h3
            style={{ color: "white", fontSize: "1.5rem", marginBottom: "15px" }}
          >
            Units that accept 5 guests
          </h3>
          <Units unitsData={data["units accepts 5 guests"]?.data} />
        </>
      )}
    </Container>
  );
};

export default AppSections;
