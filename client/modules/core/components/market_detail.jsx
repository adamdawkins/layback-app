import React from 'react';
import moment from 'moment';

class MarketDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  displayOdds(backOrLay) {
    let odds = [];
    backOrLay.forEach((tick) => {
      const key = Object.keys(tick)[0];
      const value = tick[key];
      const timestamp = parseInt(key, 10);
      const date = moment(timestamp).format('YYYY/MM/DD HH:m:s');
      odds.push({key, date, value});
    });

    return (
      <table>
        <tbody>
          {odds.map((tick) => (
           <tr key={tick.key}>
             <td>{tick.date}</td>
             <td>{tick.value}</td>
           </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    const { market } = this.props;
    const { teamName, type, lay, back } = market;
    return (
      <div>
        <h1>{teamName} ({type})</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
          }}
        >
          <div>
            <h2>Back odds</h2>
            {this.displayOdds(back)}
          </div>
          <div>
            <h2>Lay odds</h2>
            {this.displayOdds(lay)}
          </div>
        </div>
      </div>
    );
  }
}

export default MarketDetail;
