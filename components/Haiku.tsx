import React, { useState } from 'react';
import {
  Container, Grid, Button, Card, CardContent, Typography, Snackbar, IconButton,
} from '@material-ui/core';

import Alert from '@material-ui/lab/Alert';
import { Twitter, Link } from '@material-ui/icons';
import Header from './Header';

import { getHaiku, getShareSlug } from '../generator/haiku';

const Haiku = ({ haiku }): JSX.Element => {
  const [alertOpen, setAlertOpen] = useState(false);
  const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertOpen(false);
  };

  const copyShareUrl = (): void => {
    document.addEventListener('copy', (e) => {
      e.clipboardData.setData('text/plain', window.location.href);
      e.preventDefault();
    });
    document.execCommand('copy');
    setAlertOpen(true);
  };

  const shareOnTwitter = (): void => { console.log('twit'); };

  // const [haiku, setHaiku]: [string[], React.Dispatch<any>] = useState(incomingHaiku);
  const doHaiku = (): void => {
    const newHaiku = getHaiku();
    // setHaiku(haiku);
    const slug = getShareSlug(newHaiku.join('\n'));
    if (typeof window !== 'undefined') {
      // console.log(window.location);
      window.location.replace(`/h/${slug}`);
    }
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

        <Grid item sm={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={(): void => doHaiku()}
          >
            Get a New Haiku
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography>Share this:</Typography>
          <IconButton
            aria-label="share on Twitter"
            onClick={shareOnTwitter}
          >
            <Twitter />
          </IconButton>
          <IconButton
            aria-label="copy share link"
            onClick={copyShareUrl}
          >
            <Link />
          </IconButton>
        </Grid>

      </Grid>

      <Snackbar open={alertOpen} autoHideDuration={2000} onClose={handleClose}>
        <Alert severity="info" onClose={handleClose}>
          Copied to clipboard
        </Alert>
      </Snackbar>

    </Container>
  );
};

export default Haiku;
