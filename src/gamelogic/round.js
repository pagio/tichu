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
            this.players[ i ].addCards( deck.getCards( 8 ) );
        }
        var grandeCallback = this.createGrandeCallback();
        for ( var i = 0; i < 4; i++ ) {
            this.players[ i ].ask( "grande", [ 'yes', 'no' ], grandeCallback );
        }
        
        
        /*
        //paizei aytos me to mayong
        for ( var i = 0; i < 4; i++ ) {
            if ( this.players[ i ].hasOnHand( 54 ) ) {
                this.turn = i;
                break;
            }
        }  
        //w8 until action
        this.players[ i ].play( );
        //loop : paizei o epomenos 
        */
    };
    this.createGrandeCallback = function() {
        var grande = [ -1, -1, -1, -1 ];
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
                this.grande = grande;
                this.afterGrande();                
            }       
        };
    }
    this.createSwapCallback= function() {
        var swap = [ -1, -1, -1, -1 ];
        var cards = [];
        return function( playerId, answer ) {
            swap[ playerId - 1 ] = 0;
            //validate answer TODO
            cards[ playerId - 1 ] = answer;
            var end = 0;
            for ( var i = 0; i < 4; i++ ) {
                if ( swap[ i ] === -1 ) {
                    end = 1;
                    break;
                }
            }
            if ( end == 0 ) {
                //swap the cards
                //go to next state
                //this.afterSwap();                
            }
        };
    }
    this.afterGrande = function() {
        //moirase 6
        for ( var i = 0; i < 4; i++ ) {
            this.players[ i ].addCards( deck.getCards( 6 ) );
            this.players[ i ].log();
        }
        //swap 3 cards   
        var swapCallback = this.createSwapCallback();
        for ( var i = 0; i < 4; i++ ) {
            this.players[ i ].ask( "swap", [], swapCallback );
        }
    }
};

Round.prototype = {
};
