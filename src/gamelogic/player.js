function Player( id ) {
    this.id = id;
    var cards = [];
    var cardsWon = [];
    
    this.getCards = function() {
        return cards;
    };
    this.addCards = function( newCards ) {
        cards = cards.concat( newCards );
        return;    
    };
    this.getCardsWon = function() {
        return cardsWon;
    };
    this.addCardsWon = function( newCardsWon ) {
        cardsWon = cardsWon.concat( newCardsWon );
        return;
    };
    this.removeCards = function( theCards ) {
        var ids = [];
        for ( var i = 0; i < theCards.length; i++ ) {
            ids.push( theCards[ i ].id );
        }
        this.removeCardsById( ids );
    };
    this.removeCardsById = function( ids ) {
        for ( var i = 0; i < cards.length; i++ ) {
            for ( var u = 0; u < ids.length; u++ ) {
                if ( cards[i].id == ids[ u ] ) {
                    cards.splice( i, 1 );
                }
            }
        }    
    };
    this.resetHand = function() {
        cards = [];
        cardsWon = [];
    };
};

Player.prototype = {
    playHand : function( playedCards ) {
        //remove this cards from your hand
        //emit event you have played
    },
    hasOnHand : function( id ) {
        var cards = this.getCards();
        for ( var i = 0; i < cards.length;i++ ) {
            if ( cards[ i ].id == id ) {
                return true;
            }
        }
        return false;
    },
    hasOnStack : function( id ) {
        var cards = this.getCardsWon();
        for ( var i = 0; i < cards.length;i++ ) {
            if ( cards[ i ].id == id ) {
                return true;
            }
        }
        return false;
    },
    ask : function( question, answers, callback ) {
        console.log( "Ask player : ", question, answers );
        if ( question == 'swap' ) {
            callback( this.id, this.getCards().slice( 0, 3 ) );
        }
        else {
            callback( this.id, answers[ 0 ] );
        }
    },
    log : function() {
        var cards = this.getCards();
        var ids = [];
        for ( var i = 0; i < cards.length; i++ ) {
            ids.push( cards[ i ].id );
        }
        console.log( "Player ", this.id, " has on hand ", ids , " and on stack ", this.getCardsWon() );
    } 
};
