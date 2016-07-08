import React from 'react';
import MarketOdds from '../containers/market_odds';

class EventsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { events, total, profitable } = this.props;
    return (
      <div>
        <h2>Events</h2>
        <p>Profitable Markets: {profitable} / {total} ( {(profitable / total * 100).toFixed(2)}%)</p>
        <ul>
            {events.map((event) => (
              <li key={event._id}>
                <h3>{event.name}</h3>
                <ul>
                  <MarketOdds eventId={event._id} type="home" />
                  <MarketOdds eventId={event._id} type="draw" />
                  <MarketOdds eventId={event._id} type="away" />
                </ul>
              </li>
            ))}
          </ul>
      </div>
    );
  }
}

export default EventsList;
