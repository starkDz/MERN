import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderTop: "10px solid #232369",
}));
const Fournisseur = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  paddingLeft: 20,
  marginTop: 5,
  height: 50,
  "&:hover": {
    textAlign: "center",
  },
}));
const Detail = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  borderTop: "10px solid #232369",
  height: 500,
}));
const SimpleContainer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>
                <Grid item xs={12}>
                  <b>Fournisseurs</b>
                </Grid>
              </Item>
              <Fournisseur>
                <Grid item xs={12}>
                  ddd
                </Grid>
              </Fournisseur>
            </Grid>
            <Grid item xs={8}>
              <Detail>xs=4</Detail>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};
export default SimpleContainer;
