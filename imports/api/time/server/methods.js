import { Meteor } from 'meteor/meteor'
import { Time } from '../index'

Meteor.methods({
    'UpdateTime'() {
        Time.upsert('currentTime', { $set: { time: new Date() } })
    },
})