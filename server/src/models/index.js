const User = require('./User');
const Deck = require('./Deck');
const Card = require('./Card');
const Attack = require('./Attack');

// import the rest of your models above

// set up the associations here
// one to one relationship association 
User.hasOne(Deck);
Deck.belongsTo(User);

// one to many 
Deck.hasMany(Card);
Card.belongsTo(Deck);

//many to many 
Card.belongsToMany(Attack, {through: "CardAttacks"});
Attack.belongsToMany(Card, {through: "CardAttacks" });

// and then export them all below
module.exports = { User, Deck, Card, Attack};
