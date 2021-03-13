import React from 'react'
import './Cards.css'
import $ from 'jquery';
import Card from '../Card/Card'

const Cards = () => {
    var maxHeight = 0;

    $(".adjCardCont").each(function () {
        if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
    });

    $(".adjCardCont").height(maxHeight);
    return (
        <div className="cards row">
            <div className="col-lg-4 adjCardCont">
                <Card title="speed." emoji="⚡">
                    electric's advanced concurrency management system makes it anywhere from 2x to 15x faster than its opposition.
                </Card>
            </div>
            <div className="col-lg-4 adjCardCont">
                <Card title="effeciency." emoji="🚀">
                    electric is the first windows package manager to officially support installing packages concurrently, because effeciency matters.
                </Card>
            </div>
            <div className="col-lg-4 adjCardCont">
                <Card title="power." emoji="👊">
                    electric can install over 2000 packages out of the box along with installing portable non-admin software
                </Card>
            </div>
        </div>
    )
}

export default Cards
