import React from 'react';
// import Header from "./components/Header/Header";
import Advertisement from "./Advertisement";
import FeaturedNews from './FeaturedNews';
import OtherNews from './OtherNews';

const Home = () => {
  return (
    <section>
      <Advertisement />
      <FeaturedNews />
      <OtherNews />
    </section>
  )
}

export default Home;