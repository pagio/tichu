function Deck( type ) {
    var cards = [];
    if ( typeof b === "undefined" || type == 'full' ) {
        //make a full stack of tichu cards
        for ( var i = 0; i < 56; i++ ) {
            cards.push( new Card( i ) );    
        }
    }
    else if ( type == "empty" ) {
        //do nothing
    }
    
    this.shuffle = function() {
        //shufle deck 
        //TODO  
    };
    this.get = function( amount ) {
        var res = [];
        for ( var i = cards.length - 1; i >= 0 && amount > 0; i-- ) {
            res.push( cards[ i ] );
            cards.pop();
            amount--;
        }
        return res;            
    };
    this.add = function( newCards ) {
        cards = cards.concat( newCards );
        return;    
    };
    this.remove = function( theCards ) {
        var ids = [];
        for ( var i = 0; i < theCards.length; i++ ) {
            ids.push( theCards[ i ].id );
        }
        this.removeById( ids );
    };
    this.removeById = function( ids ) {
        for ( var i = 0; i < cards.length; i++ ) {
            for ( var u = 0; u < ids.length; u++ ) {
                if ( cards[i].id == ids[ u ] ) {
                    cards[ i ].splice( i, 1 );
                }
            }
        }    
    };    
    this.contains = function( id ) {
        for ( var i = 0; i < cards.length;i++ ) {
            if ( cards[ i ].id == id ) {
                return true;
            }
        }
        return false;
    };
    
    
};
