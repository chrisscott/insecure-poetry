import React, { useState, useEffect } from 'react';
import {
  Container, Grid, Button, Card, CardContent,
  Link, Typography, Snackbar, IconButton,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Twitter, Link as LinkIcon } from '@material-ui/icons';
import Router from 'next/router';

import Header from './Header';

import { getHaiku, getShareSlug } from '../generator/haiku';
import type { Haiku } from '../generator/haiku';

interface HaikuPageProps {
  haiku: Haiku;
}

const HaikuPage = ({ haiku }: HaikuPageProps): JSX.Element => {
  const [alertOpen, setAlertOpen] = useState(false);
  const [twitterShareUrl, setTwitterShareUrl] = useState<string>();

  const getTwitterShareUrl = (haiku: Haiku): string => {
    const shareUrl = `https://twitter.com/intent/tweet?hashtags=insecurepoetry&original_referer=${window.location.href}&ref_src=twsrc%5Etfw&related=insecurepoetry&text=${encodeURIComponent(`${haiku.join('\n')}\n`)}&tw_p=tweetbutton&url=${window.location.href}&via=insecurepoetry`;
    return shareUrl;
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertOpen(false);
  };

  const copyShareUrl = (): void => {
    document.addEventListener('copy', (e) => {
      if (e.clipboardData) {
        e.clipboardData.setData('text/plain', window.location.href);
        e.preventDefault();
      }
    });
    document.execCommand('copy');
    setAlertOpen(true);
  };

  const doHaiku = (): void => {
    const newHaiku = getHaiku();
    const slug = getShareSlug(newHaiku);
    Router.push('/h/[slug]', `/h/${slug}`);
  };

  useEffect(() => {
    setTwitterShareUrl(getTwitterShareUrl(haiku));
  });

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
          >
            <Link
              color="inherit"
              href={twitterShareUrl}
            >
              <Twitter />

            </Link>
          </IconButton>
          <IconButton
            aria-label="copy share link"
            onClick={copyShareUrl}
          >
            <LinkIcon />
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

export default HaikuPage;
