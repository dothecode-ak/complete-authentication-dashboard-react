import React from "react";
import {
  Grid,
  Box,
  CardActionArea,
  Typography,
  Tabs,
  Tab,
  Card,
} from "@mui/material";
import pic1 from "../../../assets/undraw_secure_login_pdn4.png";
function LoginRegis() {
  return (
    <>
      <Grid container sx={{ height: "85vh" }}>
        <Grid
          item
          lg={7}
          sm={5}
          sx={{
            backgroundImage: `URL(${pic1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></Grid>
        <Grid item lg={5} sm={7} sx={{}}>
          <Card sx={{width:"100%",height:"100%"}}>
            <Box>
              <Box sx={{}}>
                <Tabs>
                  <Tab label="Login"></Tab>
                  <Tab label="Registration"></Tab>
                </Tabs>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default LoginRegis;
