import React from 'react';
import './App.css';
import NavBar from '../src/components/NavBar'
import SearchBar from '../src/components/SearchBar'
import Footer from '../src/components/Footer'
import ComicsList from '../src/components/ComicsList'


function App() {
  return (
    <div className="container-fluid">
      
       <NavBar />
       <SearchBar />
       <ComicsList />
       <Footer />

    </div>
  );
}

export default App;
