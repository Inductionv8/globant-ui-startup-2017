// Some function to test the behavior off the app.
// to call it from the React Side all you have to do is
//
// import * as song from "PATH";
//
// song.fetchArtist

import axios from 'axios';

export function fetchSong() {
  return function(dispatch) {
    axios.get("https://api.spotify.com/v1/albums/10GYbpGRnCbUd5WsDzqHAv")
      .then((response) => {
        dispatch({ type: "FETCH_SONG_FULFILLED", payload: response.data })
      })
      .catch((err) => {
        dispatch({ type: "FETCH_SONG_REJECTED", payload: err })
      })
  }
}
