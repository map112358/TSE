var eventId = "54ec8a952650fbf6ecea6a1b";

var officers = ["sl7v6","mapp86","dpvx8","hc79b","brmwc6"];

cursor = db.members.find({
  "events": {
    $in: [eventId]
  },
  "pawprint": {
    $nin: officers
  }
});

var members = [];
while (cursor.hasNext()) {
  var member = cursor.next();
  members.push(member);
}

var numberWinners = 4;
var winners = [];

while(winners.length < numberWinners){
  var winner = members[Math.floor(Math.random()*members.length)];
  if(winners.lastIndexOf(winner) == -1) { winners.push(winner); }
}

winners.forEach(function(winner,index,winners) {
  print(winner.pawprint + ': ' + winner.first_name + ' ' + winner.last_name);
})
