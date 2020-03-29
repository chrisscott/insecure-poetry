import React, { useState } from 'react';
import {
  Container, Header, Button, Icon,
} from 'semantic-ui-react';
import 'semantic-ui-less/semantic.less';
import getHaiku from './generator/haiku';

const mobile = false;

const App = (): JSX.Element => {
  const [haiku, setHaiku] = useState();
  const doHaiku = (): void => {
    setHaiku(getHaiku());
    // console.log(haiku);
  };
  return (
    <>
      <Container fluid>
        <Header
          as="h1"
          content="Insecure Poetry"
      // inverted
          style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '0.5em' : '1em',
          }}
        />
        <Header
          as="h2"
          content="Bad poetry made from the top 10,000 most commonly used passwords."
      // inverted
          style={{
            fontSize: mobile ? '1.25em' : '1.5em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.25em' : '0.75em',
          }}
        />
        <Button
          primary
          size="large"
          onClick={(): void => doHaiku()}
        >
          Get A Haiku
        </Button>
      </Container>
      <Container
        fluid
        style={{
          font: 'Kalam',
          fontSize: mobile ? '1.25em' : '1.5em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      >
        {haiku && haiku.map((line: string | number | undefined) => <p style={{ margin: '0 0 .25em' }} key={line}>{line}</p>)}
      </Container>
    </>
  );
};

export default App;
