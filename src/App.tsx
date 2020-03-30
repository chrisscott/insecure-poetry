import React, { useState } from 'react';

import {
  Typography, Container, Grid, Button, Card, CardContent,
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
      </Grid>
    </Container>
  );
};

export default App;
