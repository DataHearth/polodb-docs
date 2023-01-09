import React from "react";
import Link from "next/link";
import Script from "next/script";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import DevicesIcon from "@mui/icons-material/Devices";

function GAScript() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6BLWHTFTEP"
      ></Script>
      <Script>
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6BLWHTFTEP');
  `}
      </Script>
    </>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © Vincent Chen "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function () {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            PoloDB
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              PoloDB
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              An embedded JSON-based database.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link href="/docs">
                <Button variant="contained">Documentations</Button>
              </Link>
              <Link href="https://github.com/vincentdchan/PoloDB">
                <Button variant="outlined">Github</Button>
              </Link>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  sx={{
                    paddingTop: "12px",
                    paddingBottom: "12px",
                  }}
                >
                  <IntegrationInstructionsIcon
                    sx={{
                      width: "100px",
                      height: "100px",
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Embedded
                  </Typography>
                  <Typography>
                    Only cost ~500kb memory to serve a database.
                    <br />
                    No standalone processes. No cross-process calls. No runtime
                    dependency.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  sx={{
                    paddingTop: "12px",
                    paddingBottom: "12px",
                  }}
                >
                  <SettingsSuggestIcon
                    sx={{
                      width: "100px",
                      height: "100px",
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    MongoDB-like API
                  </Typography>
                  <Typography>NoSQL. Easy to learn and use.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  sx={{
                    paddingTop: "12px",
                    paddingBottom: "12px",
                  }}
                >
                  <DevicesIcon
                    sx={{
                      width: "100px",
                      height: "100px",
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Portable
                  </Typography>
                  <Typography>
                    Cross-Platform. Various language bindings. Multiple
                    backends.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography> */}
        <Copyright />
      </Box>
      {/* End footer */}
      <GAScript />
    </ThemeProvider>
  );
}
