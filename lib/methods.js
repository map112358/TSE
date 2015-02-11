Meteor.methods({
  addLog: function(request) {
    Logging.insert({
      connectionId: this.connection.id,
      clientAddress: this.connection.clientAddress,
      real_ip: this.connection.httpHeaders['x-real-ip'],
      referer: this.connection.httpHeaders['referer'],
      host: this.connection.httpHeaders['host'],
      requestUrl: request.url,
      createdAt: new Date()
    })
  },
  addMember: function(first_name, last_name, pawprint,event_id) {
    var member = Members.findOne({pawprint:pawprint});
    if(member) {
      var events = member.events;
      if(events.indexOf(event_id) == -1) {
        events.push(event_id);
        console.log(events);
        Members.update({_id: member._id}, {$set: {
          events: events
        }});
      }
    } else {
      Members.insert({
        first_name: first_name,
        last_name: last_name,
        pawprint: pawprint,
        events: [event_id]
      })
    }
  }
})