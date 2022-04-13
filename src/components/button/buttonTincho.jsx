import React from "react";

//hola

import { Button, Box } from "@mui/material";

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
      <Box sx={{ margin: "auto", textAlign: "center" }}>
        <Button
          size="small"
          color="error"
          onClick={() => funcionMusica(musica)}
          sx={{
            borderRadius: "50%",
            bgcolor: "red",
            width: "200px",
            height: "200px",
            color: "white",
            border: "solid black",
            textAlign: "center",
            fontSize: "1.7rem",
          }}
        >
          {texto}
        </Button>
      </Box>
    </>
  );
}
