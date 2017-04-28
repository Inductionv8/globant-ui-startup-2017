import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Header from '../../components/Header/Header';
import InputSearch from '../../components/InputSearch/InputSearch';
import FavoriteSongBox from '../../components/FavoriteSongBox/FavoriteSongBox'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Subtitle subtitleText="Welcome to" subtitleClass="welcome-subtitle" />
        <Title texts="Sfotisearch" styleName="text-color-white" />
        <Subtitle  />
        <InputSearch />
        <Title texts="Favorite Songs" styleName="text-color-white" />
        <FavoriteSongBox logo="http://is3.mzstatic.com/image/thumb/Music/v4/8c/64/61/8c6461e2-0712-d9c1-f1d9-87efaefd440f/source/100x100bb.jpg"
        albumName="Audioslave"
        artistName="Audioslave"
        songName="Like a stone" />
      </div>
    );
  }
}

export default Home;
