import React from "react";
import { Button, Input, Grid } from "@mui/material";

const ProdavitoForm = () => {
  return (
    <>
      <Grid container direction="column" spacing={2} xs={4} md={3} position="fixed">
        <Grid item>
          <Input />
        </Grid>
        <Grid item>
          <Input />
        </Grid>
        <Grid item>
          <Input />
        </Grid>
        <Grid item>
          <Input />
        </Grid>
        <Button>Search</Button>
      </Grid>
    </>
  );
};

export default ProdavitoForm;
