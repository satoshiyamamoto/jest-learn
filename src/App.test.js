import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { createRenderer } from 'react-test-renderer/shallow';
import App from './App';
import logo from './logo.svg';

it('should render App component', () => {
  const renderer = createRenderer();
  renderer.render(<App/>);

  expect(
    renderer.getRenderOutput()
  ).toEqual(
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
});
