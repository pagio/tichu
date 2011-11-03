function Player() {
    this.id = 0;
    var cards = [];
    var cardsWon = [];
};

Player.prototype = {
    getCards : function() {
        return cards;
    },
    addCards : function( newCards ) {
        cards.concat( newCards );
        return;    
    },
    getCardsWon : function() {
        return cardsWon;
    },
    addCardsWon : function( newCardsWon ) {
        cards.concat( newCardsWon );
        return;
    },
    playHand : function( playedCards ) {
        //remove this cards from your hand
    },
    resetHand : function() {
        cards = [];
        cardsWon = [];
    }
};
