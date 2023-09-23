const cards = new Draggable.Sortable(document.querySelector('.hand'), {
    draggable: '.card',
    plugins: [Draggable.Plugins.SortAnimation],
    swapAnimation: {
      duration: 2000,
      easingFunction: 'ease-in-out',
    },
});

import deck from "./deck.js";
import templates from "./templates.js";
import tooltips from "./tooltips.js";
import badges from "./badges.js";

const playerDeck = new deck('test')
console.log(playerDeck)

Object.values(playerDeck.getCards()).forEach((c, i) => {
    c = c.getProperties()
    let cardElement = new DOMParser().parseFromString(
        templates.card
            .replace(/::IMAGE::/g, c.image)
            .replace(/::NAME::/g, c.name)
            .replace(/::TYPE::/g, c.type)
            .replace(/::RARITY::/g, c.rarity)
            .replace(/::BADGE::/g, c.modifiers ? badges[c.modifiers] : '')
            .replace(/::TEXT::/g, c.text), 'text/html'
    )
    setTimeout(() => playToHand(cardElement), i * 100);

});

function playToHand(card){
    document.querySelector('.hand').append(card.body.childNodes[0])
    tooltips()
}
