// libs 
import React from 'react'

// components
import Card from "../../components/Card/Card";
import Banner from "../Banner/Banner";
import TerminalAnimation from "../TerminalAnimation/TerminalAnimation";
import MiniPackageSearch from "../MiniPackageSearch/MiniPackageSearch";
import Cards from '../../components/Cards/Cards';
import Download from '../Download/Download';

const Home = () => {
  return (
    <div>
      <div className="cont">
        <Banner />
        <TerminalAnimation />
        <Cards />
        <Download />
        {/* <MiniPackageSearch /> */}
      </div>
    </div>
  )
}

export default Home
