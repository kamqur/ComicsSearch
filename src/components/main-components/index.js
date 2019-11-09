import React, { Fragment } from 'react';

import Header from "../headers";
// import NavBar from '../src/components/NavBar'
// import SearchBar from '../src/components/SearchBar'
// import Footer from '../footer';

 import ComicsList from '../characters/index'

// import Header from

const MainComponent = () => (
  <Fragment>

    <Header />

    <ComicsList />

  </Fragment>
);

export default MainComponent;