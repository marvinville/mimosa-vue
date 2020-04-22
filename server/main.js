import { Meteor } from 'meteor/meteor'
import '/imports/startup/server'

import { Time } from '../imports/api/time/index'

Meteor.startup(() => {
  // Update the current time
  Meteor.call('UpdateTime');
  // Add a new doc on each start.
  Time.insert({ time: new Date() })
  // Print the current time from the database
  console.log(`The time is now ${Time.findOne().time}`)
})
