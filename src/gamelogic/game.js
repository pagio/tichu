function Game() {
    this.teamPoints = [ 0, 0 ];
    this.teams = [ [ 1, 3 ], [ 2, 4 ] ];
    this.players = [ 
        new Player( 1 ), 
        new Player( 2 ), 
        new Player( 3 ), 
        new Player( 4 ) 
    ];
};

Game.prototype = {
    newRound : function() {
        var rnd = new Round( this.players );
        rnd.start();
    }
    
};
