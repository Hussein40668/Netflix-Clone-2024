import React from 'react'
import Row from '../Row/Row'
import requests from '../../../Utils/requests';

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        islargeRow={true}
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="History Movies" fetchUrl={requests.fetchHistoryMovies} />
      <Row title="Family Movies" fetchUrl={requests.fetchFamilyMovies} />
      <Row title="Western Movies" fetchUrl={requests.fetchWesternMovies} />
    </>
  );
}

export default RowList

