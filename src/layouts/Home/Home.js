// libs 
import React from 'react'

// components
// import Card from "../../components/Card/Card";
import Banner from "../Banner/Banner";
import TerminalAnimation from "../TerminalAnimation/TerminalAnimation";
import Cards from '../../components/Cards/Cards';
// import Download from '../Download/Download';

const Home = () => {
  return (
    <div>
        <Banner />
        <TerminalAnimation />
        <Cards />
        {/* <Download /> */}
    </div>
  )
}

export default Home
