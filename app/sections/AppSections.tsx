import React from "react";
import RegionsSection from "./RegionsSections";
import UnitsSections from "./UnitsSections";
import { Container } from "@mui/material";
import { containerStyles } from "./sharedStyles/sharedStyles";

const AppSections: React.FC<{ sectionData: any }> = async ({ sectionData }) => {
  return (
    <>
      {Object.keys(sectionData).map((sectionkey) => (
        <Container style={containerStyles} key={crypto.randomUUID()}>
          {(sectionkey === "regions" || sectionkey === "subregion") && (
            <RegionsSection
              regionData={sectionData[sectionkey]?.data}
              title={sectionData?.title}
              key={crypto.randomUUID()}
            />
          )}

          {sectionkey === "units" && (
            <UnitsSections
              unitsData={sectionData[sectionkey]?.data}
              title={sectionData?.title}
              key={crypto.randomUUID()}
            />
          )}
        </Container>
      ))}
    </>
  );
};

export default AppSections;
