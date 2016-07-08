import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import MarketDetail from '../components/market_detail.jsx';

export const composer = ({context}, onData) => {
  const { Meteor, Collections, FlowRouter } = context();
  const marketId = FlowRouter.getParam('marketId');
  if (Meteor.subscribe('markets', { marketId }).ready()) {
    const market = Collections.Markets.findOne({ marketId });
    console.log(market, marketId);
    onData(null, { market });
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MarketDetail);
