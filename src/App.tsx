import React, { useState } from 'react';

import {
  Typography, Container, Grid, Button, Card, CardContent, SvgIcon,
} from '@material-ui/core';

import getHaiku from './generator/haiku';

const App = (): JSX.Element => {
  const [haiku, setHaiku] = useState();
  const doHaiku = (): void => {
    setHaiku(getHaiku());
    // console.log(haiku);
  };
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            style={{ fontFamily: 'Permanent Marker' }}
          >
            Insecure Poetry
            {' '}
            <SvgIcon fontSize="inherit" style={{ fontSize: '0.8em' }}>
              <path d="M4.35 7.05C4.41 6.41 4.68 5.71 5.17 5.09C5.66 4.47 6.27 4.03 6.87 3.82C6.8 3.77 6.28 3.36 6.21 3.31C5.61 3.52 5 3.95 4.51 4.57C4.03 5.2 3.75 5.89 3.69 6.53C3.82 6.63 4.28 6.99 4.35 7.05Z" id="b2kS8G1tYy" />
              <path d="M0.8 3.39C0.74 3.85 0.98 4.4 1.35 4.69C1.51 4.81 2.76 5.8 2.92 5.92C2.98 5.29 3.25 4.59 3.74 3.97C4.23 3.34 4.84 2.91 5.44 2.7C5.28 2.58 4.03 1.59 3.87 1.46C3.5 1.17 2.9 1.07 2.46 1.25C2.32 1.31 1.78 1.49 1.33 2.07C0.88 2.64 0.82 3.23 0.8 3.39Z" id="e9hDBo8iR" />
              <path d="M23.69 24.06C23.5 22.91 23.39 22.26 23.37 22.13C23.06 22.26 22.76 22.44 22.47 22.66C22.23 22.84 22.02 23.03 21.84 23.24C22.08 23.35 22.7 23.63 23.69 24.06Z" id="cBV9CfCsb" />
              <path d="M12.75 12.46C12.75 12.42 12.75 12.18 12.74 11.76L12.09 11.39L14.01 11.06L13.36 9.9C13.48 9.74 13.54 9.66 13.56 9.64C13.56 9.64 13.9 9.65 14.31 9.67C13.65 9.16 8.39 5.02 7.74 4.5C7.13 4.71 6.52 5.14 6.03 5.77C5.54 6.39 5.27 7.09 5.21 7.73C5.68 8.09 7.99 9.91 12.15 13.18C12.51 13.22 12.71 13.25 12.75 13.25C12.75 13.25 12 12.34 11.99 12.24C11.97 12.13 12.6 12.42 12.75 12.46Z" id="f1CHZzGwtA" />
              <path d="M21.96 21.99C22.37 21.68 22.81 21.47 23.24 21.34C23.22 21.24 23.14 20.74 22.99 19.84C19.11 14.7 16.96 11.85 16.53 11.28C16.14 11.15 15.81 11.05 15.81 11.05C15.79 11.07 15.7 11.13 15.55 11.25L15.88 12.55L13.94 12.37L14.47 12.89C14.38 13.3 14.32 13.53 14.31 13.58C14.31 13.58 13.64 13.06 13.63 13.16C13.62 13.26 14.11 14.34 14.11 14.34C14.07 14.33 13.88 14.25 13.55 14.12L19.73 22.31L21.08 22.91C21.43 22.48 21.72 22.17 21.96 21.99Z" id="i1aBYJDbvZ" />
            </SvgIcon>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">
            Bad poetry made from the most commonly used passwords.
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Button
            style={{ backgroundColor: '#000' }}
            variant="contained"
            color="primary"
            onClick={(): void => doHaiku()}
          >
            Get A Haiku
          </Button>
        </Grid>
        <Grid item sm={10}>
          <Typography>(other styles coming soon...maybe)</Typography>
        </Grid>
        <Grid item xs={12}>
          {haiku && (
          <Card>
            <CardContent>
              {haiku.map((line: string | number | undefined) => (
                <Typography
                  style={{
                    fontFamily: 'Reenie Beanie', fontSize: '3em', lineHeight: '1', marginBottom: '0.3em',
                  }}
                  key={line}
                >
                  {line}
                </Typography>
              ))}
            </CardContent>
          </Card>
          )}
        </Grid>
        <Grid item xs={12}>
          <small>Broken Pencil by Felipe Alvarado from the Noun Project</small>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
