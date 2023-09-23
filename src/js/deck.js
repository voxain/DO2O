import cards from "./cards.js"



let sets = {
    warrior: ['strike', 'strike', 'strike', 'strike', 'strike', 'strike', 'block', 'block', 'block', 'block', 'block', 'bash'],
    test: ['strike', 'block', 'bash', 'impact', 'rage', 'nomercy', 'pact']
}
class Deck{
    #incrementor = 0
    #cards = {}
    #inactiveCards = [] //exhausted/ethereals
    #activeHand = []
    constructor(set){
        this.initializeDeck(set)
    }

    addCard(card){
        this.#cards[this.#incrementor] = card

        this.#incrementor++
    }

    initializeDeck(set){
        sets[set].forEach(cID => {
            this.addCard(cards[cID])
        });
    }
    getCards(){
        return this.#cards
    }
    resetDeck(){
        this.#inactiveCards = []
    }
    shuffle(){

    }
    drawCards(){

    }
}


export default Deck