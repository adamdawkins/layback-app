import React from 'react';

class MarketOdds extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {market, maxBack, minLay, isProfitable} = this.props;
    return (
      <li>
        {isProfitable ? (
          <h4><a href={`/m/${market.marketId}`}>{market.type} (£££)</a></h4>
          ) : (<p>{market.type}</p>)
        }
        <ul>
          <li>
            Max Back: {maxBack}
          </li>
          <li className="lay-cell">
            Min. Lay: {minLay}
          </li>
        </ul>
      </li>
    );
  }
}

export default MarketOdds;
