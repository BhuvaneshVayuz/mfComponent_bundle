import React from 'react';
import CreateFlowRoutes from './routes/CreateFlowRoutes';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return <BrowserRouter basename="/create">
    <CreateFlowRoutes {...props} />
  </BrowserRouter>
};

export default App;
