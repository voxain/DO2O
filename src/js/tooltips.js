let popups = []

export default function(){

popups.forEach(p => {
    if(p[0]) p[0].destroy()
})

popups.push(tippy('.badge.purple', {
    content: `<span class="tippy-headline purple">ETHEREAL</span> <span class="tippy-subtitle">CARD PROPERTY</span><br>This card will be <span class="info">Exhausted</span> at the end of your turn.<br><br>
    <span class="tippy-headline blue">EXHAUST</span> <span class="tippy-subtitle">CARD PROPERTY</span><br>Once played, this card will be removed from your pile for the rest of this combat.`,
    allowHTML: true,
    arrow: false,
    animation: 'perspective',
    inertia: true
}));
popups.push(tippy('.badge.blue', {
    content: '<span class="tippy-headline blue">EXHAUST</span> <span class="tippy-subtitle">CARD PROPERTY</span><br>Once played, this card will be removed from your pile for the rest of this combat.',
    allowHTML: true,
    arrow: false,
    animation: 'perspective',
    inertia: true
}));
popups.push(tippy('.badge.green', {
    content: '<span class="tippy-headline green">SPRINT</span> <span class="tippy-subtitle">CARD PROPERTY</span><br>This card will appear in your hand at the start of each combat.',
    allowHTML: true,
    arrow: false,
    animation: 'perspective',
    inertia: true
}));

popups.push(tippy('.info', {
    content: '<span class="tippy-headline red">SATAN\'S CURSE</span> <span class="tippy-subtitle">CURSE CARD</span><br>Unplayable Card.',
    allowHTML: true,
    arrow: false,
    animation: 'perspective',
    inertia: true
}));
popups.push(tippy('.rawdamage', {
    content: '<span class="tippy-headline red">RAW DAMAGE</span> <span class="tippy-subtitle">DAMAGE</span><br>Physical damage that bypasses enemie\'s shields.',
    allowHTML: true,
    arrow: false,
    animation: 'perspective',
    inertia: true
}));
popups.push(tippy('.damage', {
    content: '<span class="tippy-headline red">DAMAGE</span> <span class="tippy-subtitle">DAMAGE</span><br>Physical damage.',
    allowHTML: true,
    arrow: false,
    animation: 'perspective',
    inertia: true
}));
popups.push(tippy('.strength', {
    content: '<span class="tippy-headline red">STRENGTH</span> <span class="tippy-subtitle">STATUS EFFECT</span><br>Adds +X to your physical damage. Decreases by 1 every turn.',
    allowHTML: true,
    arrow: false,
    animation: 'perspective',
    inertia: true
}));
popups.push(tippy('.health', {
    content: '<span class="tippy-headline red">HEALTH</span> <span class="tippy-subtitle">RESOURCE</span><br>Health points.',
    allowHTML: true,
    arrow: false,
    animation: 'perspective',
    inertia: true
}));
popups.push(tippy('.scared', {
    content: '<span class="tippy-headline red">SCARED</span> <span class="tippy-subtitle">STATUS EFFECT</span><br>Receives +X additional damage from every attack. Decreases by 1 every turn.',
    allowHTML: true,
    arrow: false,
    animation: 'perspective',
    inertia: true
}));
popups.push(tippy('.mystery', {
    content: '<span class="tippy-headline purple">MYSTERY</span> <span class="tippy-subtitle">STATUS EFFECT</span><br>You gain +X additional shields from applicable cards. Decreases by 1 every turn.',
    allowHTML: true,
    arrow: false,
    animation: 'perspective',
    inertia: true
}));
popups.push(tippy('.shield', {
    content: '<span class="tippy-headline blue">SHIELD</span> <span class="tippy-subtitle">RESORUCE</span><br>Reduces incoming damage by X. Depletes beginning with the next turn.',
    allowHTML: true,
    arrow: false,
    animation: 'perspective',
    inertia: true
}));

popups.push(tippy('.item.player', {
    content: '<span class="tippy-headline">THE WARRIOR</span> <span class="tippy-subtitle">PLAYER CLASS</span><br>An agile class focused on dealing massive damage. Starting set: <span class="info">Warrior</span>',
    allowHTML: true,
    arrow: false,
    animation: 'perspective',
    inertia: true
}));
popups.push(tippy('.potion.chaos', {
    content: '<span class="tippy-headline blue">CHAOS WINE</span> <span class="tippy-subtitle">POTION</span><br>Instantly plays the next 3 cards from your draw pile.',
    allowHTML: true,
    arrow: false,
    animation: 'perspective',
    inertia: true
}));
popups.push(tippy('.potion.healing', {
    content: '<span class="tippy-headline blue">ALOE WATER</span> <span class="tippy-subtitle">POTION</span><br>Heals 20 ❤️.',
    allowHTML: true,
    arrow: false,
    animation: 'perspective',
    inertia: true
}));
popups.push(tippy('.artifact.helmet', {
    content: '<span class="tippy-headline blue">WARRIOR\'S HELMET</span> <span class="tippy-subtitle">ARTIFACT</span><br>Gives you +5🛡️ at the start of your first turn.',
    allowHTML: true,
    arrow: false,
    animation: 'perspective',
    inertia: true
}));
console.log(popups)
}