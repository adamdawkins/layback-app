import {Markets} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import { check, Match } from 'meteor/check';

export default function () {
  Meteor.publish('markets', function (query) {
    check(query, Match.Maybe(Object));
    return Markets.find(query);
  });
}
