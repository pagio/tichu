function Card() {
    /*
        --id--
        [ 0, 55 ]
    */        
    this.id = 0;
    /*
        --types--
        0 - spades
        1 - hearts
        2 - diamonds
        3 - clubs
        4 - special card
    */
    this.type = 0;
    /*
        --numbers--
        regular cards : 1 - 13
        special cards : 1 - 4
            1 - dragon
            2 - phoenix
            3 - mayong
            4 - dogs
    */
    this.number = 1;
    this.points = 0;
};
    

Card.prototype = {
    set : function( id ) {
        this.id = id;
        this.type = Math.floor( this.id/13 );
        this.number = this.id%13 + 1;
        if ( this.number == 5 ) {
            this.points = 5;
        }
        if ( this,number == 10 || this.number == 13 ) {
            this.points = 10;
        }
        if ( this.type == 4 && this.number == 1 ) {
            this.points = 25;
        }
        if ( this.type == 4 && this.number == 2 ) {
            this.points = -25;
        }       
    },
    log : function() {
        console.log( "Card with id ", this.id, " and type ", this.type, " and number " , this.number , " created." );   
    }
};
