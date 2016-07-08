import {Markets} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'markets.countProfitable'() {
      const marketCursor = Markets.find();
      const total = marketCursor.count();
      let profitable = 0;
      const markets = marketCursor.fetch();

      markets.forEach((market) => {
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
        if (maxBack > minLay) {
          profitable += 1;
        }
      });
      return {
        total,
        profitable, 
      };
    }
  });
}
