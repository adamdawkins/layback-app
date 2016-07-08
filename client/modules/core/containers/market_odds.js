import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import MarketOdds from '../components/market_odds.jsx';

export const composer = ({context, eventId, type}, onData) => {
  const {Collections} = context();

  const market = Collections.Markets.findOne({
    eventId,
    type
  });
  if (market) {
    const { back, lay } = market;
    const backValues = [];
    back.forEach((tick) => {
      const key = Object.keys(tick)[0];
      const value = tick[key];
      if (!isNaN(value)) {
        backValues.push(value);
      }
    });
    const maxBack = Math.max.apply(Math, backValues);

    const layValues = [];
    lay.forEach((tick) => {
      const key = Object.keys(tick)[0];
      const value = tick[key];
      if (!isNaN(value)) {
        layValues.push(value);
      }
    });
    const minLay = Math.min.apply(Math, layValues);
    onData(null, {
      market,
      maxBack,
      minLay,
      isProfitable: (maxBack > minLay),
    });
  }
};

export const depsMapper = (context) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MarketOdds);
