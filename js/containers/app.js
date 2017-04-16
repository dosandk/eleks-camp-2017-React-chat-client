import React from 'react';
import LoaderContainer from './loader';
import Websockets from './websockets';

const App = ({ children }) => (
  <div>
    { children }
    <LoaderContainer />
    <Websockets />
  </div>
);

export default App;
