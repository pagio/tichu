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
        console.log( question, answers );
        callback( this.id, answers[ 0 ] );
    },
    log : function() {
        console.log( "Player ", this.id, " has on hand ", this.getCards(), " and on stack ", this.getCardsWon() );
    } 
};
