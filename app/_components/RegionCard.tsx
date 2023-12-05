import { Region } from "@/types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const RegionCard: React.FC<{ region: Region }> = ({ region }) => {
  return (
    <div style={{ height: "100%", width: "100%", margin: "5px" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "column" },
          alignItems: "center",
          gap: "12px",
          borderRadius: "15px",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: { xs: 50, md: 151 },
            width: { xs: "120px", sm: "100%", md: "100%" },
            margin: "0",
          }}
          image={`${region.images[0].url}`}
          alt={region.name}
        />
        <Box>
          <Typography
            component="div"
            variant="body1"
            style={{ padding: "0", fontWeight: "bold" }}
          >
            {region.name}
          </Typography>
        </Box>
      </Card>
    </div>
  );
};

export default RegionCard;
