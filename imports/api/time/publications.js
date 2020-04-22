import { Time } from './index'

Meteor.publish('Time', function () {
    return Time.find({})
})