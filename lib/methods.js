Meteor.methods({
  addLog: function(requestUrl) {
    Logging.insert({
      _id: this.connection.id,
      clientAddress: this.connection.clientAddress,
      real_ip: this.connection.httpHeaders['x-real-ip'],
      referer: this.connection.httpHeaders['referer'],
      host: this.connection.httpHeaders['host'],
      requestUrl: requestUrl,
      createdAt: new Date()
    })
  },
  addMember: function(first_name, last_name, pawprint,event_id) {
    var member = Members.findOne({pawprint:pawprint});
    if(member) {
      var events = member.events;
      if(!events.includes(event_id)) {
        events.push(event_id);
        Members.update({_id: member._id}, {
          first_name: first_name,
          last_name: last_name,
          events: events
        });
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