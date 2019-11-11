import React, { Fragment, Component } from 'react';
import axios from 'axios';

import Header from "../header";
import Footer from "../footer";
import ComicsList from '../characters/index'
import CharactersDetail from '../characters/charactersDetail';
import { PageSize,API_URL } from '../../utils/constants';
import Favourite from '../favourite';
import CharacterInfo from "../modal";

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
      activeComic: null,
      showModal:false,
    }
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.searchingComic = this.searchingComic.bind(this);
    this.addToFavourite = this.addToFavourite.bind(this);
    this.removeToFavourite = this.removeToFavourite.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleHideModal = this.handleHideModal.bind(this)
    this.backToMainPage = this.backToMainPage.bind(this);
    this.selectActiveComic = this.selectActiveComic.bind(this);
  }

  backToMainPage() {
    this.setState({ searchComicKey: "" })
  }


  selectActiveComic(comic) {
    this.setState({ activeComic: comic, showModal: true });
  }



  componentDidMount() {
    this.setState({ loading: true });
    axios.get(API_URL)
    .then(res => {
      const data = res.data.data.results
      this.setState({
        commics: data,
        loading: false,
      });
    });
  }



  addToFavourite(comic) {
    this.setState({
      favouriteCommics: [...this.state.favouriteCommics, comic],
      searchComicKey: "",
    });
  }



  removeToFavourite(comic){
    this.setState({
      favouriteCommics: this.state.favouriteCommics.filter( e => e.id !== comic.id ),
      searchComicKey: "",
    });
  }


  searchingComic(key) {
    this.setState({ searchComicKey: key[0] })
  }



  getComicslist() {
    const { commics, loading, currentPage, favouriteCommics, activeComic, showModal } = this.state;
    if (loading) {
      /// loader will be shown 
      return "loading...!"
    }
   
    return (
      <Fragment>
        <ComicsList 
          commics={[...commics].slice(currentPage, currentPage + PageSize)}
          currentPage={currentPage}
          selectActiveComic={this.selectActiveComic}
        />
        <Favourite commics={favouriteCommics} />
        <Footer
          prev={this.prev}
          next={this.next}
          />
        <CharacterInfo 
          {...activeComic}
          showModal={showModal}
          handleShowModal={this.handleShowModal}
          handleHideModal={this.handleHideModal}
          addToFavourite={this.addToFavourite}
          removeToFavourite={this.removeToFavourite}
        />
      </Fragment>
    )
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
    this.setState({showModal: true});
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
      return this.getComicslist();
    }
  }


  render() {

    console.log(API_URL)

    const { commics, searchComicKey } = this.state;
    return (
      <div>
      <Fragment>
        <Header
          backToMainPage={this.backToMainPage}
          search={this.searchingComic}
          options={commics.map( c => c.name )}
        />
        { searchComicKey === "" ?  (
        <Fragment>  
          {this.getComicslist()}
        </Fragment>
      ) : this.getSearchComic()}
      </Fragment>
    </div>
    )
  }
};

export default MainComponent;