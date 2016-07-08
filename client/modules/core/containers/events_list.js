import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import EventsList from '../components/events_list.jsx';

export const composer = ({context}, onData) => {
  const { Meteor, Collections } = context();
  const events = Collections.Events.find().fetch();
  Meteor.call('markets.countProfitable', (err, res) => {
    const {total, profitable } = res;
    onData(null, { events, total, profitable });
  });
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EventsList);
