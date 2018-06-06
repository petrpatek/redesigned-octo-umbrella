import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const mountApp = document.getElementById('root');

render(
<AppContainer>
  <h1 >TEST</h1>
</AppContainer>,
mountApp
);

