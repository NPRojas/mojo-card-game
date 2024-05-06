const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require("./Deck");
const db = require("../db/config");

// define instance in the global scope
let deck;

// clear db and create new deck before tests 
beforeAll(async () => {
    await db.sync({ force: true })
    deck = await Deck.create({ name: "Deck1", xp: 300 })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Deck', () => {
    it('has an id', async () => {
      expect(deck).toHaveProperty('id')
    })
  
    it('has a name', async () => {
      expect(deck).toHaveProperty('name')
    })

    it('has xp', async () => {
        expect(deck).toHaveProperty('xp')
      })
  
    it("name matches input", async () => {
      expect(deck.name).toBe("Deck1")
    })

    it("xp matches input", async () => {
        expect(deck.xp).toBe(300)
      })
  })
  