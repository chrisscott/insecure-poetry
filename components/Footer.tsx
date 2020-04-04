import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';

const Footer = (): JSX.Element => (
  <>
    <Grid item xs={12}>
      <Typography><Link href="https://twitter.com/insecurepoetry">@insecurepoetry</Link></Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography>
        <small>
          Passwords sourced from Daniel Miessler&apos;s
          {' '}
          <a href="https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/10k-most-common.txt">SecLists</a>
          . Broken Pencil by Felipe Alvarado from the Noun Project. Produced by
          {' '}
          <a href="https://iamzed.com/">Chris Scott</a>
          .
        </small>
      </Typography>
    </Grid>
  </>
);

export default Footer;
