function Player( id ) {
    this.id = id;
    var cards = [];
    var cardsWon = [];
    
    this.getCards = function() {
        return cards;
    };
    this.addCards = function( newCards ) {
        cards.concat( newCards );
        return;    
    };
    this.getCardsWon = function() {
        return cardsWon;
    };
    this.addCardsWon = function( newCardsWon ) {
        cards.concat( newCardsWon );
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
    }
};
