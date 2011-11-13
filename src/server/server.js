/*
    Copy the server code where you have socket.io installed
*/

var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(1337);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}


var db = new Db();



io.sockets.on('connection', function (socket) {
    var id = socket.id;
    socket.emit('connected');
    db.newPlayer( socket );
});

function User() {
    this.name = "";
    this.id = -1;
    this.socket;
};

function Db() {
    this.users = {};
                            
    this.newPlayer = function( socket ) {
        var user = new User();
        user.id = socket.id;
        user.socket = socket;
        this.users[ user.id ] = user;
        this.ask( user );
        return;
    };
    this.ask = function( user ) { 
        var that = this;
        user.socket.on( 'userInfo', function( data ) {
                that.users[ user.id ].name = data.name;            
            }
        );
        user.socket.emit( "askUserInfo" );
    };
};
