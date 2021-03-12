// libs 
import React from 'react'
import $ from 'jquery';

// components
import Card from "../../components/Card/Card";
import Banner from "../Banner/Banner";
import TerminalAnimation from "../TerminalAnimation/TerminalAnimation";
import MiniPackageSearch from "../MiniPackageSearch/MiniPackageSearch";

const Home = () => {
  var maxHeight = 0;

  $(".adjCardCont").each(function () {
    if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
  });

  $(".adjCardCont").height(maxHeight);
  return (
    <div>
      <div className="cont">
        <Banner />
        <TerminalAnimation />
        <div className="cards row">
          <div className="col-lg-4 adjCardCont">
            <Card title="speed.">
              electric's advanced concurrency management system makes it anywhere from 2x to 15x faster than its opposition.
            </Card>
          </div>
          <div className="col-lg-4 adjCardCont">
            <Card title="effeciency.">
              electric is the first windows package manager to officially support installing packages concurrently, because effeciency matters.
            </Card>
          </div>
          <div className="col-lg-4 adjCardCont">
            <Card title="power.">
              electric can install over 2000 packages out of the box along with installing portable non-admin software
              </Card>
          </div>
        </div>
        {/* <MiniPackageSearch /> */}
      </div>
    </div>
  )
}

export default Home
