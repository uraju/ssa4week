// rest handler
//var db =  require('./slack.js');

var slack = require("./slack");
var User= slack.User;
var Channel = slack.Channel;
var Manager = slack.Manager;

var mgr = slack.mgr;
var db = require('./dbHandler.js');
    

exports.sendMessage = function (req, res) {
    console.log('send message');

    // user from somewhere
   var userid =  req.params.channel;
      
    db.getChannelJSON(userid).then(
        (data) => {
            



            console.log ("---------" + data);
            res.send(data);
        }).catch((err) => {
            console.log('db error = ' + err);
        }
    );}






   
     /*
        channel.addMessage(userA, req.params.message);

            res.send(JSON.stringify(channel.showMessages()));

            console.log(channel.showMessages());

            var userId = req.params.channel;
                var channel =  mgr.retrieveChannelById(userId)
                .then(
                
                (data) => {
                    //var k = channel.addMessage(userId,"testing");
                    
                    //res.send(data);
                    }).catch((err) => {
                        console.log('db error = ' + err);
                    }
                );   
            }

   
   

     */ 



    //db.addTweet()


/*
exports.getMessages = function (req, res) {
    console.log('get messages');
    
    //var channel =  mgr.createChannel("Team Channel");
    
    var channel = mgr.retrieveChannelById(req.params.channel);

    console.log("->" + JSON.stringify(channel));

    //res.send( JSON.stringify(channel.showMessages())); 
    res.send( JSON.stringify(channel)); 

}*/
exports.getMessages = function (req, res) {
    console.log('get messages');
    
    //var channel =  mgr.createChannel("Team Channel");
    
    mgr.retrieveChannelById(req.params.channel).then(

    (data) => {


          res.send(data);
         }).catch((err) => {
            console.log('db error = ' + err);
        }
     );   
}

/*
exports.getMessages = function (req, res) {
     var userid = req.params.channel;

     db.getChannelJSON(userid).then(
        (data) => {
           res.send(data);
         }).catch((err) => {
            console.log('db error = ' + err);
        }
     );   
}

*/

// update channel message start
exports.getMessages = function (req, res) {
    console.log('update messages');
    
    //var channel =  mgr.createChannel("Team Channel");
    
    mgr.updateChannel(req.params.channel).then(

    (data) => {
          res.send(data);
         }).catch((err) => {
            console.log('db error = ' + err);
        }
     );   
}



exports.getfollowedtweets = function (req, res) {
    console.log('getfollowedtweets');
    console.log('path=' + req);
    var parts = req.path.split('/');
    var userid = parts[3];

    db.getFollowedTweetsJSON(userid).then(
        (tweetsJSON) => {
            console.log("---" + tweetsJSON);
            res.send(tweetsJSON);
        }).catch((err) => {
            console.log('db error = ' + err);
        }
    );   
}

exports.getTeam = function (req, res) {
    console.log('get team');
    console.log('path=' + req);
    var parts = req.path.split('/');
    var userid = parts[3];

    db.getFollowedTweetsJSON(userid).then(
        (tweetsJSON) => {
            res.send(tweetsJSON);
        }).catch((err) => {
            console.log('db error = ' + err);
        }
    );   
}

exports.getuserinfo = function (req, res) {
    console.log('getuserinfo');
    console.log('path=' + req);
    var parts = req.path.split('/');
    var userid = parts[3];

    db.getUserInfoJSON(userid).then(
        (userJSON) => {
            res.send(userJSON);
        }).catch((err) => {
            console.log('db error = ' + err);
        }
    );}