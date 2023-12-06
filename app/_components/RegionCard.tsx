import { Region } from "@/types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  cardContainer,
  cardStyles,
  cardMediaStyles,
  cardTypography,
} from "./sharedStyles/sharedStyles";

const RegionCard: React.FC<{ region: Region }> = ({ region }) => {
  return (
    <div style={cardContainer}>
      <Card sx={cardStyles}>
        <CardMedia
          component="img"
          sx={cardMediaStyles}
          image={`${region.images[0].url}`}
          alt={region.name}
        />
        <Box>
          <Typography component="div" variant="body1" style={cardTypography}>
            {region.name}
          </Typography>
        </Box>
      </Card>
    </div>
  );
};

export default RegionCard;
