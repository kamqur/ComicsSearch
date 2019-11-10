import React, { Fragment, Component } from 'react';
import axios from 'axios';

import Header from "../header";
import Footer from "../footer";
import ComicsList from '../characters/index'
import CharactersDetail from '../characters/charactersDetail';
import { PageSize } from '../../utils/constants';
import {Favourite} from '../favourite/index'; 


class MainComponent extends Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      commics: [],
      currentPage: 0,
      size: PageSize,
      searchComicKey: "",
      favouriteCommics: [],
      showModal:false

    }

    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.searchingComic = this.searchingComic.bind(this);
    this.addToFavourite = this.addToFavourite.bind(this);
    this.removeToFavourite = this.removeToFavourite.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleHideModal = this.handleHideModal.bind(this);
    
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get('https://gateway.marvel.com/v1/public/characters?ts=1565922410&apikey=6a038473ffd6407750a2ea27115f7e7c&hash=1492df65a88ef98a1a279719fe509f72')
    .then(res => {
      const data = res.data.data.results
      this.setState({
        commics: data,
        loading: false,
      });
    });
  }

  addToFavourite(id) {
    this.setState({
      favouriteCommics: [...this.state.favouriteCommics, id]
    });
  }

  removeToFavourite(id){
    this.setState({
      favouriteCommics: this.state.favouriteCommics.filter( e => e !== id )
    });
  }

  searchingComic(key) {
    this.setState({ searchComicKey: key[0] })
  }

  getComicslist() {
    const { commics, loading, currentPage } = this.state;
    if (loading) {
      /// loader will be shown 
      return "loading...!"
    }

    return <ComicsList 
      commics={[...commics].slice(currentPage, currentPage + PageSize)}
      currentPage={currentPage}
      showModal={this.state.showModal}
      handleHideModal={this.handleHideModal}
      handleShowModal={this.handleShowModal}
    />
  }

  prev(){
    const { currentPage } = this.state;
    if (currentPage > 0){
      this.setState({ currentPage: currentPage - PageSize});
    }
  }

  next(){
    const { currentPage, commics } = this.state;
    if (currentPage < commics.length ){
      this.setState({ currentPage: currentPage + PageSize});
    }
  }

  handleHideModal(){
    this.setState({showModal: false})
  }


  handleShowModal(){
      this.setState({showModal: true})
      console.log(this.state.showModal);
  }


  getSearchComic() {
    const { commics, searchComicKey } = this.state;
    const commic = commics.find( c => c.name === searchComicKey );
    if (commic) {
      return  (
      <CharactersDetail 
        addToFavourite={this.addToFavourite}
        removeToFavourite={this.removeToFavourite}
        {...commic} 
      />);
    } else {
      return " Not found .....!!!";
    }
  }



  render() {
    const { commics, searchComicKey } = this.state;
//    <Favourite favouriteCommics={this.state.favouriteCommics} />
    return (
      <div>
      <Fragment>
        <Header
          search={this.searchingComic}
          options={commics.map( c => c.name )}
        />
        { searchComicKey === "" ?  (
        <Fragment>  
          {this.getComicslist()}
          <Footer
            prev={this.prev}
            next={this.next}
          />
        </Fragment>
      ) : this.getSearchComic()}
      </Fragment>

     </div>
    )
  }
};

export default MainComponent;