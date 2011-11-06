function Round( players ) {
    var deck = new Deck();
    deck.shuffle();
    this.players = players;   
    this.grande = [ 0, 0, 0, 0];
    
    //whose to play next
    this.turn = 0;
        
    this.start = function() {
        for ( var i = 0; i < 4; i++ ) {
            this.players[ i ].resetHand();
        }
        
        //moirase 8
        for ( var i = 0; i < 4; i++ ) {
            this.players[ i ].addCards( deck.get( 8 ) );
        }
        var grandeCallback = this.createGrandeCallback();
        for ( var i = 0; i < 4; i++ ) {
            this.players[ i ].ask( "grande", [ 'yes', 'no' ], grandeCallback );
        }
    };
    this.createGrandeCallback = function() {
        var grande = [ -1, -1, -1, -1 ];
        var rnd = this;
        return function( playerId, answer) {
            //console.log( playerId, " answered ", answer );
            grande[ playerId - 1 ] = answer;
            var end = 0;
            for ( var i = 0; i < 4; i++ ) {
                if ( grande[ i ] === -1 ) {
                    end = 1;
                    break;
                }
            }
            if ( end == 0 ) {
                //go to next state
                rnd.grande = grande;
                rnd.afterGrande();                
            }       
        };
    }
    this.createSwapCallback= function() {
        var swap = [ -1, -1, -1, -1 ];
        var cards = [];
        var rnd = this;
        return function( playerId, answer ) {
            //answer should be an array(3) of Card objects  
            swap[ playerId - 1 ] = 0;
            //validate answer TODO
            cards[ playerId - 1 ] = answer;
            console.log( "player ", playerId, " wants to swap " , answer );
            var end = 0;
            for ( var i = 0; i < 4; i++ ) {
                if ( swap[ i ] === -1 ) {
                    end = 1;
                    break;
                }
            }
            if ( end == 0 ) {
                //swap the cards
                // 0 - next player , 1 - next next , 2 next next next
                for ( var i = 0; i < 4; i++ ) {
                    players[ i ].removeCards( cards[ i ] );
                    for ( var u = 1; u <= 3; u++ ) {
                        players[ ( i + u )%4 ].addCards( cards[ i ][ u - 1 ] ); 
                    }
                }
                //go to next state
                rnd.afterSwap();                
            }
        };
    }
    this.afterGrande = function() {
        //moirase 6
        for ( var i = 0; i < 4; i++ ) {
            this.players[ i ].addCards( deck.get( 6 ) );
            this.players[ i ].log();
        }
        //swap 3 cards   
        var swapCallback = this.createSwapCallback();
        for ( var i = 0; i < 4; i++ ) {
            this.players[ i ].ask( "swap", [], swapCallback );
        }
    }
    this.afterSwap = function() {
        //paizei aytos me to mayong
        for ( var i = 0; i < 4; i++ ) {
            if ( this.players[ i ].hasOnHand( 54 ) ) {
                this.turn = i;
                break;
            }
        } 
        console.log( "After swap" ); 
        for ( var i = 0; i < 4; i++ ) {
            this.players[ i ].log();
        }
        //this.players[ this.turn ].ask( "playFirst", [], playCallback );
        //check if valid combination
        //set type of cards 
        //loop : paizei o epomenos  
    }
};

Round.prototype = {
};
