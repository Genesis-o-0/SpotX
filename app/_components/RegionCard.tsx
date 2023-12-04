import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const RegionCard: React.FC<{ region: Region }> = ({ region }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: "10px",
        borderRadius: "15px",
      }}
    >
      <CardMedia
        component="img"
        sx={{ maxHeight: 151, width: { xs: "100%", md: "70%" } }}
        image={`${region.images[0].url}`}
        alt={region.name}
      />
      <Box>
        <CardContent sx={{ flex: "1 0 auto", padding: "0" }}>
          <Typography
            component="div"
            variant="body1"
            style={{ padding: "0", fontWeight: "bold" }}
          >
            {region.name}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default RegionCard;
