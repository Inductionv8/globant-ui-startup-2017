import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './ArtistList.css';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Header from '../../components/Header/Header';
import InputSearch from '../../components/InputSearch/InputSearch';
//import FavoriteSongBox from '../../components/FavoriteSongBox/FavoriteSongBox'

class ArtistList extends Component {
  render() {
    return (
      <div>
        <Header />
        <Title texts="Artist" styleName="text-color-white" />
        <Subtitle subtitleText="You are currently searching: " subtitleClass="welcome-subtitle" />
        <InputSearch />
      </div>
    );
  }
}

export default ArtistList;
