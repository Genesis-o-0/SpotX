import { Property } from "@/types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import BathtubIcon from "@mui/icons-material/Bathtub";
import BedIcon from "@mui/icons-material/Bed";

const UnitsCard: React.FC<{ unitData: Property }> = ({ unitData }) => {
  return (
    <div>
      <Card style={{ height: "65vh", width: "300px", margin: "16px" }}>
        <CardMedia
          sx={{ height: "45%" }}
          image={
            unitData?.main_image?.url ||
            unitData?.images[0]?.url ||
            "/static/images/placeholder.png"
          }
          title={unitData?.type}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            {`${unitData?.region_name || "N/A"} / ${
              unitData?.sub_region_name || "N/A"
            }`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type: {unitData?.type || "N/A"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {`${unitData?.current_price} LE/ Per day` || "N/A"}
          </Typography>
        </CardContent>
        <CardActions style={{ alignItems: "center" }}>
          <p>
            <BathtubIcon /> {unitData?.bathrooms || "N/A"}
          </p>
          <p>
            <BedIcon /> {unitData?.bed_rooms || "N/A"}
          </p>
        </CardActions>
      </Card>
    </div>
  );
};

export default UnitsCard;
