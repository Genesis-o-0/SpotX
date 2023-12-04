import { Container, Grid, Typography } from "@mui/material";
import RegionCard from "./RegionCard";
import getRegionDetails from "@/utils/getRegionDetails";

const HorizontalList = async () => {
  const regionData: Promise<Data> = getRegionDetails(10);
  const resObj = await regionData;

  return (
    <Container
      style={{
        margin: "auto",

        padding: "15px",
        marginTop: "20px",
        width: "90%",
      }}
    >
      <Typography component="div" variant="h4" color="white">
        {resObj.data.name} villages
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        style={{ paddingTop: "20px" }}
      >
        {resObj.data.sub_regions?.map((region: SubRegion, index: number) => (
          <Grid item key={index} xs={12} md={4} style={{ padding: "15px" }}>
            <RegionCard region={region} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HorizontalList;
