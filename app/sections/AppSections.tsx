import { Container } from "@mui/material";
import RegionsSection from "./RegionsSections";
import { containerStyles } from "./sharedStyles/sharedStyles";
import UnitsSections from "./UnitsSections";
import React from "react";

const AppSections: React.FC<{ sectionData: any }> = async ({ sectionData }) => {
  return (
    <>
      {Object.keys(sectionData).map((sectionkey) => {
        return (
          <Container style={containerStyles} key={crypto.randomUUID()}>
            <React.Fragment >
              {(sectionkey === "regions" || sectionkey === "subregion") && (
                <RegionsSection
                  regionData={
                    sectionData[sectionkey]?.data?.sub_regions ||
                    sectionData[sectionkey]?.data
                  }
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
            </React.Fragment>
          </Container>
        );
      })}
    </>
  );
};

export default AppSections;
