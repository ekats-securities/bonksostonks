import React from 'react';
import {Helmet} from "react-helmet";


class Ticker extends React.Component {
  render () {
    return (
        <div className="ticker">
            <Helmet>
                  <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/coinMarquee.js" />
            </Helmet>
             <div data-id="coinmarketcap-widget-marquee" data-coins="4943,4687,3408,825" data-currency="USD" data-theme="dark" data-transparent="true"/>
</div>
    );
  }
};



export default Ticker

