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
  }
})