Template.upcoming_events.helpers({
  events: function() {
    // Return all events which have not yet happened
    return Events.find({date: {$gt: new Date()}}, {sort: {date: -1}});
  }
})

Template.event.helpers({
  date: function() {
    return this.date.toLocaleDateString();
  },
  speakers: function() {
    return this.speakers.map(function(speaker) { return {speaker: speaker}; });
  }
})