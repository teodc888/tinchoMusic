import React from "react";

import { Button, Box, Card } from "@mui/material";

import { Howl } from "howler";

export default function ButtonTincho({ musica, texto }) {
  const funcionMusica = (src) => {
    const sound = new Howl({
      src: [src],
      html5: true,
    });
    sound.play();
  };
  return (
    <>
      <Box >
        <Card sx={{ margin: "auto", textAlign:"center" }}> 
          <Button size="small" onClick={() => funcionMusica(musica)}>
            {texto}
          </Button>
        </Card>
      </Box>
    </>
  );
}
