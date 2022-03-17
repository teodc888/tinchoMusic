import React from "react";
import { Stack, Box, Grid, Typography} from "@mui/material";
import Sexo from "../../tinchoMusic/tinchoSexo.ogg";
import Nashe from "../../tinchoMusic/tinchoNashe.ogg";
import Iu from "../../tinchoMusic/tinchoIu.ogg";
import Cantando from "../../tinchoMusic/tinchoCantando.ogg";
import Nofackno from "../../tinchoMusic/nofackno.mp4";
import ButtonTincho from "../button/buttonTincho";

export default function Home() {

  return (
    <div>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="h3" component="div" sx={{ textAlign: "center" }}>
          TINCHO JIJIJAJA
        </Typography>
        <Box sx={{ width: "100%", marginTop: "1%", margin:"auto" }}>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={8} md={12} >
                <ButtonTincho musica={Sexo} texto="SEXO" />
            </Grid>
            <Grid item xs={4} sm={8} md={12} >
                <ButtonTincho musica={Nashe} texto="NASHE" />
            </Grid>
            <Grid item xs={4} sm={8} md={12}  >
                <ButtonTincho musica={Iu} texto="IU" />
            </Grid>
            <Grid item xs={4} sm={8} md={12} >
                <ButtonTincho musica={Cantando} texto="CANTANDO" />
            </Grid>
            <Grid item xs={4} sm={8} md={12} >
                <ButtonTincho musica={Nofackno} texto="No FACK NO" />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </div>
  );
}
