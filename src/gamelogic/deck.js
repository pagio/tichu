function Deck() {
    var cards = [];
    for ( var i = 0; i < 56; i++ ) {
        cards.push( new Card( i ) );    
    }
    
    this.shuffle = function() {
        //shufle deck 
        //TODO  
    };
    this.getCards = function( amount ) {
        var res = [];
        for ( var i = cards.length - 1; i >= 0 && amount > 0; i-- ) {
            res.push( cards[ i ] );
            cards.pop();
            amount--;
        }
        return res;            
    };
};
