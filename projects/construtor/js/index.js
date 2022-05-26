'use strit'
function cardGame(suit, rank){
    this.suit = suit
    this.rank = rank

Card.Suit = enumeration({Clubs: 1, Diamonds: 2, Hearts:3, Spades:4});
Card.Rank = enumeration({Two: 2, Three: 3, Four: 4, Five: 5, Six: 6,
Seven: 7, Eight: 8, Nine: 9, Ten: 10,
Jack: 11, Queen: 12, King: 13, Ace: 14});

Card.prototype.toString = function() {
return this.rank.toString() + " of " + this.suit.toString();
            };

Card.prototype.compareTo = function(that) {
    if (this.rank < that.rank) return -1;
    if (this.rank > that.rank) return 1;
     return 0;
         };

Card.orderByRank = function(a,b) { return a.compareTo(b); };

Card.orderBySuit = function(a,b) {
if (a.suit < b.suit) return -1;
if (a.suit > b.suit) return 1;
if (a.rank < b.rank) return -1;
if (a.rank > b.rank) return 1;
return 0;
};

function Deck() {
    var cards = this.cards = []; // Um maço de cartas é apenas um array de cartas
    Card.Suit.foreach(function(s) { // Inicializa o array
    Card.Rank.foreach(function(r) {
    cards.push(new Card(s,r));
    });
    });
    }

    // Método shuffle: embaralha as cartas no local e retorna o maço
    Deck.prototype.shuffle = function() {
    // Para cada elemento no array, troca por um elemento mais baixo escolhido
    //aleatoriamente
    var deck = this.cards, len = deck.length;
    for(var i = len-1; i > 0; i--) {
    var r = Math.floor(Math.random()*(i+1)), temp; // Número aleatório
    temp = deck[i], deck[i] = deck[r], deck[r] = temp; // Troca
    }
    return this;
    };
    // Método deal: retorna um array de cartas
    Deck.prototype.deal = function(n) {
    if (this.cards.length < n) throw "Out of cards";
    return this.cards.splice(this.cards.length-n, n);
    };
    // Cria um novo maço de cartas, embaralha e distribui uma mão de bridge
    var deck = (new Deck()).shuffle();
    var hand = deck.deal(13).sort(Card.orderBySuit);
}

const card = new cardGame()
console.log(card.Card)
    