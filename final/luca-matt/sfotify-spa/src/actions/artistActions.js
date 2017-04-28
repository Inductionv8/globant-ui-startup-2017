// Some function to test the behavior off the app.
// to call it from the React Side all you have to do is
//
// import * as artist from "PATH";
//
// artist.fetchArtist

export function fetchArtist() {
  return {
    type: "FETCH_ARTIST_FULFILLED",
    payload: {
      name: "Tommy Lee",
    }
  }
}
