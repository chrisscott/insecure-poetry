import React, { useState, useEffect } from 'react';
import {
  Typography, Snackbar, IconButton, Link,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Twitter, Link as LinkIcon } from '@material-ui/icons';
import ClipboardJS from 'clipboard';

import type { Haiku } from '../generator/haiku';

interface SharePageProps {
  haiku: Haiku;
}

const Share = ({ haiku }: SharePageProps): JSX.Element => {
  const [twitterShareUrl, setTwitterShareUrl] = useState<string>();
  const [alertOpen, setAlertOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState<string>();

  const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertOpen(false);
  };

  const getTwitterShareUrl = (haiku: Haiku): string => `https://twitter.com/intent/tweet?hashtags=insecurepoetryclub&original_referer=${window.location.href}&ref_src=twsrc%5Etfw&related=insecurepoetry&text=${encodeURIComponent(`${haiku.join('\n')}\n`)}&tw_p=tweetbutton&url=${window.location.href}&via=insecurepoetry`;

  useEffect(() => {
    setShareUrl(window.location.href);
    setTwitterShareUrl(getTwitterShareUrl(haiku));
    const clipboard = new ClipboardJS('#copy-share-link');

    clipboard.on('success', () => {
      setAlertOpen(true);
    });
  });

  return (
    <>
      {/* <Grid item xs={2}> */}
      <Typography display="inline">Share this:</Typography>
      {/* </Grid>
      <Grid item xs={7}> */}
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
        id="copy-share-link"
        aria-label="copy share link"
        data-clipboard-text={shareUrl}
      >
        <LinkIcon />
      </IconButton>


      <Snackbar open={alertOpen} autoHideDuration={2000} onClose={handleClose}>
        <Alert severity="info" onClose={handleClose}>
          Copied to clipboard
        </Alert>
      </Snackbar>

      {/* </Grid> */}
    </>
  );
};

export default Share;
