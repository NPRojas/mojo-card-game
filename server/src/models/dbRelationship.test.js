const {User, Deck, Card, Attack} = require("../models");

describe("Database Relationships", () => {
    // define vars in the global scope
    let user1;
    let deck1;

    beforeAll(async () => {
        user1 = await User.create({username: "OrangeSoda"});

        deck1 = await user1.createDeck({name: "Fanta"});
    })

    it("should check that User and Deck have a one to one relationship", async() => {
        // attempt to rewrite the deck
        await user1.createDeck({name: "Sprite"});
        user1Deck = await user1.getDeck();
        expect(user1Deck.name).toEqual("Fanta");
    })

    it("should check that Deck and Card have a one to many relationship", async() => {
        await user1Deck.createCard({name: "Card1", mojo: 20, stamina: 120, imgUrl: null});
        await user1Deck.createCard({name: "Card2", mojo: 20, stamina: 120, imgUrl: null});

        const user1Cards = await user1Deck.getCards();
        expect(user1Cards.length.toBe(2));
    })

    it("should check that Card and Attack have a many to many relationship", async() => {

    })


});