import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { Grid } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Navbar() {
  return (
    <AppBar position="static" style={{ backgroundColor: "#282c34" }}>
      <Container
        maxWidth="xl"
        style={{
          backgroundColor: "#282c34",
          margin: "auto",
          padding: 0,
          width: "80%",
        }}
      >
        <Toolbar disableGutters>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Box sx={{ flexGrow: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/user.avif  " />
              </Box>
            </Grid>
            <Grid item>
              <NotificationsIcon />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
