import React from 'react';
import {
  Container, Grid, Button, Card, CardContent,
  Typography,
} from '@material-ui/core';
import Router from 'next/router';

import Header from './Header';
import Footer from './Footer';
import Share from './Share';

import { getHaiku, getShareSlug } from '../generator/haiku';
import type { Haiku } from '../generator/haiku';

interface HaikuPageProps {
  haiku: Haiku;
}

const HaikuPage = ({ haiku }: HaikuPageProps): JSX.Element => {
  const doHaiku = (): void => {
    const newHaiku = getHaiku();
    const slug = getShareSlug(newHaiku);
    Router.push('/h/[slug]', `/h/${slug}`);
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Header />

        <Grid item xs={12}>
          {haiku && (
          <Card>
            <CardContent>
              {haiku.map((line: string | number | undefined) => (
                <Typography
                  style={{
                    fontFamily: 'Caveat', fontSize: '2.5em', lineHeight: '1', marginBottom: '0.3em',
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

        <Grid item xs={12} sm={5}>
          <Button
            variant="contained"
            color="primary"
            onClick={(): void => doHaiku()}
          >
            Get a New Haiku
          </Button>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Share haiku={haiku} />
        </Grid>

        <Footer />

      </Grid>

    </Container>
  );
};

export default HaikuPage;
