import React from 'react';
import { Route } from 'react-router-dom';

import AddProject from './routes/AddProject/'
import Project from './routes/ProjectListing/'




const Table = ({ match }) => (
  <div>
    <Route path={`${match.url}/ProjectListing`} component={Project}/>
    <Route path={`${match.url}/AddProject`} component={AddProject}/>
  </div>
)

export default Table;
