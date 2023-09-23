let cards =  {}
export default cards

export class Card{
    #id
    #name
    #rarity //common, uncommon, rare, epic, legendary
    #type //attack, skill, power
    #activation //1 = playable(by player), 2 = permanent, 4 = trigger (bits - 3 = perm&play, 5 = trig&play...)
    #modifiers //1 = ethereal, 2 = exhaust, 4 = sprint (bits - 3 = eth&exh, 5 = spr&eth...)
    #image //url
    #text //html description
    #play //function / on play
    #trigger //function / trigger equation
    #activated //function / activated on #trigger() == true
    #targets //enemy, player, global

    constructor(id, properties){
        this.#id = id;
        this.#name = properties.name;
        this.#rarity = properties.rarity;
        this.#type = properties.type;
        this.#activation = properties.activation;
        this.#modifiers = properties.modifiers;
        this.#image = properties.image;
        this.#text = properties.text;
        this.#play = properties.play;
        this.#trigger = properties.trigger;
        this.#activated = properties.activated;

        cards[this.#id] = this;
    }

    getID(){
        return this.#id;
    }
    getProperties(){
        return {
            image: this.#image, 
            name: this.#name,
            rarity: this.#rarity,
            type: this.#type,
            text: this.#text,
            modifiers: this.#modifiers
         }
    }
}

new Card('strike', {
    name: "Strike",
    rarity: "common",
    type: "attack",
    activation: 1,
    modifiers: 0,
    image: "https://wiki.dungeondefenders2.com/images/1/12/Squire_swordbeam.png",
    text: `Deal 5<span class="damage">⚔️</span>`,
    play: (target) => {
        target.attack(5);
    },
    targets: "enemy"
})

new Card('bash', {
    name: "Bash",
    rarity: "common",
    type: "attack",
    activation: 1,
    modifiers: 0,
    image: "https://wiki.dungeondefenders2.com/images/8/81/Squire_seismic_slam.png",
    text: `Deal 3<span class="rawdamage">💥</span>`,
    play: (target) => {
        target.attackRaw(3);
    },
    targets: "enemy"
})

new Card('block', {
    name: "Block",
    rarity: "common",
    type: "skill",
    activation: 1,
    modifiers: 0,
    image: "https://wiki.dungeondefenders2.com/images/4/40/Squire_training_dummy.png",
    text: `Gain 5<span class="shield">🛡️</span>`,
    play: (target) => {
        target.addBlock(5);
    },
    targets: "player"
})

new Card('impact', {
    name: "Brutal Impact",
    rarity: "rare",
    type: "attack",
    activation: 1,
    modifiers: 0,
    image: "https://wiki.dungeondefenders2.com/images/4/4c/Lavamancer_Eruption.png",
    text: `Deal 30<span class="damage">⚔️</span>`,
    play: (target) => {
        target.attack(30);
    },
    targets: "enemy"
})

new Card('rage', {
    name: "Knightly Rage",
    rarity: "common",
    type: "skill",
    activation: 1,
    modifiers: 0,
    image: "https://wiki.dungeondefenders2.com/images/a/ab/Squire_Provoke.png",
    text: `Gain 3<span class="strength">💪</span>.`,
    play: (target) => {
        target.addStatus('strength', 3);
    },
    targets: "player"
})

new Card('nomercy', {
    name: "No Mercy",
    rarity: "common",
    type: "skill",
    activation: 1,
    modifiers: 2,
    image: "https://wiki.dungeondefenders2.com/images/6/68/Squire_ballista.png",
    text: `Gain 5<span class="strength">💪</span>.<br>
    Each time this card is played, permanently increase it's +<span class="strength">💪</span> by 1.`,
    play: (target) => {
        //target.addStatus('strength', 3);
    },
    targets: "player"
})

new Card('pact', {
    name: "Pact",
    rarity: "rare",
    type: "skill",
    activation: 1,
    modifiers: 2,
    image: "https://wiki.dungeondefenders2.com/images/3/30/AbyssLord_command.png",
    text: `Lose 10<span class="health">❤️</span>.<br>
    Gain 10<span class="strength">💪</span>.<br>
    Shuffle 1 <span class="info">🃏Satan's Curse</span> into your draw pile.`,
    play: (target) => {
        //target.addStatus('strength', 3);
    },
    targets: "player"
})
