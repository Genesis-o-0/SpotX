import { Container } from "@mui/material";
import Units from "./UnitsSections";
import RegionSection from "./RegionsSections";
import { containerStyles } from "./sharedStyles/sharedStyles";

const AppSections: React.FC<{ data: any }> = async ({ data }) => {
  return (
    <Container style={containerStyles}>
      {data["North Coast"] && (
        <RegionSection
          regionData={data["North Coast"]["data"]["sub_regions"]}
          title={"Check our units in North Coast"}
        />
      )}
      {data["Most Popular"] && (
        <RegionSection
          regionData={data["Most Popular"]?.data}
          title={"Most Popular Regions"}
        />
      )}

      {data["Least Price Units"] && (
        <Units
          unitsData={data["Least Price Units"]?.data}
          title={"Least Price Units"}
        />
      )}

      {data["units accepts 5 guests"] && (
        <Units
          unitsData={data["units accepts 5 guests"]?.data}
          title={"Units that accept 5 guests"}
        />
      )}
    </Container>
  );
};

export default AppSections;
