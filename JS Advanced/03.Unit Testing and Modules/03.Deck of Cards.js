function printDeckOfCards(deck){
    function makeCards (face, suit){
        let faces = ['2', '3', '4','5','6','7','8','9','10','J','Q','K','A'];
        let suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };
    
        if(!faces.includes(face)){
            throw new Error(`Invalid card: ${face + suit}`);
        } else if(!suits.hasOwnProperty(suit)){
            throw new Error(`Invalid card: ${face + suit}`);
        }
    
        return `${face}${suits[suit]}`;
    }

    let cards = [];

    try {
        for(let cardOfDeck of deck){
            const face = cardOfDeck.slice(0,cardOfDeck.length - 1);
            const suit = cardOfDeck.substr(cardOfDeck.length - 1);
    
            const card = makeCards(face,suit);
            cards.push(card);
        }
    } catch(error) {
        console.log(error.message);
        return;
    }   

    console.log(cards.join(' '));
}
printDeckOfCards(['5S', '3D', 'QD', '1C']);