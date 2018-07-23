import React, { Component } from 'react';
const binance = require('node-binance-api')().options({
    APIKEY: '',
    APISECRET: '',
    useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
    test: true // If you want to use sandbox mode where orders are simulated
});
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tickerPrice: [],

        }
    }
    componentDidMount() {
        this.InitialLoad();
    }

    componentWillUnmount() {

    }

    InitialLoad() {
        var tickerPrice1;
        var reactState = this;
        binance.prices('BTC',(error, ticker) => {
            debugger;   
        });
        binance.prices((error, ticker) => {
            var result = Object.keys(ticker).map(function(key) {
                return [key, ticker[key]];
              });
            reactState.setState({
                tickerPrice: result
            }, () => reactState.onUpdate());
        });
 
    }
    onUpdate() {
        console.log(this.state.tickerPrice);
    }
    render() {
        let coinTable;
        return (
           <div>
               Binance API Get Coin Details 
        
               <table id="coinDetails">
               <tr><th> Coins </th> <th> Price </th></tr>
               <tbody>
                {
                    this.state.tickerPrice.map(coins => {
                            return(
                                <tr><td> {coins[0]} </td><td> {coins[1]} </td></tr>
                            )
                     
                    }   )
                }
             </tbody>
               </table>
           </div>
        );
     }
}
export default App;