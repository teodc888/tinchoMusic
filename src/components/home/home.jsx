import React from "react";
import { Stack, Box, Grid, Typography} from "@mui/material";
import Sexo from "../../tinchoMusic/tinchoSexo.mp4";
import Nashe from "../../tinchoMusic/tinchoNashe.mp4";
import Iu from "../../tinchoMusic/tinchoIu.mp4";
import Cantando from "../../tinchoMusic/tinchoCantando.mp4";
import Nofackno from "../../tinchoMusic/nofackno.mp4";
import ButtonTincho from "../button/buttonTincho";
import Nose from "../../tinchoMusic/nose.mp4";
import cuanto from "../../tinchoMusic/cuantocuanto.mp4";
import jajaja from "../../tinchoMusic/jajaja.mp4";
import cantandopor2 from "../../tinchoMusic/cantandopor2.mp4";
import muyelectrico from "../../tinchoMusic/muyelectrico.mp4";

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
            <Grid item xs={4} sm={8} md={12} >
                <ButtonTincho musica={Nose} texto="?" />
            </Grid>
            <Grid item xs={4} sm={8} md={12} >
                <ButtonTincho musica={cuanto} texto="CUANTO CUANTO CUANTO" />
            </Grid>
            <Grid item xs={4} sm={8} md={12} >
                <ButtonTincho musica={jajaja} texto="JA JA JA" />
            </Grid>
            <Grid item xs={4} sm={8} md={12} >
                <ButtonTincho musica={cantandopor2} texto="CANTANDO X 2" />
            </Grid>
            <Grid item xs={4} sm={8} md={12} >
                <ButtonTincho musica={muyelectrico} texto="MUY ELECTRICO !!!" />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </div>
  );
}
