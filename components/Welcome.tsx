import React from 'react';
import {
  Container, Grid, Button,
} from '@material-ui/core';

import Header from './Header';
import Footer from './Footer';

import { getHaiku, getShareSlug } from '../generator/haiku';

const Welcome = (): JSX.Element => {
  const doHaiku = (): void => {
    const haiku = getHaiku();
    const slug = getShareSlug(haiku);
    if (typeof window !== 'undefined') {
      window.location.replace(`/h/${slug}`);
    }
  };
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Header />

        <Grid item sm={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={(): void => doHaiku()}
          >
            Get a Haiku!
          </Button>
        </Grid>

        <Footer />

      </Grid>
    </Container>
  );
};

export default Welcome;
